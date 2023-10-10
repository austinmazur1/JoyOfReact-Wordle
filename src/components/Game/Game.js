import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchInput from "../SearchInput/SearchInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
// import GuessComponent from "../GuessComponent/GuessComponent"
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [textInput, setTextInput] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textInput);
    setTextInput(" ");
    const newArray = [...pastGuesses, textInput];
    setPastGuesses(newArray);
  };

  return (
    <>
      {pastGuesses.length > 0 && <PreviousGuesses pastGuesses={pastGuesses} />}
      <SearchInput
        textInput={textInput}
        setTextInput={setTextInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
