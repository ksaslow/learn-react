import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function deepCopy(list) {

  return list.map((item) => ({...item})); // basically creating an Object, and returning a copy of EACH OBJECT!!
}

export default function BucketList() {
  const [myList, setMyList] = useState(deepCopy(initialList));
  const [yourList, setYourList] = useState( 
    deepCopy(initialList)
    // [...initialList]
  );

  function handleToggleMyList(artworkId, nextSeen) {
    const tmpList = myList.map(e => { // this map function returns a copy!
      // map function returns a copy of MyList, then updates the state. 
        if (e.id === artworkId) {
            e.seen = nextSeen // changing a property of an object, and both objects (both in orig and copy) point to the SAME THING!
            // return {...e, seen: nextSeen} // see image for the rest of Professor's example. Making a deep copy ONLY when you need it! 
        } // else ...
        return e
    });
    setMyList(tmpList);
  }

  // when you make a copy of an array, and that array has references inside of it, these references are PRESERVED in the copy!
  // If the inner value of the array has non-primitive (e.g. OBJECTS) values, then they are both actually
  // referencing the same thing, this is what a shallow copy means! How do we de-couple these two lists if we have to?
  // We have to create a DEEP COPY instead! Need a deep copy to de-link/de-couple two lists!
  // use spread operator to creat a copy of EACH OBJECT!
  function handleToggleYourList(artworkId, nextSeen) {
    const tmpList = yourList.map(e => {  // this map function returns a copy, which is set in YourList.
        if (e.id === artworkId) { 
            e.seen = nextSeen
        }
        return e
    });
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList} // this 
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
