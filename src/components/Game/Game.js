import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchInput from "../SearchInput/SearchInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import GuessComponent from "../GuessComponent/GuessComponent";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    setPastGuesses([...pastGuesses, guess]);
  };
// checkGuess('CREAM', answer);
  return (
    <>
      <PreviousGuesses pastGuesses={pastGuesses} answer={answer} />

      <SearchInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
