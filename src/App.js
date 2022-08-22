import { useState } from 'react';
import './App.css';
import Form from './Form/Form';
const stringInfromation = 'This is a string from App.js';

function App() {

  const [userObject, setUserObject] = useState({ user: [] });
  const [toggle, setToggle] = useState(false);

  const TransferHandler = (value) => {
    console.log(value)
    let object = userObject["user"];
    object.push(value);
    setUserObject({user:object});


  }

  return (
    <div className="App">
      <br/>
      <br/>
      
      <button onClick = {() => setToggle(true)}>Show Form</button>
{ toggle &&
      <Form stringTransfer = {stringInfromation} objectTransfer = {TransferHandler}/>
}
      {
        userObject.user.map(
          (item, index) =>
          <div key={index}>
            <p> <span style={{color:'blue'}}>Name: </span>{item.fName} {item.lName} <span style={{color:'blue'}}>Age: </span>{item.age} <span style={{color:'blue'}}>Phone:</span>{item.pNumber}</p>
           
          </div>
        )
      }
    </div>
  );
}

export default App;
