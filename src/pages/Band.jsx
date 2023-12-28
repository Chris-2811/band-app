import React, { useContext, useEffect } from 'react';
import about from '../assets/about-us.jpg';
import plus from '../assets/design-plus.png';
import UserPanel from '../components/UserPanel';
import Heading from '../components/Heading';
import DarkModeContext from '../context/DarkModeContext';

function Band() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="mt-14">
      <div className="container ">
        <img src={about} alt="" className="w-full h-[20rem] object-cover" />
        <div className="mt-14 pb-16 border-b-4">
          <Heading title={'Die Band'} />
          <div className="flex flex-wrap justify-start gap-8 mt-12 pl-8">
            <div>
              <h2 className="text-primary text-lg font-bold">
                Christian Mörtel
              </h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">Hannah Roth</h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">
                Vinzenz Wolpold
              </h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">Anna Mörtel</h2>
              <p className="text-primary">// Posaune</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">
                Johannes Mehring
              </h2>
              <p className="text-primary">// Posaune</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">
                Manuel Vildosola
              </h2>
              <p className="text-primary">// Tuba</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-bold">
                Martin Wiesinger
              </h2>
              <p className="text-primary">// Schlagzeug</p>
              <p className="mt-6 max-w-[230px] text-body dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
          </div>
        </div>
        <UserPanel />
      </div>
    </div>
  );
}

export default Band;
