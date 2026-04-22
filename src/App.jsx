// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import Dashboard from './Dashboard';
import Authpage from './Authpage';
import HelpModal from './HelpModal';
import ElectionsResult from './ElectionsResult';
import ElectionsPage from './ElectionsPage';
import HelpAndSupport from './HelpAndSupport'
import CreateElectionModal from './CreateElectionModal';
import CreatePollModal from './CreatePollModal';
import HowItWorks from './HowItWorks';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/help' element={<HelpAndSupport />}/>
      <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      <Route path="/election/:electionId" element={<ElectionsPage />}/>
      <Route path="/election-result/:electionId" element={<ElectionsResult />}/>
      <Route path="/signup" element={<Authpage />} />
      <Route path="/login" element={<Authpage />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/create" element={<CreateElectionModal/>} />
      <Route path="/createpoll" element={<CreatePollModal />}/>
    </Routes>
  )
}

export default App
