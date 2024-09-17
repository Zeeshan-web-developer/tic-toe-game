import React from 'react';
import Square from './Square'; // Import Square component

function Board({ squares, onClick }) {
  return (
    <div>
      <div className="board-row">
        {squares.slice(0, 3).map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((square, i) => (
          <Square key={i + 3} value={square} onClick={() => onClick(i + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((square, i) => (
          <Square key={i + 6} value={square} onClick={() => onClick(i + 6)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
