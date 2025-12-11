import StartMenu from "./StartMenu";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import { useGame } from "./GameContext";

export default function App() {
  const { isPlaying } = useGame();
  return (!isPlaying ?
    <>
      <h1>Whack A Mole!</h1>
      <StartMenu />
    </> :
    <>
      <h1>Whack A Mole!</h1>
      <ScoreBoard />
      <GameBoard />
    </>)
}
