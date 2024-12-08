import { SetStateAction, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("Waiting for your choice");
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function playGame(userChoice: SetStateAction<string>) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(computerChoice)
    setUserChoice(userChoice)
    
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setUserScore(userScore + 1)
    } else {
      setResult("Computer wins!");
      setComputerScore(computerScore + 1)
    }
  }

  function restore() {
    setComputerScore(0)
    setUserScore(0)
  }

  return (
    <div className="container">
    <ul id="moves">
      <li onClick={ () => playGame("rock")}>
        <span className="fa fa-fw fa-hand-rock-o" />
        <span className="text">Rock</span>
      </li>
      <li onClick={ () => playGame("paper")}>
        <span className="fa fa-fw fa-hand-paper-o" />
        <span className="text">Paper</span>
      </li>
      <li onClick={ () => playGame("scissors")}>
        <span className="fa fa-fw fa-hand-scissors-o" />
        <span className="text">Scissors</span>
      </li>
    </ul>
    <div className='result'>
      <h4>{userChoice}</h4>
      <h2>{result}</h2>
      <h4>{computerChoice}</h4>
    </div>
    <div className="scoreboard">
      <table>
        <thead>
          <tr><td>Player</td>
            <td>Computer</td>
          </tr></thead>
        <tbody>
          <tr>
            <td className="Player-count">{computerScore}</td>
            <td className="Computer-count">{userScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
     <button onClick={restore}>Restore</button>
  </div>
  )
}

export default App
