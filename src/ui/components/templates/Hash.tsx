
import React, { useState, useEffect, useCallback } from "react";
import * as S from './styles'
import Title from "../atoms/Title";
import GoToGitHub from '../atoms/GoToGitHub';
import Board from '../molecules/Board';
import GameDialog from '../organisms/GameDialog';
import { endOfTheGame } from '../../helpers/constantes';
import { TypesGame } from '../../helpers/types';

const Hash = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [game, setGame] = useState<TypesGame>({
    player: "X",
    statusGame: "Home",
    adversary: null,
    winner: null,
  });

  const fillTheAreaWithThePlayer = (index: number) => {

    if (board[index] !== "") return null;
    if (game.winner) return null;

    setBoard(
      board.map((playerArea, area) => (area === index ? game.player : playerArea))
    );

    return setGame({ ...game, player: game?.player === "X" ? "O" : "X" });
  };

  const validWinner = () => {

    endOfTheGame(board).forEach((playerAreas) => {

      if (playerAreas.every((playerArea) => playerArea === "O"))
        return setGame({ ...game, winner: "O", statusGame: "GameOver" });

      if (playerAreas.every((playerArea) => playerArea === "X"))
        return setGame({ ...game, winner: "X", statusGame: "GameOver" });
    });
  };

  const validDraw = () => {
    if (board?.every((playerArea) => playerArea !== ""))
      return setGame({ ...game, winner: "draw", statusGame: "GameOver" });
  };

  const validateIfTheGameIsOver = useCallback(() => {
    validDraw();
    validWinner();

    if (game?.adversary === "computer") {
      if (game?.player === "O") {
        let emptySeatsOnBoard = [];
        let idx = board.indexOf("");

        while (idx !== -1) {
          emptySeatsOnBoard.push(idx);
          idx = board.indexOf("", idx + 1);
        }

        const computerRandomPosition = Math.floor(
          Math.random() * emptySeatsOnBoard?.length
        );
        let newBoard = board.slice();
        newBoard[emptySeatsOnBoard[computerRandomPosition]] = "O";

        setBoard(newBoard);

        return setGame({ ...game, player: "X" });
      }
    }
  }, [ board ]);

  useEffect(() => {
    validateIfTheGameIsOver();
  }, [ validateIfTheGameIsOver ]);

  const startGame = () => {
    setBoard(Array(9).fill(""));
    setGame({ ...game, player: "X", winner: null, statusGame: null });
  };

  const goHome = () => {
    setGame({ ...game, statusGame: "Home", adversary: null });
  }

  return (
    <S.GameContianer>
      <Title nameGame="Hash Game" />

      <Board board={board} onClick={fillTheAreaWithThePlayer} />

      <GameDialog
        game={game}
        startGame={startGame}
        goHome={goHome}
        selectComputer={() => setGame({ ...game, adversary: "computer" })}
        selectMultiPlayers={() => setGame({ ...game, adversary: "multiPlayers" })} />

      <GoToGitHub />
    </S.GameContianer>
  );
}

export default React.memo(Hash);
