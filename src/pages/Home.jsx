import React, { useEffect } from 'react';
import { useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Hero from '../components/Hero';
import UserPanel from '../components/UserPanel';

function Home() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="container">
      <div className="pb-16 border-b-4">
        <Hero />
      </div>
      <UserPanel />
    </div>
  );
}

export default Home;
