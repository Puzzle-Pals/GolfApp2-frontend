import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Scores from './pages/Scores';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  );
};

export default Admin;