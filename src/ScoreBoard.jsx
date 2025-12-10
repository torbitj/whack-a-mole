import { useGame } from "./GameContext";

const ScoreBoard = () => {
  const { togglePlaying } = useGame();
  return (
    <section>
      <p>Score:</p>
      <button onClick={togglePlaying}>Restart</button>
    </section>
  )
}

export default ScoreBoard;