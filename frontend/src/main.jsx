import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Register from "./Register/Register"
import Login from './Login/Login.jsx'
import Editor from "./components/Editor.jsx"
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Register />} />
      <Route path='editor' element={<Editor />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
