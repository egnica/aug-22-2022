import { useState } from "react";

const Form = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const SubmitHandler = (event) => {

        event.preventDefault()
        props.objectTransfer(
            {
            fName: firstName,
            lName: lastName,
            age: age,
            pNumber: phoneNumber
            }
        )
        setFirstName('');
        setLastName('');
        setAge('');
        setPhoneNumber('');
    }

    return(
        <div>   
             <p>{props.stringTransfer}</p>   
             <br/>
        <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <br/>
            
            <br/>
            <form onSubmit = {SubmitHandler} style = {{ textAlign: 'right'}}>
                <label>First Name: </label>
                <input onChange = {event => setFirstName(event.target.value)} value={firstName}/>
                <br/>
                <label>Last Name: </label>
                <input onChange = {event => setLastName(event.target.value)} value={lastName}/>
                <br/>
                <label>Age: </label>
                <input onChange = {event => setAge(event.target.value)} value={age}/>
                <br/>
                <label>Phone Number: </label>
                <input onChange = {event => setPhoneNumber(event.target.value)} value={phoneNumber}/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}
export default Form;