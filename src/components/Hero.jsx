import React from 'react';
import bg from '../assets/bg-1.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section>
      <div className="hero relative ">
        <div className="absolute inset-0 bg-black opacity-20"></div>{' '}
        {/* This is the overlay */}
        <div className="absolute w-full text-center  bottom-[15vw] lg:bottom-32 ">
          <h1 className="text-center  text-3xl sm:text-4xl  md:text-5xl lg:text-6xl text-white mb-7 md:mb-10">
            „des BRASSd scho"
          </h1>
          <Link
            to="/medien"
            className="text-white text-sm lg:max-w-10 border-3 py-3 px-7 md:py-4 md:px-10 uppercase hover:border-primary hover:text-primary"
          >
            hören Sie unsere Musik
          </Link>
        </div>
        <img
          src={bg}
          alt="image of band"
          className="min-h-[290px]  h-[45vw] max-h-[500px] w-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-primary text-lg mt-6 md:mt-8 mb-2">
          dBs - des BRASSd scho!
        </h3>
        <p className="dark:text-white  text-body md:max-w-lg md:mx-auto">
          Die junge 7-köpfige Blechbläsertruppe hat sich Anfang 2018 durch ein
          Casting zusammengefunden. Ihr Erfolgsrezept für einen unterhaltsamen
          Abend: Eine geballte Ladung Brass, gemixt mit Stimmungs-, Pop- und
          Blasmusik, abgerundet durch eine Prise Humor, überraschenden Einlagen
          und jeder Menge Begeisterung an der Musik. Machen Sie sich darauf
          gefasst, dass Sie nach unglaublicher Brasspower Ihre Vorstellung von
          "Blasmusik" gründlich überdenken müssen.
        </p>
      </div>
    </section>
  );
}

export default Hero;
