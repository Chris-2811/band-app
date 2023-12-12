import React from 'react';
import bg from '../assets/bg-1.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero mt-[-2rem] relative ">
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>{' '}
      {/* This is the overlay */}
      <div className="absolute z-10 w-full text-center = useContext(second) bottom-[15vw]">
        <h1 className="text-center uppercase text-6xl text-white mb-10">
          Dess BrassdScho
        </h1>
        <Link
          to="/listen"
          className="text-white max-w-10 border-3 py-4 px-10 uppercase hover:border-primary hover:text-primary"
        >
          hoeren Sie unsere Musik
        </Link>
      </div>
      <img src={bg} alt="" className="h-[45vw] w-full object-cover" />
    </div>
  );
}

export default Hero;
