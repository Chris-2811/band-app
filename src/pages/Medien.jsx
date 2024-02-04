import React, { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import ReactPlayer from 'react-player/youtube';
import UserPanel from '../components/UserPanel';
import Gallery from './Gallery';

function Medien() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const videoUrls = [
    'https://www.youtube.com/watch?v=m4NE5bpKsWs',
    'https://www.youtube.com/watch?v=-zkhr6Ta0HI',
    'https://www.youtube.com/watch?v=GbAJLkAf4es',
  ];

  return (
    <div className="container">
      <Heading title={'Videos'} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 md:mt-8">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden h-[57vw]  lg:h-96"
          >
            <ReactPlayer
              url={url}
              controls={true}
              width="100%"
              height="100%"
              className=""
            />
          </div>
        ))}
      </div>

      <Gallery />
      <UserPanel />
    </div>
  );
}

export default Medien;
