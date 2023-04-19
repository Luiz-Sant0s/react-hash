
export const boardDefaultString = "         ";

export const gameDefault = {
    player: "X",
    statusGame: "Home",
    adversary: "",
    difficulty: "",
    openDifficultyModal: false,
    winner: "",
    pointsX: 0,
    round: 1,
    pointsO: 0,
}

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
    VsComputer: `${process.env.PUBLIC_URL}/img/png/vsComputer.png`,
    MultiPlayers: `${process.env.PUBLIC_URL}/img/png/multiPlayers.png`,
    ResetGame: `${process.env.PUBLIC_URL}/img/png/resetGame.png`,
    GoHome: `${process.env.PUBLIC_URL}/img/png/goHome.png`,
};
