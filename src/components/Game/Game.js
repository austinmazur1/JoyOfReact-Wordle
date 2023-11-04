import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchInput from "../SearchInput/SearchInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [pastGuesses, setPastGuesses] = useState([]);
  const [gameStatus, setGameSatus] = useState('running')
  const [gameOver, setGameOver] = useState(false)
  

  const handleSubmitGuess = (guess) => {
    setPastGuesses([...pastGuesses, guess]);
    console.log(pastGuesses)
    if (guess === answer) {
      setGameSatus('won')
      setGameOver(true)
    } else {
      setGameSatus('lost')
      setGameOver(true)
    }
  };

  return (
    <>
     {gameOver && <Banner answer={answer} gameStatus={gameStatus} numOfGuesses/>}
      <PreviousGuesses pastGuesses={pastGuesses} answer={answer} />
      <SearchInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver}/>
    </>
  );
}

export default Game;
