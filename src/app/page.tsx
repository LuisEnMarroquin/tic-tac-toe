"use client";

import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import GameStatus from "../components/GameStatus";
import { PlayerSymbols, WinnerStatus, BoardStatus } from "../types";
import ResetButton from "../components/ResetButton";
import {
  WINNING_COMBINATIONS,
  INITIAL_PLAYER,
  createEmptyBoard,
} from "../utils";

function App() {
  const [board, setBoard] = useState<BoardStatus>(createEmptyBoard());
  const [player, setPlayer] = useState<PlayerSymbols>(INITIAL_PLAYER);
  const [winner, setWinner] = useState<WinnerStatus>(null);

  function handleClick(position: number) {
    if (board[position] || winner) return;

    const newBoard = [...board];
    newBoard[position] = player;
    setBoard(newBoard);

    for (const combo of WINNING_COMBINATIONS) {
      const [first, second, third] = combo;
      if (
        newBoard[first] &&
        newBoard[first] === newBoard[second] &&
        newBoard[first] === newBoard[third]
      ) {
        setWinner(newBoard[first]);
        return;
      }
    }

    const gameResult = newBoard.every((cell) => cell !== null) ? "Draw" : null;
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  }

  function resetGame() {
    setBoard(createEmptyBoard());
    setPlayer(INITIAL_PLAYER);
    setWinner(null);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <GameBoard board={board} onClick={handleClick} />
      <GameStatus winner={winner} player={player} />
      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default App;
