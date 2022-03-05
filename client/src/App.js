import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import Login from './components/Login/login'
import RegistrationForm from './components/RegistrationForm/registrationForm'
import OtpVerification from './components/OtpVerification/OtpVerification'
import VoterDashboard from './screens/Voter/VoterDashboard'
import CandidateDashboard from './screens/Candidate/CandidateDashboard'
import AdminDashboard from './screens/Admin/AdminDashboard'
import ChatBot from './screens/chatbot/ChatBot'
import Vote from './components/Vote/Vote'
import Verification from './components/Face-Recognition/verification'
import CandidateManifesto from './components/Candidate/CandidateManifesto'
import AddCandidate from './components/Blockchain/AddCandidate'
import ManageCandidates from './components/Blockchain/ManageCandidates'
import LiveData from './components/Blockchain/LiveData'
import GetMetaId from './components/GetMetaId/GetMetaId'
import ViewManifestos from './components/Manifestos/ViewManifestos'
import ComingSoon from './components/Layouts/ComingSoon'
import ViewProfile from './components/ViewProfile/ViewProfile'

const App = () => {
  const [user, setUser] = useState('')

  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/verify" element={<OtpVerification />} />
        <Route path="/voter/dashboard" element={<VoterDashboard />} />
        <Route path="/voter/manifestos" element={<ViewManifestos />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/candidate/manifesto" element={<CandidateManifesto />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/voter/vote" element={<Vote />} />
        <Route path="/livedata" element={<LiveData />} />
        <Route path="/facial-verification" element={<Verification />} />
        <Route path="/admin/addCandidate" element={<AddCandidate />} />
        <Route path="/admin/manageCandidates" element={<ManageCandidates />} />
        <Route path="/walletid" element={<GetMetaId />} exact />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/profile" element={<ViewProfile />} />
      </Routes>
    </>
  )
}

export default App
