import React from 'react';
import { useTheme } from '../../../helpers/hooks/theme';

import * as S from './styles';

interface TypesSelectTheme {
  statusGame: string | null;
}

const SelectTheme: React.FC<TypesSelectTheme> = ({ statusGame }) => {
  const { toggleTheme, theme } = useTheme();

  return (

    <S.SelectThemeStyle statusGame={statusGame} type="button" onClick={toggleTheme}>
      {theme.name === "light" ?
        <S.Sun />
        :
        <>
          <S.BarNightMode />
          <S.HalfMoon />
        </>}

    </S.SelectThemeStyle>

  );
};

export default SelectTheme;