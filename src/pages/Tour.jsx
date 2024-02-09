import React from 'react';
import { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import UserPanel from '../components/UserPanel';
import { tourData } from '../data';

function Tour() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="container">
      <Heading title={'Tour Daten'} />

      <ul className="mt-6 md:mt-4 border-b-4 pb-16">
        <li className="hidden lg:grid grid-cols-3 gap-4 lg:gap-10 xl:gap-16 py-8 border-b-2">
          <h3 className="text-lg dark:text-white">Was?</h3>
          <h3 className="text-lg dark:text-white">Wann?</h3>
          <h3 className="text-lg dark:text-white">Wo?</h3>
        </li>
        {tourData.map((data, index) => {
          return (
            <li
              key={data.id}
              className={`md:flex md:items-center lg:max-h-[120px]  md:justify-between lg:grid lg:grid-cols-3 gap-10 xl:gap-16 ${
                index === tourData.length - 1
                  ? 'border-none mt-8'
                  : 'pb-8 md:border-b-2 md:py-8'
              }`}
            >
              <p className="dark:text-white lg:text-lg text-body md:max-w-lg lg:max-w-none ">
                <span className="lg:hidden">
                  {data.title} | {data.datum} | {data.addresse} | {data.ort}
                </span>
                <span className="hidden lg:block">{data.title}</span>
              </p>
              <p className="dark:text-white lg:text-lg text-body md:max-w-md lg:max-w-none hidden lg:block">
                {data.datum}
              </p>
              <p className="dark:text-white lg:text-lg text-body md:max-w-md lg:max-w-none hidden lg:block">
                {data.addresse} | {data.ort}
              </p>
              <button
                className={`w-full md:w-auto mt-6 md:mt-0 border-2 border-body dark:border-white py-1 px-8 dark:text-white text-body flex-shrink-0 lg:hidden`}
              >
                Eintritt Frei
              </button>
            </li>
          );
        })}
      </ul>
      <UserPanel />
    </div>
  );
}

export default Tour;
