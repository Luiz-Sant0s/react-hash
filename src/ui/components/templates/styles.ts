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

interface HashTypesStyle {
 colorPlayrTurn: string;
}

export const SpanTurn = styled.span<HashTypesStyle>`
  font-size: 25px;
  /* color: #00000080; */
  color: ${(props) => props.colorPlayrTurn === "X" ? "red" : "blue" };

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
  color: #00000080;
`;
