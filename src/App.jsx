// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import Dashboard from './Dashboard';
import Authpage from './Authpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="signup" element={<Authpage />} />
      <Route path="login" element={<Authpage />} />
    </Routes>
  )
}

export default App
