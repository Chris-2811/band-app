import React from 'react';
import { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import * as images from '../assets/gallery/index.js';
import UserPanel from '../components/UserPanel.jsx';

function Gallery() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="container pb-10">
      <Heading title={'Gallery'} />
      <div className="grid gap-6 mt-6 pb-16 border-b-4 md:mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {Object.values(images).map((image) => (
          <div className="gallery-image cursor-pointer">
            <img
              src={image}
              alt=""
              className=" w-full h-auto aspect-square object-cover "
            />
            <div className="image-text">
              <h3 className="font-semibold text-xl mb-2">Image Title</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
                exercitationem?
              </p>
            </div>
          </div>
        ))}
      </div>
      <UserPanel />
    </div>
  );
}

export default Gallery;
