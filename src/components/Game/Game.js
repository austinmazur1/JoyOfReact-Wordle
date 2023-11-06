import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchInput from "../SearchInput/SearchInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// TODO Create banner 'primitive' component and then create a win and loose component and render those in here


function Game() {
  const [pastGuesses, setPastGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('running')
  

  const handleSubmitGuess = (guess) => {
    const guesses = [...pastGuesses, guess] 
    setPastGuesses(guesses);
    if (guess === answer) {
      setGameStatus('won')
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  };

  return (
    <>
    {gameStatus}
     {/* {gameOver && <Banner answer={answer} gameStatus={gameStatus} numOfGuesses/>} */}
      <PreviousGuesses pastGuesses={pastGuesses} answer={answer} />
      <SearchInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus === 'won' && <WonBanner numOfGuesses={pastGuesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer}/>}
    </>
  );
}

export default Game;
