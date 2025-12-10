import { useGame } from "./GameContext";

const MoleHole = ({index}) => {
  const { moleHole } = useGame();
  return index === moleHole ? 
    <li className="hole mole"></li> :
    <li className="hole"></li>
}

export default MoleHole;