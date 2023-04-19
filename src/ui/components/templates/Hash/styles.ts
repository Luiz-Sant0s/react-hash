import styled from "styled-components";
import * as A from "ui/helpers/animations";

export const GameContianer = styled.section`
  height: auto;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  background-color: ${(props) => props.theme.colors.background.secondary};
  padding: 15px;
  max-width: 340px;
  box-shadow: 3px 4px 14px 5px  ${(props) => props.theme.colors.boxShadow.primary};
  margin: 50% auto;

  @media (max-width: 400px) {
    width: 95%;
    margin: 38% auto;
 
  }
`;

export const PLayerTurn = styled.h2`
  font-size: 15px;
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: left;
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PlayerTurnAnimation = styled.div`
  animation-name: ${A.animationTurnPlayer};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export const RoundAnimation = styled.div`
  animation-name: ${A.animationRound};
  animation-duration: 2.2s;
  animation-iteration-count: 1;
  animation-delay: 0.2s;
  transform: scale(1.4);
`;

export const SpanTurn = styled.span<IHashStyles>`
  font-size: 22px;
  color: ${(props) => (props.colorPlayrTurn === "X" ? "red" : "blue")};
`;

export const ContainerPointsRound = styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: flex-end;
`;

export const Points = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  letter-spacing: -2px;
`;

export const Round = styled(Points)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.secondary};
  display: flex;
  gap: 10px;
`;

export const ValuePointsX = styled.span`
  font-size: 16px;
  padding: 5px;
  color: red;
`;

export const ValuePointsO = styled(ValuePointsX)`
  color: blue;
`;

export const ValueRound = styled(ValuePointsX)`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.secondary};
`;
