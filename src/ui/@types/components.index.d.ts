interface IGoToGitHub {
    colorDescription: string;
}

interface ISelectTheme {
    statusGame: string;
}

interface ITitle {
    gameName: string;
};

interface IBoard {
    boardCurrent: Array<string>;
    onClick: (arg0: number) => void;
};

interface IGame {
    player: string;
    statusGame: string;
    adversary: string;
    openDifficultyModal: boolean
    difficulty: string;
    winner: string;
    pointsX: number,
    round: number,
    pointsO: number,
}

interface IGameDialog {
    game: IGame;
    startGame: () => void;
    resetGame: () => void;
    continueGame: () => void;
    openOptionsDifficulty: () => void;
    selectDifficulty: (arg: string) => void;
    replay: () => void;
    goHome: () => void;
    selectComputer: () => void;
    selectMultiPlayers: () => void;
};

interface IHash {
    board: string;
    setInitialBoard: (arg0: string) => void;
}