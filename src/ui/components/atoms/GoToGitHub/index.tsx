import React from "react";
import * as S from "./styles";
import { ImageGlobal } from '../../../helpers/constantes/index';

interface GoToGitHubProps {
  props?: string;
}

const GoToGitHub: React.FC<GoToGitHubProps> = () => {
  return (
      <S.LinkToGitHub href="https://github.com/J0se-Luiz/react-hash" target="_blank" rel="noopener">
    <S.GoToGitHubStyle>
        <S.ImgGit
          src={ImageGlobal.GoToGitHub}
          alt="Go to GitHub"
        />
        <S.TextGitHub>Go to GitHub</S.TextGitHub>
    </S.GoToGitHubStyle>
      </S.LinkToGitHub>
  );
};

export default GoToGitHub;