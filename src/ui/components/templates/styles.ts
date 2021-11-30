import styled from "styled-components";

export const GameContianer = styled.section`
  height: auto;
  border-radius: 5px;
  font-weight: bold;
  color: #00000077;
  border: 1px solid;
  background-color: #ffffff;
  padding: 15px;
  max-width: 340px;
  box-shadow: 3px 4px 14px 5px #00000065;

  @media (max-width: 400px) {
    width: 95%;
    margin: auto;
  }
`;

export const PLayerTurn = styled.h2`
  font-size: 15px;
  color: #00000060;
  text-align: left;
  padding: 13px;
`;

export const SpanTurn = styled.span`
  font-size: 25px;
  color: #00000080;
`;

export const ContainerPointsRound = styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: flex-end;
`;

export const Points = styled.p`
  font-size: 13px;
  color: #00000060;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
`;

export const Round = styled(Points)`
  font-size: 16px;
  color: #00000080;
`;

export const ValuePoints = styled.span`
  font-size: 16px;
  color: #00000080;
`;

export const ValueRound = styled(ValuePoints)`
font-size: 18px;
`;