import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1); // snapshot here, number 0
        setNumber(number + 1); // snapshot here, number still 0
        setNumber(number + 1); // number still 0! Re-rendering happens when number = 1. Re-rendering is NOT immediate.
      }}>+3</button>
    </>
  )
}
