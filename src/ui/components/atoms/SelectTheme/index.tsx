import React from 'react';
import { useTheme } from '../../../helpers/hooks/theme';
import * as I from "../../../helpers/interfaces";
import * as S from './styles';

const SelectTheme: React.FC<I.TypesSelectTheme> = ({ statusGame }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <S.SelectThemeStyle statusGame={statusGame} type="button" aria-label="Button Select Theme" onClick={toggleTheme}>
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

export default React.memo(SelectTheme);