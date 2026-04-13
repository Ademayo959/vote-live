// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import Dashboard from './Dashboard';
import Authpage from './Authpage';
import HelpModal from './HelpModal';
import HelpAndSupport from './HelpAndSupport'
import CreateElectionModal from './CreateElectionModal';
import CreatePollModal from './CreatePollModal';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/help' element={<HelpAndSupport />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/signup" element={<Authpage />} />
      <Route path="/login" element={<Authpage />} />
      <Route path="/create" element={<CreateElectionModal/>} />
      <Route path='/createpoll' element={<CreatePollModal />}/>
    </Routes>
  )
}

export default App
