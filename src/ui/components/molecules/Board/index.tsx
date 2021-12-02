import React from 'react';
import * as I from "../../../helpers/interfaces";
import * as S from './styles';

const Board: React.FC<I.TypesBoard> = ({ boardCurrent, onClick }) => (
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
