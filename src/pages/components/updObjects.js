import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  // update state when user makes some change. 

  function handleCityChange(e) {
    // update the Person object (through set{} person). Everything is the same EXCEPT city has changed, 
    // but dont change other things, thus use spread syntax to make a copy of person!!!
    // remember, spread syntax makes a shallow copy!
    // this allows javascript to make a deep copy. (?)
    // this is a SAFE way to change our Objects. 
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
