import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // this is called BATCHING UPDATES
        setNumber(n => n + 1); // instead of passing a new number (like in Counter example), we use the arrow function
        setNumber(n => n + 1); // the arrow function tells react to put the function in a QUEUE!! AND returns a value! 
        setNumber(n => n + 1); // setNumber(2)
      }}>+3</button>
    </>
  )
}
