import { createContext, useState, useContext } from "react"

const GameComtext = createContext();

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScores, setHighScores] = useState([])

  const togglePlaying = () => setIsPlaying(!isPlaying);

  const recordHighScore = (currentScore) => setHighScores([...highScores, currentScore]);

  const addScore = () => setScore(score + 1);
}