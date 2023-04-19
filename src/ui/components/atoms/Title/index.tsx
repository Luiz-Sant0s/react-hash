import React from 'react';
import * as S from './styles';

const Title: React.FC<ITitle> = ({ gameName }) => (
    <S.TitleStyle>
        {gameName}
    </S.TitleStyle>
);

export default React.memo(Title);
