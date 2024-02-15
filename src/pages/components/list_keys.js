const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

/*
 *  What makes a good key? Is index good enough? NO! What if you sort/filter the list? what if you delete 
 *  something from the list? Think of a different identifier (comes from the dataset).
 *  Define a function that uses values from the array and generates a unique identifier!
 */

export default function List() {
  // notice: when we do the map, we also pass an index for react to use as a unique key!
  const listItems = people.map((person, index) =>
    <li key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}