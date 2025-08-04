import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App