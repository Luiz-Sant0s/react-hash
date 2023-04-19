import React from "react";
import * as C from 'ui/helpers/constants';
import * as S from './styles';
import { useTheme } from 'ui/helpers/hooks/theme';

const GoToGitHub: React.FC<IGoToGitHub> = ({ colorDescription }) => {
  const { theme } = useTheme();

  return (
    <S.LinkToGitHub href="https://github.com/J0se-Luiz/react-hash" target="_blank" rel="noopener">
      <S.GoToGitHubStyle colorDescription={colorDescription} colorTheme={theme.name}>
        <S.ImgGit
          src={C.ImageGlobal.GoToGitHub}
          alt="Go to GitHub"
        />
        <S.TextGitHub>Go to GitHub</S.TextGitHub>
      </S.GoToGitHubStyle>
    </S.LinkToGitHub>
  );
};

export default React.memo(GoToGitHub);