import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, secondTheme } from '../styles/themes';
import usePersistedTheme from './usePersistedTheme';
import { DefaultTheme } from 'styled-components';

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

  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? secondTheme : lightTheme);
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


