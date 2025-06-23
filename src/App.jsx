import { useState } from "react";
import GameBoard from "./components/gameBoard";
import Players from "./components/Players";
import Logs from "./components/Logs";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");
	const [log, setLog] = useState([]);

	//set active player and update log
	const handleSelectSquare = (i, j) => {
		setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
		setLog((prevLog) => [{ row: i, col: j, player: activePlayer }, ...prevLog]);
	};
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Players
						InitialName="sanu"
						symbol="X"
						isActive={activePlayer === "X"}
					/>
					<Players
						InitialName="Player2"
						symbol="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					activePlayerSymbol={activePlayer}
					setLog={setLog}
          
				/>
			</div>
			<Logs moves={log} />
		</main>
	);
}

export default App;
