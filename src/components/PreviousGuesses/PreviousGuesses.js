import React from "react";
import GuessComponent from "../GuessComponent/GuessComponent";
import { range } from "../../utils";

function PreviousGuesses({ pastGuesses }) {
  return (
    <>
      <div className="guess-results">
        {/* {pastGuesses.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))} */}
        {range(pastGuesses).map((el) => (
          <GuessComponent prevGuesses={el} />
        ))}
      </div>
    </>
  );
}

export default PreviousGuesses;
