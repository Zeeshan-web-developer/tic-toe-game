import React, { useState } from 'react';
import Board from './Board'; // Import Board component

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //create an array of 9 nulls
  const [xIsNext, setXIsNext] = useState(true); //set the first player to 'X'

  const handleClick = (i) => {
    // If there's already a winner or the square is filled, return early
    if (calculateWinner(squares) || squares[i]) return;

    // Clone the current state of the squares
    const newSquares = squares.slice();
    // Mark the square with 'X' or 'O'
    newSquares[i] = xIsNext ? 'X' : 'O';
    // Update the state
    setSquares(newSquares);
    setXIsNext(!xIsNext); // Switch turns
  };

  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={handleReset} className="reset-button">Reset Game</button>
      </div>
    </div>
  );
}

// Helper function to determine the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
    //lines is a list of lines that represent the winning combinations

    
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
