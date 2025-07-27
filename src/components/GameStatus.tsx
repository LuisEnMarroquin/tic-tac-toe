import React from "react";
import { PlayerSymbols, WinnerStatus } from "../types";

interface GameStatusProps {
  winner: WinnerStatus;
  player: PlayerSymbols;
}

export default function GameStatus({ winner, player }: GameStatusProps) {
  return (
    <p className="mt-4 text-xl">
      {winner
        ? winner === "Draw"
          ? "It's a draw!"
          : `Player "${winner}" wins!`
        : `Player "${player}" turn`}
    </p>
  );
}
