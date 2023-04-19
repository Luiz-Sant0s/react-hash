import styled from "styled-components";
import * as A from "ui/helpers/animations";

export const GoToGitHubStyle = styled.button<IGoToGitHubStyles>`
  background: ${(props) => props.theme.colors.goToGitHub.background.primary};
  border-radius: 50%;
  height: 65px;
  width: 65px;
  position: absolute;
  bottom: 50px;
  right: 15px;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  color: ${(props) =>
    !props.colorDescription && props.colorTheme === "light"
      ? props.theme.colors.goToGitHub.primary
      : props.theme.colors.goToGitHub.secondary};
  border-color: ${(props) =>
    !props.colorDescription
      ? props.theme.colors.goToGitHub.primary
      : props.theme.colors.goToGitHub.secondary};
  font-size: 11px;
  z-index: 101;

  :hover {
    background-color: ${(props) =>
    props.theme.colors.goToGitHub.background.secondary};
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
  animation-name: ${A.animationRotateIconGit};
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
  font-weight: bold;
  top: 12px;
  line-height: 15px;
`;
