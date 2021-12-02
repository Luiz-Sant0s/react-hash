import styled from "styled-components";

export const ButtonStyle = styled.button`
 position: fixed;
 top: 40px;
 left: 20px;
 z-index: 105;

 @media (max-width: 400px){
    position: sticky;
    top: 20px;
 left: 20px;
 }
`;
