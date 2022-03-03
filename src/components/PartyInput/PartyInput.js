import React from "react";
import { useState } from "react";

function PartyInput(props) {
  const [submitted, setSubmitted] = useState(false);

  function toggleSubmitted() {
    return setSubmitted(true);
  }

  const initialState = {
    partySize: "",
    partyLevel: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleSubmitted();
    console.log(submitted);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <main className="user-party-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="partySize">Input the size of your party:</label>
        <input
          id="partySize"
          type="number"
          value={formState.partySize}
          onChange={handleChange}
        />

        <label htmlFor="partyLevel">
          Input the average level of your party members:
        </label>
        <input
          id="partyLevel"
          type="number"
          value={formState.partyLevel}
          onChange={handleChange}
        />

        <button type="submit">Enter</button>
        {submitted ? (
          <div className="party-info-submitted">
            <p>Your party size has been saved as {formState.partySize}</p>
            <p> Your average level has been saved as {formState.partyLevel}</p>
          </div>
        ) : (
          <p></p>
        )}
      </form>
    </main>
  );
}

export default PartyInput;
