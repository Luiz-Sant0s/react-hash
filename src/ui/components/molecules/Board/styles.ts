import styled, { css } from "styled-components";
import { typesPlayerAresStyle } from "../../../helpers/interfaces";

export const BoardStyle = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
`;

export const PlayerArea = styled.li<typesPlayerAresStyle>`
  background-color: ${(props) => props.theme.colors.background.secondary};
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
  border: 3px solid;

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
    if (props.hover === " ")
      return css`
        :hover {
          border: 4px solid;
          box-shadow: 2px 5px 23px 7px ${(props) => props.theme.colors.boxShadow.primary};
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
          background-color: ${(props) => props.theme.colors.background.primary};
        }
      `;
  }};

  ${(props) => {
    if (props.hover !== " ")
      return css`
        :hover {
          cursor: not-allowed;
        }
      `;
  }};
`;
