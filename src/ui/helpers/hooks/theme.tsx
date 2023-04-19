import React, { createContext, useContext } from 'react';
import { ThemeProvider, DefaultTheme, ITheme } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import usePersistedTheme from './usePersistedTheme';

interface ThemeContextData {
  toggleTheme(): void;
  theme: ITheme;
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


