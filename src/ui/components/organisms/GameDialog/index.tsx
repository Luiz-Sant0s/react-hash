import React from "react";
import * as S from "./styles";
import { typesGameDialog } from '../../../helpers/types';
import { ImageGlobal } from "../../../helpers/constantes";

const GameDialog: React.FC<typesGameDialog> = ({ game, startGame, goHome, selectComputer, selectMultiPlayers }) => {

  return (
    <S.Background open={game?.winner || game?.statusGame} >
      <S.ContainerGameDialog>
        {game?.statusGame === "Home" && (
          <>
            <S.TitleModal>Hello!<i className="nes-octocat animate"></i> let's play?</S.TitleModal>
            <S.DescriptionModal> choose game mode and press start </S.DescriptionModal>

            <S.ContainerBtns>
              <S.BtnVsComputer /* className="nes-btn" */ aria-label="Button selectComputer" type="button" onClick={selectComputer} adversary={game.adversary}>
                <S.IconButton src={ImageGlobal.VsComputerNotDescription} alt="IconselectComputer" />
                VS COMPUTER
              </S.BtnVsComputer>
              <S.BtnMultiPlayers /* className="nes-btn" */ aria-label="Button selectMultiPlayers" type="button" onClick={selectMultiPlayers} adversary={game.adversary}>
                <S.IconButton src={ImageGlobal.MultiPlayersNotDescription} alt="IconselectComputer" />
                2 PLAYERS
              </S.BtnMultiPlayers>
            </S.ContainerBtns>

            <S.ContainerBtns>
              <S.BtnStart /* className="nes-btn" */ aria-label="Button StartGame" disabled={!game.adversary} type="button" onClick={startGame}>
                <i className="snes-jp-logo"></i>
                START
              </S.BtnStart>
            </S.ContainerBtns>
          </>)}


        {game?.statusGame === "GameOver" && (
          <>
            <S.TitleModal>End of the game</S.TitleModal>

            {game?.winner === "draw" || game?.winner === null ? (
              <S.MessageWinner >
                <S.GapIcons>
                  <S.DrawPlayerAnimation>
                    <i className="nes-mario"></i>
                  </S.DrawPlayerAnimation>
                  Draw!
                </S.GapIcons>

              </S.MessageWinner>
            ) : (
              <S.MessageWinner >
                <S.DescriptionEndGame winner={game?.winner}>
                  <S.WinnerTrophyAnimation>
                    <i className="nes-icon trophy is-large"></i>
                  </S.WinnerTrophyAnimation>
                  {game?.winner}
                  <S.WinnerCoinAnimation>
                    <i className="nes-icon coin is-large"></i>
                  </S.WinnerCoinAnimation>
                </S.DescriptionEndGame>
                is the winner!
              </S.MessageWinner>
            )}
            <S.ContainerBtns >

              <S.BtnReplay /* className="nes-btn" */ aria-label="Button Replay" type="button" onClick={startGame}>
                <i className="snes-jp-logo"></i>
                REPLAY
              </S.BtnReplay>

              <S.BtnGoHome /* className="nes-btn" */ aria-label="Button GoHome" type="button" onClick={goHome} >
                <S.IconButton src={ImageGlobal.GoHomeNotDescription} alt="Icon StartGame" />
                GO HOME
              </S.BtnGoHome>
            </S.ContainerBtns>
          </>)}

      </S.ContainerGameDialog>
    </S.Background>
  );
};

export default GameDialog;