import styled from "styled-components";
import { OpenDialogTypeStyle, PlayerWinnerStyle } from "../../../helpers/types";
import "nes.css/css/nes.min.css";

export const Background = styled.div<OpenDialogTypeStyle>`
  display: ${(props) => (props.open ? "flex" : "none")};

  ::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
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
  top: 12vh;
  box-sizing: border-box;
  z-index: 100;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px 10px 0px 10px;
  max-width: 360px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const TitleModal = styled.p`
  margin: 5px;
  font-size: 25px;
  font-weight: bold;
  color: #00000080;

  .nes-octocat {
    opacity: 0.7;
  }
`;

export const DescriptionModal = styled(TitleModal)`
  font-size: 15px;
  color: #00000060;
  padding: 0 15px 10px 15px;
`;

export const MessageWinner = styled(TitleModal)`
  opacity: 0.7;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
`;

export const DescriptionEndGame = styled.p<PlayerWinnerStyle>`
  color: ${(props) => (props.winner === "X" ? "red" : "blue")};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 20px;
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
  gap: 20px;
  display: flex;
`;

export const BtnStart = styled.button`
  cursor: pointer;
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

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    border-width: 3px;
    padding: 4px 8px;
  }
  &:active {
    opacity: 0.2;
    cursor: wait;
  }

  &:hover {
    border: "1px solid #00000055";
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    border: "1px solid #00000055";
    transform: scale(1.2);
  }
`;

export const BtnVsComputer = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "computer" ? "1px solid #00000055" : " "};
  transform: scale(${(props) => (props.adversary === "computer" ? 1.2 : 1)});
  opacity: ${(props) => (props.adversary === "computer" ? 0.3 : " ")};
  transition: all 0.2s ease-in-out;
  font-size: 8px;
`;

export const BtnMultiPlayers = styled(BtnStart)<PlayerWinnerStyle>`
  border: ${(props) =>
    props.adversary === "multiPlayers" ? " 1px solid #00000055" : " "};
  transform: scale(
    ${(props) => (props.adversary === "multiPlayers" ? 1.2 : 1)}
  );
  opacity: ${(props) => (props.adversary === "multiPlayers" ? 0.3 : " ")};
  transition: all 0.2s ease-in-out;
  font-size: 8px;
`;

export const BtnReplay = styled(BtnStart)``;
export const BtnGoHome = styled(BtnStart)``;
