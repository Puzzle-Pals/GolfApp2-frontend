import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Admin from './admin/Admin';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;