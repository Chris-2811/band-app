import { createContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
