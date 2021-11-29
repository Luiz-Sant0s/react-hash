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
  text-align: center;
  margin-bottom: 10px;
`;

export const SpanTurn = styled.span`
  font-size: 25px;
  color: #00000080;
`;
