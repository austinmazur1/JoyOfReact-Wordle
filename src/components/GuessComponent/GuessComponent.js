import React from "react";
import { range } from "../../utils";

function GuessComponent({ prevGuesses }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {prevGuesses ? prevGuesses[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default GuessComponent;
