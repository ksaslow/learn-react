import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
  // DEFINE the state, useing the useState HOOK:
  const [index, setIndex] = useState(0); // compare this to index = 0 in whyState.js
  // change const to let???

  function handleClick() {
    // use conditional rendering to avoid index out of range
    // or you could use a modulo
    // or you could do a try/catch and handle the error
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    
  }

  let sculpture = sculptureList[index]; // index will be 0 in the beginning
  return (
    <>
      <button onClick={handleClick}> 
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
