import React from 'react';
import { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import * as images from '../assets/gallery/index.js';
import UserPanel from '../components/UserPanel.jsx';
import { tourData } from '../data.jsx';

function Gallery() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className=" pb-10 mt-8">
      <Heading title={'Gallerie'} />
      <div className="grid gap-6 mt-6 pb-16 border-b-4 md:mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {Object.values(images).map((image) => (
          <div className="gallery-image  rounded-lg overflow-hidden">
            <img
              src={image}
              alt=""
              className=" w-full h-auto aspect-square object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
