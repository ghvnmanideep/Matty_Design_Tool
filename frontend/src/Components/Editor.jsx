import React, { useRef, useEffect } from 'react';
import EditNavbar from '../Header/EditNavbar';

function BorderCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 1000, 1000);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', margin: 'auto', backgroundColor: 'transparent' }}
    />
  );
}

export default function Editor() {
  // Read username from sessionStorage
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const username = storedUser?.username || 'Guest';

  return (
    <div className="bg-black min-h-screen text-white">
      <div style={{ paddingTop: '5rem' }}>
        <EditNavbar />

        {/* Welcome message */}
        <div className="text-center text-2xl font-bold my-4">
          Welcome {username}
        </div>

        {/* Canvas */}
        <div className="p-6 flex justify-center">
          <BorderCanvas />
        </div>
      </div>
    </div>
  );
}
  