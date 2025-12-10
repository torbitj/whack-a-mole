import { useGame } from "./GameContext";

const MoleHole = ({index}) => {
  const { moleHole, addScore } = useGame();
  return index === moleHole ? 
    <li className="hole mole" onClick={addScore}></li> :
    <li className="hole"></li>
}

export default MoleHole;