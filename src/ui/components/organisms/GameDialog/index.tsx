import React, { useState } from "react";
import * as S from "./styles";
import { typesGameDialog } from '../../../helpers/types';
import { ImageGlobal } from "../../../helpers/constantes";

const GameDialog: React.FC<typesGameDialog> = ({ game, startGame, replay, goHome, selectComputer, selectMultiPlayers }) => {
  const [viewBoard, setViewBoard] = useState("visible")

  return (
    <S.Background open={game?.winner || game?.statusGame} >

      {viewBoard === "visible" && game?.statusGame === "GameOver" && <S.BtnVisibleHidden onClick={() => setViewBoard("hidden")} aria-label="Button View Board" type="button">View Board </S.BtnVisibleHidden>}

      {viewBoard === "hidden" && game?.statusGame === "GameOver" && <S.BtnVisibleHidden onClick={() => setViewBoard("visible")} aria-label="Button  Winner Screen">{game?.winner === "draw" || !game.winner ? "Draw" : "Winner"} Screen</S.BtnVisibleHidden>}

      <S.ContainerGameDialog visible={viewBoard}>
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
              <S.BtnStart disabledOn={!game?.adversary} /* className="nes-btn" */ aria-label="Button StartGame" disabled={!game.adversary} type="button" onClick={startGame}>
                <i className="snes-jp-logo"></i>
                START
              </S.BtnStart>
            </S.ContainerBtns>
          </>)}


        {game?.statusGame === "GameOver" && (
          <>
            <S.TitleModal>End of Game</S.TitleModal>
            {game?.winner === "draw" || game?.winner === null ? (
              <S.MessageWinner >
                <S.GapIcons>
                  <S.DrawPlayerAnimation>
                    <i className="nes-mario"></i>
                  </S.DrawPlayerAnimation>
                  Draw!
                </S.GapIcons>
                match was draw!
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

              <S.BtnReplay /* className="nes-btn" */ aria-label="Button Replay" type="button" onClick={replay}>
                <i className="snes-jp-logo"></i>
                PLAY AGAIN
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