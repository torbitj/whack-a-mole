import { useGame } from "./GameContext";

const ScoreBoard = () => {
  const { resetToStartMenu, score } = useGame();
  return (
    <section>
      <p className="score">Score: {score}</p>
      <button onClick={resetToStartMenu}>Restart</button>
    </section>
  )
}

export default ScoreBoard;