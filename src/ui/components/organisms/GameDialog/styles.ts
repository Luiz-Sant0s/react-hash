import styled, { css } from "styled-components";
import {
  OpenDialogTypeStyle,
  PlayerWinnerStyle,
  VisibleHiddenBoard,
  BtnStartTypesStyle,
} from "../../../helpers/interfaces";
import {
  animationStartGame,
  animationDraw,
  animationWinnerCoin,
  animationWinnerTrophy,
} from "../../../helpers/animations";

export const Background = styled.div<OpenDialogTypeStyle>`
  display: ${(props) => (props.open ? "flex" : "none")};

  ::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
    position: fixed;
    background: ${(props) => props.theme.colors.background.ternary};

    z-index: 100;
  }
`;

export const BtnVisibleHidden = styled.button`
  z-index: 101;
  position: fixed;
  top: calc(50vh - 240px);
  /* position: relative;
  top: -425px; */
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.secondary};
  box-shadow: 4px 8px 9px 0px ${(props) => props.theme.colors.boxShadow.primary};
  border: solid 2.5px ${(props) => props.theme.colors.border.primary};
  font-size: 13px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.background.secondary};

  &:hover {
    border: "1px solid ${(props) => props.theme.colors.border.primary}";
    transform: scale(1.3) rotate(-10deg);
  }

  &:focus {
    outline-style: none;
  }
`;

export const ContainerGameDialog = styled.dialog<VisibleHiddenBoard>`
  visibility: ${(props) =>
    props.visible === "visible" ? "visible" : "hidden"};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background.secondary};
  padding: 20px 10px 0px 10px;
  box-shadow: 3px 4px 14px 5px ${(props) => props.theme.colors.boxShadow.primary};
  width: 360px;
  min-height: 440px;
  border: 3px solid ${(props) => props.theme.colors.border.primary};

  @media (max-width: 500px) {
    width: 93.5%;
    min-width: auto;
  }
`;

export const TitleModal = styled.h2`
  margin: 5px;
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.secondary};

  .nes-octocat {
    /* opacity: 0.9; */
    :before{
      color: ${(props) => props.theme.colors.octocat} !important;
    }
  }
`;

export const DescriptionModal = styled(TitleModal)`
  font-size: 15px;
  color: ${(props) => props.theme.colors.text.primary};
  padding: 0 15px 10px 15px;
`;

export const MessageWinner = styled(TitleModal)`
  opacity: 0.7;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  max-width: 70%;
`;

export const DrawPlayerAnimation = styled.div`
  animation-name: ${animationDraw};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform: scaleX(-1);
  transform: rotate(0);
`;

export const WinnerCoinAnimation = styled.div`
  animation-name: ${animationWinnerCoin};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transform: scaleX(1);
  transform: rotate(0);
`;

export const WinnerTrophyAnimation = styled.div`
  animation-name: ${animationWinnerTrophy};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transform: scaleX(1);
  transform: rotate(0);
`;

export const DescriptionEndGame = styled.p<PlayerWinnerStyle>`
  color: ${(props) => (props.winner === "X" ? "red" : "blue")};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 35px;
`;

export const ContainerBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;

export const IconButton = styled.img`
  margin: 2px auto;
  width: auto;
  height: auto;
`;

export const GapIcons = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
`;

export const BtnStart = styled.button<BtnStartTypesStyle>`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 3px;
  min-width: 102px;
  align-items: center;
  font-size: 12px;
  justify-content: space-around;
  gap: 5px;
  background-color: transparent;
  min-width: 112px;
  box-shadow: 4px 8px 9px 0px ${(props) => props.theme.colors.boxShadow.primary};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
  border: 2px solid ${(props) => props.theme.colors.border.primary};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }

  &:active {
    opacity: 0.2;
    cursor: wait;
  }

  &:hover {
    border: "1px solid ${(props) => props.theme.colors.border.primary}";
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    border: "1px solid ${(props) => props.theme.colors.border.primary}";
    transform: scale(1.2);
  }

  :focus {
    outline-style: none;
  }

  ${(props) => {
    if (!props.disabledOn)
      return css`
        animation-name: ${animationStartGame};
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
      `;
  }}
`;

export const BtnVsComputer = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "computer" ? `1px solid ${(props: any) => props.theme.colors.border.primary}` : " "};
  transform: scale(${(props) => (props.adversary === "computer" ? 1.2 : 1)});
  opacity: ${(props) => (props.adversary === "computer" ? 0.3 : " ")};
  transition: all 0.2s ease-in-out;
  font-size: 8px;

  animation-name: none;
`;

export const BtnMultiPlayers = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "multiPlayers" ? `1px solid ${(props: any) => props.theme.colors.border.primary}` : " "};
  transform: scale(
    ${(props) => (props.adversary === "multiPlayers" ? 1.2 : 1)}
  );
  opacity: ${(props) => (props.adversary === "multiPlayers" ? 0.3 : " ")};
  transition: all 0.2s ease-in-out;
  font-size: 8px;

  animation-name: none;
`;

export const BtnReplay = styled(BtnStart)`
  animation-name: none;
  padding: 8px;
`;

export const BtnGoHome = styled(BtnStart)`
  animation-name: none;
`;
