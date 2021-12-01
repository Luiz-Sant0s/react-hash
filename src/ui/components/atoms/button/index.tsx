import React from 'react';
import { useTheme } from '../../../helpers/hooks/theme';

// import { Contain er, ComponentButton } from './styles';

const Button: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  return (
   
      <button type="button" onClick={toggleTheme} >Thema</button>
   
  );
};

export default Button;