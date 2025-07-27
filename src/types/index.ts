export type PlayerSymbols = "X" | "O";

export type WinnerStatus = PlayerSymbols | "Draw" | null;

export type BoardStatus = (PlayerSymbols | null)[];
