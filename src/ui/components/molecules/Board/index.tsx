import React from 'react';
import * as S from './styles';

const Board: React.FC<IBoard> = ({ boardCurrent, onClick }) => (
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

export default React.memo(Board);
