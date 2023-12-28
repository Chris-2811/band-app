import React from 'react';
import bg from '../assets/bg-1.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero relative ">
      <div className="absolute inset-0 bg-black opacity-20"></div>{' '}
      {/* This is the overlay */}
      <div className="absolute w-full text-center  bottom-[15vw] lg:bottom-32 ">
        <h1 className="text-center uppercase text-3xl sm:text-4xl  md:text-5xl lg:text-6xl text-white mb-7 md:mb-10">
          Dess BrassdScho
        </h1>
        <Link
          to="/listen"
          className="text-white text-sm lg:max-w-10 border-3 py-3 px-7 md:py-4 md:px-10 uppercase hover:border-primary hover:text-primary"
        >
          hoeren Sie unsere Musik
        </Link>
      </div>
      <img
        src={bg}
        alt="image of band"
        className="min-h-[290px]  h-[45vw] max-h-[500px] w-full object-cover"
      />
    </div>
  );
}

export default Hero;
