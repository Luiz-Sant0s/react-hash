
export const endOfTheGame = (board: any[]) => {
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
}

export const ImageGlobal = {
    VsComputer: `${process.env.PUBLIC_URL}/img/png/vsComputer.png`,
    MultiPlayers: `${process.env.PUBLIC_URL}/img/png/multiPlayers.png`,
    Start: `${process.env.PUBLIC_URL}/img/png/start.png`,
    Replay: `${process.env.PUBLIC_URL}/img/png/replay.png`,
    GoHome: `${process.env.PUBLIC_URL}/img/png/goHome.png`,
    GoToGitHub: `${process.env.PUBLIC_URL}/img/png/go-to-GitHub.png`,
}
