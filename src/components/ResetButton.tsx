import React from "react";

interface ResetButtonProps {
  resetGame: () => void;
}

export default function ResetButton({ resetGame }: ResetButtonProps) {
  return (
    <button
      onClick={resetGame}
      className="mt-4 px-4 py-2 rounded text-white cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
    >
      Reset
    </button>
  );
}
