import StartMenu from "./StartMenu";
import HighScore from "./HighScore";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";

export default function App() {
  return (
    <>
      <h1>Whack A Mole!</h1>
      <StartMenu />
      <HighScore />
      <ScoreBoard />
      <GameBoard />
    </>
  );
}
