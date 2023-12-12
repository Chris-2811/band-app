import React, { useContext } from 'react';
import about from '../assets/about-us.jpg';
import plus from '../assets/design-plus.png';
import UserPanel from '../components/UserPanel';
import Heading from '../components/Heading';
import DarkModeContext from '../context/DarkModeContext';

function Band() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="mt-14">
      <div className="container ">
        <img src={about} alt="" className="w-full h-[20rem] object-cover" />
        <div className="mt-14 pb-20 border-b-8">
          <Heading title={'Die Band'} />
          <div className="flex flex-wrap justify-start gap-8 mt-12 pl-8">
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Christian Mörtel
              </h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Hannah Roth
              </h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Vinzenz Wolpold
              </h2>
              <p className="text-primary">// Trompete</p>
              <p className="mt-6 max-w-[230px] text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Anna Mörtel
              </h2>
              <p className="text-primary">// Posaune</p>
              <p className="mt-6 max-w-[230px] text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Johannes Mehring
              </h2>
              <p className="text-primary">// Posaune</p>
              <p className="mt-6 max-w-[230px] text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Manuel Vildosola
              </h2>
              <p className="text-primary">// Tuba</p>
              <p className="mt-6 max-w-[230px] text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quasi.
              </p>
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Martin Wiesinger
              </h2>
              <p className="text-primary">// Schlagzeug</p>
              <p className="mt-6 max-w-[230px] text-body">
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
