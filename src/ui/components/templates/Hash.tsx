
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from './styles'
import { endOfTheGame, boardDefault, onlyGameCharacters, gameCharacters } from '../../helpers/constantes';
import { TypesGame, TypesHash } from '../../helpers/types';
import Title from "../atoms/Title";
import GoToGitHub from '../atoms/GoToGitHub';
import Board from '../molecules/Board';
import GameDialog from '../organisms/GameDialog';

const Hash: React.FC<TypesHash> = ({ board, setInitialBoard }) => {

  const turningBoardIntoArray = Array(1).fill(board.split(""));
  const [boardCurrent, setBoardCurrent] = useState(turningBoardIntoArray[0]);
  const [game, setGame] = useState<TypesGame>({
    player: "X",
    statusGame: "Home",
    adversary: null,
    winner: null,
    pointsX: 0,
    round: 1,
    pointsO: 0,
  });
  const historyNavigate = useNavigate();

  const clearHistoryNavigate = () => {
    historyNavigate({
      pathname: window.location.pathname,
      search: ``,
    });
  };

  const LocationSearch = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };

  const queryUrlParameter = LocationSearch();
  const urlParameter: any = queryUrlParameter.get("board");
  const howManyCharactersX = !urlParameter?.match(gameCharacters.X)?.length ? 0 : urlParameter?.match(gameCharacters.X)?.length;
  const howManyCharactersO = !urlParameter?.match(gameCharacters.O)?.length ? 0 : urlParameter?.match(gameCharacters.O)?.length;

  useEffect(() => {
    if (urlParameter) {

      if (urlParameter.length !== 9) {
        alert("Something wrong is not right! hehe, you typed a board with more than 9 characters");
        setGame({ ...game, player: "X", winner: null });
        clearHistoryNavigate();
        return setInitialBoard(boardDefault);
      };

      if (onlyGameCharacters.test(urlParameter)) {
        alert("Something wrong is not right! hehe, board only accepts the following characters X space O");
        setGame({ ...game, player: "X", winner: null });
        clearHistoryNavigate();
        return setInitialBoard(boardDefault);
      };

      if (howManyCharactersX - howManyCharactersO >= 2 || howManyCharactersO - howManyCharactersX >= 2) {
        alert("Something wrong is not right! hehe, invalid board a player cannot have more than 1 play advantage of his opponent");
        setGame({ ...game, player: "X", winner: null });
        clearHistoryNavigate();
        return setInitialBoard(boardDefault);
      };

      if (howManyCharactersX - howManyCharactersO === 1) setGame({ ...game, player: "O", winner: null });
      if (howManyCharactersO - howManyCharactersX === 1) setGame({ ...game, player: "X", winner: null });

      setInitialBoard(urlParameter?.toUpperCase());
    };

    if (!queryUrlParameter.get("board")) {
      setInitialBoard(boardDefault);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlParameter]);

  const fillTheAreaWithThePlayer = (index: number) => {
    if (boardCurrent[index] !== " ") return null;
    if (game.winner) return null;

    setBoardCurrent(
      boardCurrent.map((playerArea: string, area: number) => (area === index ? game.player : playerArea))
    );

    return setGame({ ...game, player: game?.player === "X" ? "O" : "X" });
  };

  const validWinner = () => {
    endOfTheGame(boardCurrent).forEach((playerAreas) => {
      if (playerAreas.every((playerArea) => playerArea === "O"))
        return setGame({ ...game, winner: "O", statusGame: "GameOver", pointsO: game.pointsO + 1, round: game.round + 1 });

      if (playerAreas.every((playerArea) => playerArea === "X"))
        return setGame({ ...game, winner: "X", statusGame: "GameOver", pointsX: game.pointsX + 1, round: game.round + 1 });
    });
  };

  const validDraw = () => {
    if (boardCurrent?.every((playerArea: string) => playerArea !== " "))
      return setGame({ ...game, winner: "draw", statusGame: "GameOver", round: game.round + 1 });
  };

  const computerMovementAndEndOfTheGame = useCallback(() => {
    validDraw();
    validWinner();

    if (game?.adversary === "computer") {
      if (game.player === "O") {
        let emptySeatsOnBoard = [];
        let emptyArea = boardCurrent.indexOf(" ");

        while (emptyArea !== -1) {
          emptySeatsOnBoard.push(emptyArea);
          emptyArea = boardCurrent.indexOf(" ", emptyArea + 1);
        };

        const computerRandomPosition = Math.floor(
          Math.random() * emptySeatsOnBoard?.length
        );
        let newBoard = boardCurrent.slice();
        newBoard[emptySeatsOnBoard[computerRandomPosition]] = "O";

        setBoardCurrent(newBoard);

        return setGame({ ...game, player: "X" });
      };
    };

    historyNavigate({
      pathname: window.location.pathname,
      search: `?board=${encodeURIComponent(boardCurrent.join(""))}`,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardCurrent, game.player]);

  useEffect(() => {

    if (!game.statusGame) return computerMovementAndEndOfTheGame();
    if (game.winner) {
      computerMovementAndEndOfTheGame();
      return clearHistoryNavigate();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.statusGame, computerMovementAndEndOfTheGame, urlParameter]);

  const startGame = () => {
    setBoardCurrent(turningBoardIntoArray[0]);
    setGame({ ...game, player: "X", winner: null, statusGame: null, pointsX: 0, round: 1, pointsO: 0 });
  };

  const replay = () => {
    setBoardCurrent(turningBoardIntoArray[0]);
    setGame({ ...game, player: "X", winner: null, statusGame: null });
  };

  const goHome = () => {
    setGame({ ...game, statusGame: "Home", adversary: null, winner: null, });
  };

  return (
    <>
      {!game?.statusGame &&
        <S.ContainerPointsRound>
          <S.Points>Points X<S.ValuePointsX>{game.pointsX}</S.ValuePointsX></S.Points>
          <S.Round>Round <S.ValueRound>{game.round}</S.ValueRound> </S.Round>
          <S.Points>Points O<S.ValuePointsO>{game.pointsO}</S.ValuePointsO></S.Points>
        </S.ContainerPointsRound>}
      <S.GameContianer>
        <Title nameGame="Hash Game" />

        <Board boardCurrent={boardCurrent} onClick={fillTheAreaWithThePlayer} />

        <GameDialog
          game={game}
          startGame={startGame}
          replay={replay}
          goHome={goHome}
          selectComputer={() => setGame({ ...game, adversary: "computer" })}
          selectMultiPlayers={() => setGame({ ...game, adversary: "multiPlayers" })}
        />

        <GoToGitHub colorDescription={game?.statusGame} />
      </S.GameContianer>
      {!game?.statusGame && <S.PLayerTurn>player turn <S.SpanTurn colorPlayrTurn={game.player}>{game.player}</S.SpanTurn></S.PLayerTurn>}
    </>
  );
}

export default React.memo(Hash);