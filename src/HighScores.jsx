import HighScore from "./HighScore"
import { useGame } from "./GameContext";

const HighScores = () => {
  const { highscores } = useGame;
  return (
    <section>
      <h2>High Score:</h2>
      {highscores.map((score) => <HighScore key={score.id} score={score.num} />)}
    </section>
  )
}

export default HighScores;