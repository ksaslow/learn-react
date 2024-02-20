import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    // need to use the set{} to change the state
    // so we dont see the re-rendering happening
    // need to update this via its corresponding set function
    setPlayer({
      ...player,
      likescore: player.likescore +1
    });
  }

  function handleFirstNameChange(e) {
    // page gets re-rendered here because we have the set operation
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      // here we need to first copy the rest of the properties with the spread function
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
