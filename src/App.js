import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Scorecard from './components/Scorecard';
import Results from './components/Results';
import Stats from './components/Stats';
import Admin from './components/Admin';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-green-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scorecard" element={<Scorecard />} />
          <Route path="/results" element={<Results />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;