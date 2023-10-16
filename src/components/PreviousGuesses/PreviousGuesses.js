import React from "react";
import GuessComponent from "../GuessComponent/GuessComponent";
import { range } from "../../utils";

function PreviousGuesses({ pastGuesses }) {
  console.log('past guesses', pastGuesses)
  return (
    <>
      <div className="guess-results">
        {/* {range(pastGuesses).map((guess) => {
          return <GuessComponent prevGuesses={guess} />;
        })} */}
 {pastGuesses.map((guess) => (
  <GuessComponent prevGuesses={guess}/>
 ))}
      </div>
    </>
  );
}

export default PreviousGuesses;
