import { createContext, useState, useContext } from "react"

const GameComtext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [moleHole, setMoleHole] = useState(1)
  const numHoles = 9;

  const togglePlaying = () => setIsPlaying(!isPlaying);

  const recordHighScore = (currentScore) => setHighScores([...highScores, currentScore]);

  const addScore = () => {
    setScore(score + 1);
    setMoleHole(Math.floor(Math.random() * numHoles) + 1)
  }

  const value = {
    score,
    isPlaying,
    highScores,
    moleHole,
    numHoles,
    togglePlaying,
    addScore,
    recordHighScore
  }

  return <GameComtext.Provider value={value}>{children}</GameComtext.Provider>
}

export const useGame = () => {
  const context = useContext(GameComtext);
  if (!context) {
    throw new Error('Can only use GameProvider on select components');
  }
  return context
}