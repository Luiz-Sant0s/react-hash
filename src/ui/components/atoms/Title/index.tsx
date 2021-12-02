import React from 'react';
import * as I from "../../../helpers/interfaces";
import * as S from './styles';

const Title: React.FC<I.TypesTitle> = ({ nameGame }) => (
    <S.TitleStyle>
        {nameGame}
    </S.TitleStyle>
);

export default Title;
