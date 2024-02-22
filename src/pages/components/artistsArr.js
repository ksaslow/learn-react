import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        // append an element into an Array where the array is part of the state!
        // we dont want to change the original Object, as state is read-only!
        // this will not have any side-effects, no other objects will be changed if using the spread syntax in this way!
        setArtists([
            ...artists,
            {id: nextId++, name: name}
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          // create list item by using the map function
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
