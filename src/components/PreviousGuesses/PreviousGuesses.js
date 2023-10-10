import React from "react";
import GuessComponent from "../GuessComponent/GuessComponent"

function PreviousGuesses({pastGuesses}) {
  return (
    <>
    <GuessComponent />
    <GuessComponent />
    <GuessComponent />
    <GuessComponent />
    <GuessComponent />
    <div className="guess-results">
      {pastGuesses.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))}
    </div>
    </>
  );
}

export default PreviousGuesses;
