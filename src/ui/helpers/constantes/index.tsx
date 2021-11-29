
export const boardDefault = "         ";

export const onlyGameCharacters = /[^o x]/ig;

export const gameCharacters = {
    X: /x/ig,
    O: /o/ig
};

export const endOfTheGame = (board: Array<string | []>) => {
    const endGame = [
        [board[0], board[1], board[2]],
        [board[0], board[3], board[6]],
        [board[0], board[4], board[8]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],
        [board[2], board[4], board[6]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]],
    ];
    return endGame
};

export const ImageGlobal = {
    GoToGitHub: `${process.env.PUBLIC_URL}/img/png/go-to-GitHub.png`,

    VsComputerNotDescription: `${process.env.PUBLIC_URL}/img/png/vsComputerNotDescription.png`,
    MultiPlayersNotDescription: `${process.env.PUBLIC_URL}/img/png/multiPlayersNotDescription.png`,
    GoHomeNotDescription: `${process.env.PUBLIC_URL}/img/png/goHomeNotDescription.png`,

    VsComputerNotDescriptionSvg: `${process.env.PUBLIC_URL}/img/svg/vsComputerNotDescription.svg`,
    MultiPlayersNotDescriptionSvg: `${process.env.PUBLIC_URL}/img/svg/multiPlayersNotDescription.svg`,
    GoHomeNotDescriptionSvg: `${process.env.PUBLIC_URL}/img/svg/goHomeNotDescription.svg`,
};
