import React, { createContext, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import usePersistedTheme from './usePersistedTheme';

interface Theme {
  name: string;
  colors: {
    octocat: string,
    background: {
      primary: string,
      secondary: string,
      ternary: string,
    },
    text: {
      primary: string,
      secondary: string,
    },
    boxShadow: {
      primary: string,
    },
    border: {
      primary: string,
    },
    goToGitHub: {
      primary: string,
      secondary: string,
      background: {
        primary: string,
        secondary: string,
      }
    }
}
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const SelectThemeProvider: React.FC = ({ children }) => {

  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
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


