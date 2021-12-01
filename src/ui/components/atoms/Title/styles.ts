import styled from "styled-components";

export const TitleStyle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.text.primary};
  padding: 20px;

  @media (max-width: 400px) {
  padding: 1rem 0.5rem;
  }
`;
