import React from 'react';
import { useEffect, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import Heading from '../components/Heading';
import UserPanel from '../components/UserPanel';

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
      <ul className="mt-14 border-b-4 pb-16">
        <li className="md:flex md:items-center md:justify-between pb-8 md:border-b-2">
          <p className="dark:text-white text-body md:max-w-md lg:max-w-none">
            Eröffnung Biergartensaison | Mo 01.05.23 | Biergarten Kunigundenberg
            | 91207 Lauf a.d Pegnitz
          </p>
          <button className="w-full mt-6 md:mt-0 md:w-auto border-2 py-1 border-body dark:border-white px-8 dark:text-white text-body">
            Eintritt Frei
          </button>
        </li>
        <li className="md:flex md:items-center pb-8 md:justify-between md:py-8 md:border-b-2">
          <p className="dark:text-white text-body md:max-w-md lg:max-w-none ">
            Vatertag am Rockers | Mo 01.05.23 | Biergarten Kunigundenberg |
            91207 Lauf a.d Pegnitz
          </p>
          <button className="w-full md:w-auto mt-6 md:mt-0 border-2 border-body dark:border-white py-1 px-8 dark:text-white text-body">
            Eintritt Frei
          </button>
        </li>
        <li className="pb-8 md:flex md:items-center md:justify-between md:py-8 md:border-b-2">
          <p className="dark:text-white text-body md:max-w-md lg:max-w-none">
            Sommerfest Neunkirchen am Sand | Mo 01.05.23 | Biergarten
            Kunigundenberg | 91207 Lauf a.d Pegnitz
          </p>
          <button className="w-full md:w-auto mt-6 md:mt-0 border-2 py-1 px-8 border-body dark:border-white dark:text-white text-body">
            Eintritt Frei
          </button>
        </li>
        <li className="md:flex md:items-center md:justify-between md:pt-8">
          <p className="dark:text-white text-body md:max-w-md lg:max-w-none">
            Haberloh Kirchweih | Mo 01.05.23 | Biergarten Kunigundenberg | 91207
            Lauf a.d Pegnitz
          </p>
          <button className="w-full md:w-auto mt-6 md:mt-0 border-2 border-body dark:border-white py-1 px-8 dark:text-white text-body">
            Eintritt Frei
          </button>
        </li>
      </ul>
      <UserPanel />
    </div>
  );
}

export default Tour;
