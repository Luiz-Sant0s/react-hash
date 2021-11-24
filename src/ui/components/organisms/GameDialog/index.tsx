import React from "react";
import * as S from "./styles";
import { typesGameDialog } from '../../../helpers/types'

const GameDialog: React.FC<typesGameDialog> = ({ game, startGame, goHome, selectComputer, selectMultiPlayers }) => {


  return (
    <S.Background open={game?.winner || game?.statusGame} >
      <S.ContainerGameDialog>
        {game?.statusGame === "Home" && (
          <>
            <S.TitleModal>Hello let's play?</S.TitleModal>
            <S.DescriptionModal> choose game mode and press start </S.DescriptionModal>

            <S.ContainerBtnsGameOver >
              <S.BtnVsComputer aria-label="Button selectComputer" type="button" onClick={selectComputer} adversary={game.adversary} />
              <S.BtnMultiPlayers aria-label="Button selectMultiPlayers" type="button" onClick={selectMultiPlayers} adversary={game.adversary} />
            </S.ContainerBtnsGameOver>

            <S.BtnStart aria-label="Button StartGame" disabled={!game.adversary} type="button" onClick={startGame} />
          </>)}


        {game?.statusGame === "GameOver" && (
          <>
            <S.TitleModal>End of the game</S.TitleModal>

            {game?.winner === "draw" ? (
              <S.MessageWinner >
                Draw!
              </S.MessageWinner>
            ) : (
              <S.MessageWinner >
                <S.DescriptionEndGame winner={game?.winner}>{game?.winner}</S.DescriptionEndGame>
                is the winner!
              </S.MessageWinner>
            )}
            <S.ContainerBtnsGameOver >
              <S.BtnReplay aria-label="Button Replay" type="button" onClick={startGame} />
              <S.BtnGoHome aria-label="Button GoHome" type="button" onClick={goHome} />
            </S.ContainerBtnsGameOver>
          </>)}

      </S.ContainerGameDialog>
    </S.Background>
  );
};

export default GameDialog;