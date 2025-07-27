import React from "react";
import { BoardStatus } from "../types";

interface GameBoardProps {
  board: BoardStatus;
  onClick: (index: number) => void;
}

export default function GameBoard({ board, onClick }: GameBoardProps) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className="w-20 h-20 text-2xl text-black font-bold cursor-pointer bg-white hover:bg-blue-50 transition-colors duration-200"
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
