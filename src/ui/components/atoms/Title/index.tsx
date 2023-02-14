import React from 'react';
import * as I from "../../../helpers/interfaces";
import * as S from './styles';

const Title: React.FC<I.TypesTitle> = ({ gameName }) => (
    <S.TitleStyle>
        {gameName}
    </S.TitleStyle>
);

export default React.memo(Title);
