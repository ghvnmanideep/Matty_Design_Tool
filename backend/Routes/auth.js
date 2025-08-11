const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const { OAuth2Client } = require('google-auth-library');

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ✅ Register User
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) return res.status(400).send('User already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();

    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).send('Server error');
  }
});

// ✅ Login User (username/password)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid username or password');

    if (!user.password) {
      return res.status(400).send('Please log in with Google for this account');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid username or password');

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, username: user.username, role: user.role });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Server error');
  }
});

// ✅ Google Login
router.post('/google-login', async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Verify token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: name.replace(/\s+/g, ''), // remove spaces
        email,
        password: '',
        googleId
      });
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, username: user.username, role: user.role });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(401).send('Google login failed');
  }
});

module.exports = router;
