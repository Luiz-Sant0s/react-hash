import React from 'react';
import * as S from './styles';
import { TypesBoard } from '../../../helpers/types'

const Board: React.FC<TypesBoard> = ({ board, onClick }) => (
  <S.BoardStyle>
    {board?.map((player: string, index: number) => (
      <S.PlayerArea
        key={index}
        border={index}
        hover={player}
        onClick={() => onClick(index)}
      >
        {player}
      </S.PlayerArea>
    ))}
  </S.BoardStyle>
);

export default Board;
