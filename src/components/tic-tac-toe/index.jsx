import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(currentIndex) {
    let copySquares = [...squares];
    if (copySquares[currentIndex]) return;
    copySquares[currentIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  function getWinner(paramSquares) {
    const patternWinners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const key in patternWinners) {
      const [x, y, z] = patternWinners[key];
      if (
        paramSquares[x] &&
        paramSquares[x] === paramSquares[y] &&
        paramSquares[x] === paramSquares[z]
      ) {
        return paramSquares[x];
      }
    }

    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("Draw!");
    } else if (getWinner(squares)) {
      setStatus(`${getWinner(squares)} winner!`);
    } else {
      setStatus(`${isXTurn ? "X" : "O"} next play.`);
    }
  }, [isXTurn, squares]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="row">
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
