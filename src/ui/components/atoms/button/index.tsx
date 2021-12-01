import React from 'react';
import { useTheme } from '../../../helpers/hooks/theme';

// import { Contain er, ComponentButton } from './styles';

const Button: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }
  console.log(">.....", theme)

  return (
   
      <button type="button" onClick={handleToggleTheme} >Thema</button>
   
  );
};

export default Button;