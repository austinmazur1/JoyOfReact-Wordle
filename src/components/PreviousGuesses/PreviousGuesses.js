import React from "react";

function PreviousGuesses({pastGuesses}) {
  return (
    <div className="guess-results">
      {pastGuesses.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
