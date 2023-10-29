import React, { useEffect, useState } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessComponent({ prevGuesses, answer }) {
  const [status, setStatus] = useState("");

  const handleClassName = () => {
    const checkedGuess = checkGuess(prevGuesses, answer);

    console.log(
      checkedGuess?.map((el) => {
        return el.status;
      })
    );
    return "cell";
  };

  
  useEffect(() => {
    handleClassName();
  }, [prevGuesses]);

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
