import './App.css'
import { useState } from 'react';

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function Person() {
  const [person, setPerson] = useState(100);
  const [first, setFirst] = useState("John");
  const [last, setLast] = useState("");
  const name = first + " " + last
  // GOOD - Do this!
  const handleIncreaseAge = () => {
    setPerson(person+1);
  };
  
  

  return (
    <>
      <h1>{name}</h1>
      <h2>{person}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <label>First Name</label>
      <input
      type="text"
      value={first}
      onChange={(event) => setFirst(event.target.value)}
    />
    <label>Last name</label>
     <input
      type="text"
      value={last}
      onChange={(event) => setLast(event.target.value)}
    />
    </>
  );
}




function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List  />
      <Person />
    </div>
  );
}


export default App
