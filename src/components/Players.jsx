import { useState } from "react";

const Players = ({ InitialName, symbol ,isActive }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playername, setPlayername] = useState(InitialName);

	const handleEditClick = () => {
		setIsEditing((prev) => !prev);
	};

	const handleChange = (event) => {
		setPlayername(event.target.value);
	};

	return (
		<li className={isActive?'active' : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						required
						value={playername} //two way binding 
						onChange={handleChange} //teo way binding
					/>
				) : (
					<span className="player-name"> {playername}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
};

export default Players;
