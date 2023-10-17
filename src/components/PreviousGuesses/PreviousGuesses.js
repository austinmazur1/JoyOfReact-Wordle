import React from "react";
import GuessComponent from "../GuessComponent/GuessComponent";
import { range } from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function PreviousGuesses({ pastGuesses }) {
  console.log("past guesses", pastGuesses);
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <GuessComponent key={num} prevGuesses={pastGuesses[num]}/>
        ))}
      </div>
    </>
  );
}

export default PreviousGuesses;
