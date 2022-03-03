import React from "react";
import { useState } from "react";

function PartyInput(props) {
  const initialState = {
    partySize: 0,
    partyLevel: 0,
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("you submitted the form");
    console.log(formState);
    setFormState(initialState);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="party-size">Input the size of your party:</label>
        <input
          id="party-size"
          type="number"
          value={formState.subject}
          onChange={handleChange}
        />

        <label htmlFor="party-level">
          Input the average level of your party members:
        </label>
        <input
          id="party-level"
          type="number"
          value={formState.subject}
          onChange={handleChange}
        />

        <button type="submit">Enter</button>
      </form>
    </main>
  );
}

export default PartyInput;
