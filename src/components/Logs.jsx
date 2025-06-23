
const Logs = ({moves}) => {
  return (
    <ol id='log'>
      {moves.map((move,index)=>(
        <li key={index}>
          Player {move.player} selected {move.row}, {move.col}
        </li>
      ))}
    </ol>
  )
}

export default Logs
