import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Register from "./Register/Register"
import Login from './Login/Login.jsx'
import Editor from "./components/Editor.jsx"
import GetStarted from './pages/GetStarted.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<GetStarted />} />
      <Route path='/register' element={<Register />} />
      <Route path='/signin' element={<Login />} />
      <Route path='editor' element={<Editor />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
