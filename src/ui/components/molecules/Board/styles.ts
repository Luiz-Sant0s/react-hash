import styled, { css } from "styled-components";
import { typesPlayerAresStyle } from '../../../helpers/types'

export const BoardStyle = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
  }
`;

export const PlayerArea = styled.li<typesPlayerAresStyle>`
  background-color: #ffffff;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: #00000060;
  border: 3px solid;

  cursor: pointer;

  ${(props) => {
    if (props.border === 0)
      return css`
        border-top: none;
        border-left: none;
      `;
    if (props.border === 1)
      return css`
        border-top: none;
      `;
    if (props.border === 2)
      return css`
        border-top: none;
        border-right: none;
      `;
    if (props.border === 3)
      return css`
        border-left: none;
      `;
    if (props.border === 5)
      return css`
        border-right: none;
      `;
    if (props.border === 6)
      return css`
        border-left: none;
        border-bottom: none;
      `;
    if (props.border === 7)
      return css`
        border-bottom: none;
      `;
    if (props.border === 8)
      return css`
        border-right: none;
        border-bottom: none;
      `;
  }};

  ${(props) => {
    if (props.hover === "")
      return css`
        :hover {
          border: 4px solid;
          box-shadow: 2px 5px 23px 7px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
          background-color: rgba(248, 248, 255);
        }
      `;
  }};
`;
