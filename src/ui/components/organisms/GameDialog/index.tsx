import React, { useState } from "react";
import * as C from 'ui/helpers/constants';
import * as S from './styles';

const GameDialog: React.FC<IGameDialog> = ({
  game,
  startGame,
  resetGame,
  continueGame,
  openOptionsDifficulty,
  selectDifficulty,
  replay,
  goHome,
  selectComputer,
  selectMultiPlayers }) => {
  const [viewBoard, setViewBoard] = useState("visible")

  return (
    <S.Background open={game?.winner || game?.statusGame}>

      {viewBoard === "visible" && game?.statusGame === "GameOver" &&
        <S.BtnVisibleHidden
          onClick={() => setViewBoard("hidden")}
          aria-label="Button View Board"
          type="button">
          View Board
        </S.BtnVisibleHidden>
      }

      {viewBoard === "hidden" && game?.statusGame === "GameOver" &&
        <S.BtnVisibleHidden
          onClick={() => setViewBoard("visible")}
          aria-label="Button  Winner Screen"> {game?.winner === "draw" || !game.winner ? "Draw" : "Winner"}
          Screen
        </S.BtnVisibleHidden>
      }

      <S.ContainerGameDialog visible={viewBoard}>
        {game?.statusGame === "Home" && (
          <>
            <S.TitleModal>Hello!<i className="nes-octocat animate"></i> let's play?</S.TitleModal>
            <S.DescriptionModal> choose game mode and press start </S.DescriptionModal>

            <S.ContainerBtns>

              <S.ContainerBtnComputer>

                {game.difficulty &&
                  <S.BtnSelectDifficults
                    className="nes-balloon from-right"
                    onClick={() => openOptionsDifficulty()}
                  >
                    {game.difficulty}
                  </S.BtnSelectDifficults>
                }

                <S.BtnVsComputer
                  aria-label="Button selectComputer"
                  type="button"
                  onClick={selectComputer}
                  adversary={game.adversary}
                  disabled={game.adversary === "computer"}>
                  <S.IconButton src={C.ImageGlobal.VsComputer} alt="IconselectComputer" />
                  VS COMPUTER
                </S.BtnVsComputer>
              </S.ContainerBtnComputer>

              <S.ModalSelectDifficulty className="nes-dialog" open={game.openDifficultyModal} >
                <S.FormModalSelectDifficulty method="dialog">
                  <S.TittleModalSelectDifficulty>Select</S.TittleModalSelectDifficulty>
                  <S.ParagraphyModalSelectDifficulty>the difficulty</S.ParagraphyModalSelectDifficulty>
                  <S.MenuModalSelectDifficulty>

                    <S.BtnSelectDifficultyModal
                      className="nes-btn"
                      onClick={() => selectDifficulty("Easy")}>Easy
                    </S.BtnSelectDifficultyModal>

                    <S.BtnSelectDifficultyModal
                      /* className="nes-btn is-disabled" */
                      className="nes-btn is-primary"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("Complete the Easy level 100 times to unlock the Medium level.")
                      }}>Medium
                    </S.BtnSelectDifficultyModal>

                    <S.BtnSelectDifficultyModal
                      /* className="nes-btn is-disabled" */
                      className="nes-btn is-error"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("Complete the Medium level 150 times to unlock the Hard level.")
                      }}>Hard
                    </S.BtnSelectDifficultyModal>

                  </S.MenuModalSelectDifficulty>
                </S.FormModalSelectDifficulty>
              </S.ModalSelectDifficulty>

              <S.BtnMultiPlayers
                aria-label="Button selectMultiPlayers"
                type="button"
                onClick={selectMultiPlayers}
                adversary={game.adversary}
                disabled={game.adversary === "multiPlayers"}>
                <S.IconButton src={C.ImageGlobal.MultiPlayers} alt="IconselectComputer" />
                2 PLAYERS
              </S.BtnMultiPlayers>

            </S.ContainerBtns>

            <S.ContainerBtns>
              {game.round === 1 ?
                <S.BtnStart
                  disabledOn={!game?.adversary}
                  aria-label="Button StartGame"
                  disabled={!game.adversary} type="button" onClick={startGame}>
                  <i className="snes-jp-logo"></i>
                  START
                </S.BtnStart>
                :
                <>
                  <S.BtnReset
                    disabledOn={!game?.adversary}
                    aria-label="Button ResetGame"
                    disabled={!game.adversary}
                    type="button"
                    onClick={resetGame}>
                    <S.IconButton
                      className="nes-avatar is-rounded is-large"
                      src={C.ImageGlobal.ResetGame} style={{ imageRendering: "pixelated" }} />
                    RESET
                  </S.BtnReset>

                  <S.BtnContinue
                    aria-label="Button CONTINUE"
                    disabled={!game.adversary}
                    type="button" onClick={continueGame}>
                    <i className="nes-ash"></i>
                    CONTINUE
                  </S.BtnContinue>
                </>
              }
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

              <S.BtnReplay
                aria-label="Button Replay"
                type="button"
                onClick={replay}>
                <i className="snes-jp-logo"></i>
                PLAY AGAIN
              </S.BtnReplay>

              <S.BtnGoHome
                aria-label="Button GoHome"
                type="button"
                onClick={goHome} >
                <S.IconButton src={C.ImageGlobal.GoHome} alt="Icon GO HOME" />
                GO HOME
              </S.BtnGoHome>
            </S.ContainerBtns>
          </>)}
      </S.ContainerGameDialog>
    </S.Background >
  );
};

export default React.memo(GameDialog);