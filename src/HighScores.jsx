import HighScore from "./HighScore"
import { useGame } from "./GameContext";

const HighScores = () => {
  const { highScores } = useGame();
  return highScores.length > 0 ? (
    <>
      {highScores.map((score, i) => (
        <HighScore key={i} score={score} />
      ))}
    </>
  ) : (
    <>
      <p>No scores yet</p>
    </>
  );
}

export default HighScores;