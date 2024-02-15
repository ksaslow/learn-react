export default function MenuBar() {
  return (
    <div>
      <AButton id="btn1" color="red" size="50px">
        Button 1
      </AButton>
      <AButton id="btn2" color="green" size="30px">
        Button 2
      </AButton>
    </div>
  );
}

function AButton() {
  const handleClick = () => {
    document.getElementById(`${id}`).style.backgroundColor = color;
    document.getElementById(`${id}`).style.fontSize = size;
  }
  return (
    <button id={`${id}`} onClick={handleClick}>
      {children}
    </button>
  );
}
