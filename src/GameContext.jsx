import { createContext, useState, useContext } from "react"

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [moleHole, setMoleHole] = useState(1)
  const numHoles = 9;

  const togglePlaying = () => setIsPlaying(!isPlaying);

  const recordHighScore = (currentScore) => setHighScores([...highScores, currentScore].sort((a, b) => b - a));

  const resetToStartMenu = () => {
    togglePlaying();
    recordHighScore(score);
    setScore(0);
  }

  const newMoleHole = () => {
    let newHole;
    do {
      newHole = Math.floor(Math.random() * numHoles);
    } while (newHole === moleHole)
    return newHole;
  }  

  const addScore = () => {
    setScore(score + 1);
    setMoleHole(newMoleHole())
  }

  const value = {
    score,
    isPlaying,
    highScores,
    moleHole,
    numHoles,
    togglePlaying,
    addScore,
    resetToStartMenu
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('Can only use GameProvider on select components');
  }
  return context
}