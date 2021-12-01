import React from 'react';
import { useTheme } from '../../../helpers/hooks/theme';

import * as S from './styles';

const Button: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  return (
   
      <S.ButtonStyle type="button" onClick={toggleTheme} >Thema</S.ButtonStyle>
   
  );
};

export default Button;