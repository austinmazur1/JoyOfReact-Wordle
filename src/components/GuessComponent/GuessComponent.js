import React from "react";
import { range } from "../../utils";

function GuessComponent({ prevGuesses }) {
  console.log("first", prevGuesses);
  return (
    <div className="guess-results">
      <p className="guess">
        {range(1, 6).map((cell) => (
          <span className="cell"></span>
        ))}
      </p>
    </div>
  );
}

export default GuessComponent;
