import React, { useState } from "react";

function SearchInput({ handleSubmitGuess, gameOver }) {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(textInput);

    setTextInput(" ");
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        required
        maxLength={5}
        minLength={5}
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={textInput}
        disabled={gameOver}
        onChange={(event) => {
          const newText = event.target.value.toUpperCase();
          setTextInput(newText);
        }}
      />
    </form>
  );
}

export default SearchInput;
