import { useState } from "react";
import GameOver from "./GameOver";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const checkWinner = (board) => {
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] &&
			board[i][0] === board[i][1] &&
			board[i][1] === board[i][2]
		)
			return board[i][0];
		if (
			board[0][i] &&
			board[0][i] === board[1][i] &&
			board[1][i] === board[2][i]
		)
			return board[0][i];
		if (
			board[0][0] &&
			board[0][0] === board[1][1] &&
			board[1][1] === board[2][2]
		)
			return board[0][0];

		if (
			board[0][2] &&
			board[0][2] === board[1][1] &&
			board[1][1] === board[2][0]
		)
			return board[0][2];
    }
		return null;
};

const GameBoard = ({ onSelectSquare, activePlayerSymbol ,setLog}) => {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	const [winner, setWinner] = useState(null);
  const [Draw, setDraw] = useState(false);

	const handleSelectSquare = (i, j) => {
		if (gameBoard[i][j] === "X" || gameBoard[i][j] === "O" || winner) return;
		setGameBoard((prev) => {
			const updateBoard = prev.map((row) => [...row]); //deep copy
			updateBoard[i][j] = activePlayerSymbol;
			//check winnner and setwinner
			const win = checkWinner(updateBoard);
			if (win) setWinner(win);
      else {
        const isDraw = updateBoard.flat().every(it=> it !== null);
        if(isDraw) setDraw(true);
      }
			return updateBoard;
		});
		onSelectSquare(i, j); //to change player from X to O or O to X in app.tsx pass index for log
	};

  const Restart=() => {
    setGameBoard(initialGameBoard.map((it) => [...it]))
    setWinner(null)
    setDraw(false);
    setLog([]);
  }
	return (
		<>
			{(winner || Draw) && <GameOver winner={winner} onRestart={Restart}/>}
			<ol id="game-board">
				{gameBoard.map((row, rowIndex) => (
					<li key={rowIndex}>
						<ol>
							{row.map((PlayerSymbol, colIndex) => (
								<li key={colIndex}>
									<button
										onClick={() => handleSelectSquare(rowIndex, colIndex)}
									>
										{PlayerSymbol}
									</button>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</>
	);
};

export default GameBoard;
