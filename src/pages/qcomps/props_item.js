function ItemOld({ name, isPacked }) { //changed name to ItemOld instead of Item to see if tern. op worked
  if (isPacked) {
    return <li className="item"> <del>{name}</del> </li>;
  }
  return <li className="item"> {name} </li>
}

// try this with a ternary operator!
function Item({ name, isPacked }) {
  let tag;
  isPacked? tag = <li> <del> {name} </del> </li> : tag = <li> {name} </li>;
  return tag;
}

// Joydeep's example:

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
