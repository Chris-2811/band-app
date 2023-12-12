import React from 'react';
import Hero from '../components/Hero';
import UserPanel from '../components/UserPanel';

function Home() {
  return (
    <div className="container">
      <Hero />
      <UserPanel />
    </div>
  );
}

export default Home;
