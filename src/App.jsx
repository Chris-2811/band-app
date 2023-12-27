import { useState, useNavigate } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Band, Tour, Gallery, Listen } from './pages/index.js';
import Navbar from './components/Navbar.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <main className="mt-12 md:mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/band" element={<Band />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
