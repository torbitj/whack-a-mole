import { useGame } from "./GameContext";

const ScoreBoard = () => {
  const { togglePlaying, recordHighScore, setScore, score } = useGame();
  return (
    <section>
      <p>Score: {score}</p>
      <button onClick={() => {
        togglePlaying();
        recordHighScore(score);
        setScore(0);
      }}>Restart</button>
    </section>
  )
}

export default ScoreBoard;