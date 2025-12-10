import HighScore from "./HighScore"
import { useGame } from "./GameContext";

const HighScores = () => {
  const { highScores } = useGame();
  return highScores.length > 1 ? (
    <section>
      <h2>High Score:</h2>
      {highScores.map((score, i) => (
        <HighScore key={i} score={score} />
      ))}
    </section>
  ) : (
    <section>
      <p>No scores yet</p>
    </section>
  );
}

export default HighScores;