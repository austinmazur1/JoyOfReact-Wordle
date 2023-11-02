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
  const [gameOver, setGameOver] = useState(false)
  const [userWon, setUserWon] = useState(false)

  const handleSubmitGuess = (guess) => {
    setPastGuesses([...pastGuesses, guess]);
    if (pastGuesses.length === 5) {
      setGameOver(true)

    }
  };

  return (
    <>
     {gameOver && <Banner win={userWon} />}
      <PreviousGuesses pastGuesses={pastGuesses} answer={answer} />
      <SearchInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
