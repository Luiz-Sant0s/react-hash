import styled from "styled-components";
import { ImageGlobal } from "../../../helpers/constantes";
import { OpenDialogTypeStyle, PlayerWinnerStyle } from "../../../helpers/types";

export const Background = styled.div<OpenDialogTypeStyle>`
  display: ${(props) => (props.open ? "flex" : "none")};

  ::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    position: fixed;
    background: rgba(0, 0, 0, 0.5);

    z-index: 100;
  }
`;

export const ContainerGameDialog = styled.dialog`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 17vh;
  box-sizing: border-box;
  z-index: 100;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 30px 10px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const TitleModal = styled.h2`
  margin: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #00000077;
`;

export const DescriptionModal = styled(TitleModal)`
  font-size: 1.6rem;
  color: #00000070;
`;

export const MessageWinner = styled(TitleModal)`
  opacity: 0.7;

  margin-bottom: 3rem;
`;

export const DescriptionEndGame = styled.p<PlayerWinnerStyle>`
  color: ${(props) => (props.winner === "X" ? "red" : "blue")};
`;

export const ContainerBtnsGameOver = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const BtnStart = styled.button`
  cursor: pointer;
  height: 77px;
  width: 77px;
  background-image: url(${ImageGlobal.Start});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  box-shadow: none;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    border-width: 3px;
    padding: 4px 8px;
  }
  &:active {
    opacity: 0.2;
    cursor: wait;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const BtnVsComputer = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "computer" ? "1px solid #00000055" : ""};
  transform: scale(${(props) => (props.adversary === "computer" ? 1.2 : 1)});
  opacity: ${(props) => (props.adversary === "computer" ? 0.3 : "")};

  transition: all 0.2s ease-in-out;
  height: 80px;
  width: 85px;
  background-image: url(${ImageGlobal.VsComputer});
`;

export const BtnMultiPlayers = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "multiPlayers" ? " 1px solid #00000055" : ""};
  transform: scale(
    ${(props) => (props.adversary === "multiPlayers" ? 1.2 : 1)}
  );
  opacity: ${(props) => (props.adversary === "multiPlayers" ? 0.3 : "")};

  transition: all 0.2s ease-in-out;
  height: 80px;
  width: 85px;
  background-image: url(${ImageGlobal.MultiPlayers});
`;

export const BtnReplay = styled(BtnStart)`
  height: 71px;
  width: 72px;
  background-image: url(${ImageGlobal.Replay});
`;

export const BtnGoHome = styled(BtnStart)`
  height: 71px;
  width: 72px;
  background-image: url(${ImageGlobal.GoHome});
`;
