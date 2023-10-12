import React from "react";
import { range } from "../../utils";

function GuessComponent({ prevGuesses }) {
  return (
    <>
      <div className="guess-results">
        {range(prevGuesses).map((el) => (
          <p className="guess">
            <span className="cell">{el}</span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessComponent;
