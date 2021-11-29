export interface TypesHash {
  board: string;
  setInitialBoard: (arg0: string) => void;
}

export interface TypesTitle {
  nameGame: string;
};

export interface TypesBoard {
  boardCurrent: Array<string>;
  onClick: (arg0: number) => void;
};

export interface typesPlayerAresStyle {
  border: number;
  hover: string;
};

export interface TypesGame {
  player: string;
  statusGame: string | null;
  adversary: null | string;
  winner: null | string ;
}

export interface typesGameDialog {
  game: TypesGame;
  startGame: () => void;
  goHome: () => void;
  selectComputer: () => void;
  selectMultiPlayers: () => void;
};

export interface OpenDialogTypeStyle {
  open: boolean | null | string;
}

export interface VisibleHiddenBoard {
  visible: string;
}

export interface PlayerWinnerStyle {
  winner?: string | null;
  adversary?: string | null;
}
