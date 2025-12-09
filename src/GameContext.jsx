import { createContext, useState, useContext } from "react"

const GameComtext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScores, setHighScores] = useState([])

  const togglePlaying = () => setIsPlaying(!isPlaying);

  const recordHighScore = (currentScore) => setHighScores([...highScores, currentScore]);

  const addScore = () => setScore(score + 1);

  const value = {
    score,
    isPlaying,
    highScores,
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