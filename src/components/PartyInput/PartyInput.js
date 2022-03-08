import React from "react";
import { DataContext } from "../../dataContext";
import { useState, useContext } from "react";

function PartyInput(props) {
  const [submitted, setSubmitted] = useState(false);

  const { formState, setFormState } = useContext(DataContext);

  function toggleSubmitted() {
    return setSubmitted(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleSubmitted();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <main className="user-party-form">
      <form onSubmit={handleSubmit}>
        <p>
          <span id="input-info-span">
            Add some information about your party to get a monster with a
            specific challenge rating:
          </span>
        </p>
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
        ) : null}
      </form>
    </main>
  );
}

export default PartyInput;
