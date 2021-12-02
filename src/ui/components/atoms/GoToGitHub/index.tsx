import React from "react";
import * as S from "./styles";
import { ImageGlobal } from '../../../helpers/constantes/index';
import { useTheme } from '../../../helpers/hooks/theme';

interface GoToGitHubProps {
  colorDescription: null | string;
}

const GoToGitHub: React.FC<GoToGitHubProps> = ({ colorDescription }) => {
  const { theme } = useTheme();

  return (
    <S.LinkToGitHub href="https://github.com/J0se-Luiz/react-hash" target="_blank" rel="noopener">
      <S.GoToGitHubStyle colorDescription={colorDescription} colorTheme={theme.name}>
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