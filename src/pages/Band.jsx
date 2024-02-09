import React, { useContext, useEffect } from 'react';
import about from '../assets/about-us.jpg';
import UserPanel from '../components/UserPanel';
import Heading from '../components/Heading';
import DarkModeContext from '../context/DarkModeContext';
import { bandData } from '../data';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {bandData.map((member) => {
              return (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    className="w-full h-64 object-cover"
                    src={member.avatar}
                    alt={member.name}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary">
                      {member.name}
                    </h2>
                    <div className="flex items-center">
                      <p className="text-primary mt-2">{member.instrument}</p>
                      <img
                        src={member.icon}
                        alt=""
                        className="w-10 ml-5 mt-1"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <UserPanel />
      </div>
    </div>
  );
}

export default Band;
