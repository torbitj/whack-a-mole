import MoleHole from "./MoleHole";
import { useGame } from "./GameContext";
  
const GameBoard = () => {
  const { numHoles } = useGame();
  return (
    <ul>
      {Array.from({length:numHoles}, (_, i) => <MoleHole key={i} index={i} />)}
    </ul>
  )
}

export default GameBoard;