import { useGame } from "./GameContext";

const StartMenu = () => {
  const { togglePlaying } = useGame();
  return (
    <section>
      <h2>Welcome to Whack A Mole!</h2>
      <p>You get a point for every mole you whack!</p>
      <button onClick={togglePlaying}>Play Now</button>
    </section>
  )
}

export default StartMenu;