'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    //localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  //   useEffect(() => {
  //     if (!localStorage.getItem('mode')) {
  //       setMode('dark');
  //       localStorage.setItem('mode', mode);
  //     } else {
  //       setMode(localStorage.getItem('mode'));
  //     }
  //   }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
