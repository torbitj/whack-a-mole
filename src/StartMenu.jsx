import HighScores from "./HighScores";
import { useGame } from "./GameContext";

const StartMenu = () => {
  const { togglePlaying } = useGame();
  return (
    <section id="menu" className="start">
      <h2>Welcome to Whack A Mole!</h2>
      <p>You get a point for every mole you whack!</p>
      <button onClick={togglePlaying}>Play Now</button>
      <h2>High Scores:</h2>
      <HighScores />
    </section>
  );
}

export default StartMenu;