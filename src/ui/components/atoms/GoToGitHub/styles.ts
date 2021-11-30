import styled, { keyframes } from "styled-components";

const RotateIconGit = keyframes`
 0% { transform: rotate(40deg) }
 10% {  transform: rotate(347deg) }
 20% {   transform: rotate(17deg) }
 30% {   transform: rotate(-60deg)) }
 40% {  transform: rotate(40deg)  }
 60% {   transform: rotate(-70deg) }
 80% {   transform: rotate(50deg) }
 100% {  transform: rotate(-60deg) } 
`;

interface GoToGitHubStyleTypes {
  colorDescription: string | null;
}

export const GoToGitHubStyle = styled.button<GoToGitHubStyleTypes>`
  background: #929eaa;
  border-radius: 50%;
  height: 65px;
  width: 65px;
  position: absolute;
  bottom: 50px;
  right: 15px;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  color: ${(props) => !props.colorDescription ? "#555" : "rgb(248, 248, 255, 0.7)" };
  font-size: 11px;
  z-index: 101;
  

  :hover {
    background-color: #b1b6bb;
  }
  :active {
    opacity: 0.7;
  }
`;

export const LinkToGitHub = styled.a`
  text-decoration: none;
`;

export const ImgGit = styled.img`
  height: 50px;
  width: 50px;
  transform: rotate(-20deg);
  animation-name: ${RotateIconGit};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  margin-top: 3px;
  :hover {
    opacity: 0.7;
  }
`;

export const TextGitHub = styled.p`
  width: 60px;
  text-align: center;
  position: relative;
  right: 10px;
  font-weight: bold;
  top: 10px;

  line-height: 15px;
`;
