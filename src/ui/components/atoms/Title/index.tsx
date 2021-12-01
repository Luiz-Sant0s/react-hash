import React from 'react';
import * as S from './styles';
import { TypesTitle } from '../../../helpers/interfaces'


const Title: React.FC<TypesTitle> = ({ nameGame }) => (
    <S.TitleStyle>
        {nameGame}
    </S.TitleStyle>
);

export default Title;
