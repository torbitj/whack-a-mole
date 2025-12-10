import HighScore from "./HighScore"
import { useGame } from "./GameContext";

const HighScores = () => {
  const { highScores } = useGame();
  return highScores.length > 0 ? (
    <section id="high-scores" className="start">
      <h2>High Scores:</h2>
      {highScores.map((score, i) => (
        <HighScore key={i} score={score} />
      ))}
    </section>
  ) : (
    <section id="high-scores" className="start">
      <h2>High Scores:</h2>
      <p>No scores yet</p>
    </section>
  );
}

export default HighScores;