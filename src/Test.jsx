import React from 'react';
import { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import UserPanel from '../components/UserPanel';
import { tourData } from '../data';

function Test() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="container">
      <Heading title={'Test Daten'} />

      <ul className="mt-14 border-b-4 pb-16">
        {tourData.map((data) => {
          return (
            <ul className="mt-14 border-b-4 pb-16">
              <li className="md:flex md:items-center md:justify-between md:pt-8">
                <p className="dark:text-white text-body md:max-w-md lg:max-w-none">
                  {data.title} | {data.datum} | {data.ort} | 91207 Lauf a.d
                  Pegnitz
                </p>
                <button className="w-full md:w-auto mt-6 md:mt-0 border-2 border-body dark:border-white py-1 px-8 dark:text-white text-body">
                  Eintritt Frei
                </button>
              </li>
            </ul>
          );
        })}
      </ul>
      <UserPanel />
    </div>
  );
}

export default Test;
