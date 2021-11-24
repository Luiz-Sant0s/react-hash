import React from 'react';
import * as S from './styles';
import { TypesTitle } from '../../../helpers/types'


const Title: React.FC<TypesTitle> = ({ nameGame }) => (
    <S.TitleStyle>
        {nameGame}
    </S.TitleStyle>
);

export default Title;
