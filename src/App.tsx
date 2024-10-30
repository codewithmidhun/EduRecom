import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import AssessmentPage from './pages/AssessmentPage';
import CareerGuidance from './pages/CareerGuidance';
import ResourceCenter from './pages/ResourceCenter';
import AuthPage from './pages/AuthPage';
import CounselorChat from './pages/CounselorChat';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/resources" element={<ResourceCenter />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/counselors" element={<CounselorChat />} />
            <Route path="/chat/:counselorId" element={<ChatRoom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;