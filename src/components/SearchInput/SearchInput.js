import React from "react";
/* TODO 
- create a function that handles submit
- prevent for submit default
- create state or pass the state prop
- reset state on submit
- text to be converted to all caps
- input should be min and max length of 5
*/

function SearchInput({ textInput, setTextInput, handleSubmit }) {

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        //  pattern="[A-Z]{5, 5}"
        type="text"
        value={textInput}
        onChange={(event) => {
          const newText = event.target.value.toUpperCase();
          setTextInput(newText);
        }}
      />
    </form>
  );
}

export default SearchInput;
