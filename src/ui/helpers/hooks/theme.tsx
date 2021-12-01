import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { firstTheme, secondTheme } from '../styles/themes';
import usePersistedTheme from './usePersistedTheme';


interface Theme {
    name: string;
    colors: {
        primary: string,
        black: string,
        background: string,
        border: string,
    }
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>(firstTheme);

const [theme, setTheme] = usePersistedTheme('theme', firstTheme);

//   const toggleTheme = useCallback(() => {
//     if (theme.name === 'first'){
//       setTheme(secondTheme);
//     }
//     else if (theme.name === 'second') {
//       setTheme(firstTheme);
//     }
//   }, [theme]);

const toggleTheme = () => {
    // setTheme(theme.name === 'first' ? secondTheme : firstTheme);
    setTheme(theme.name === 'first' ? secondTheme : firstTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  ) 
}

export default ThemeProvider;


