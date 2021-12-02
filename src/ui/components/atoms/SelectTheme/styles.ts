import styled from "styled-components";

interface TypeSelectThemeStyle {
  statusGame: string | null;
}

export const SelectThemeStyle = styled.button<TypeSelectThemeStyle>`
  position: fixed;
  top: 40px;
  left: 20px;
  z-index: 105;
  height: 37px;
  width: 80px;
  border-radius: 18px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.background.secondary};
  border: 2px solid ${(props) => props.theme.colors.border.primary};

  /* :focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  } */

  :focus {
    outline-style: none;
  }
 
  @media (max-width: 400px) {
    position: ${(props) => !props.statusGame ? "relative" : "absolute"};
    top: ${(props) => !props.statusGame ? "2px" : "15px"};
    left: 20px;
  }
`;

export const Sun = styled.div`
  height: 23px;
  width: 25px;
  border-radius: 20px;
  background: #f0eb4a;
`;

export const HalfMoon = styled(Sun)`
  float: right;
`;
export const BarNightMode = styled(Sun)`
  float: left;
  width: 55px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.background.secondary};
`;