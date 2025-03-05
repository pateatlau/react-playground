import { createContext, JSX, useState } from 'react';

type ThemeContext = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

const ThemeContext = createContext<ThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
});

const ThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [darkMode, setDarkMode] = useState('light');

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
