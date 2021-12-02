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
  winner: null | string;
  pointsX: number,
  round: number,
  pointsO: number,
}

export interface typesGameDialog {
  game: TypesGame;
  startGame: () => void;
  replay: () => void;
  goHome: () => void;
  selectComputer: () => void;
  selectMultiPlayers: () => void;
};

export interface HashTypesStyle {
  colorPlayrTurn: string;
}

export interface OpenDialogTypeStyle {
  open: boolean | null | string;
}

export interface BtnStartTypesStyle {
  disabledOn?: string | null | boolean;
}

export interface VisibleHiddenBoard {
  visible: string;
}

export interface PlayerWinnerStyle {
  winner?: string | null;
  adversary?: string | null;
}

export interface TypesSelectTheme {
  statusGame: string | null;
}

export interface GoToGitHubTypes {
  colorDescription: null | string;
}

export interface GoToGitHubStyleTypes {
  colorDescription: string | null;
  colorTheme: string | null;
}

export interface TypeSelectThemeStyle {
  statusGame: string | null;
}