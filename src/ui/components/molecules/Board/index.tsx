import React from 'react';
import * as S from './styles';
import { TypesBoard } from '../../../helpers/interfaces'

const Board: React.FC<TypesBoard> = ({ boardCurrent, onClick }) => (
  <S.BoardStyle>
    {boardCurrent?.map((player: string, index: number) => (
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
