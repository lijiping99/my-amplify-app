
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "apia8c750ec"
const path = '/marathons'; 

const RegisterMarathon = () => {

    const [inputs, setInputs] = useState({});
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    postMarathon(inputs);
  }

  const [status, setStatus] = useState("")

  //Function to post from our backend and update customers array
  function postMarathon(e) {
    let marathonId = e.input

    API.post(myAPI, path,{body: e,headers: {}})
       .then(response => {
         console.log("api response: "+response)
         setStatus(response)
       })
       .catch(error => {
         console.log(error)
       })
  }

    return (

        <div className="App">
         <h1>Register Your Marathon Record</h1>
          <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>your name:</label>
            <input placeholder="your name" type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>    
            </div>
            <div>
            <label>marathon city:</label>
            <input placeholder="Boston" type="text" name="marathon" value={inputs.marathon || ""} onChange={handleChange}/>           
            </div>
            <div>
            <label>marathon date:</label>
            <input placeholder="yyyymmdd" type="text" name="date" value={inputs.date || ""} onChange={handleChange}/>     
            </div>
            <div>
            <label>finish time:</label>
            <input placeholder="hh:mm:ss" type="text" name="time" value={inputs.time || ""} onChange={handleChange}/>     
            </div>
            <div>
            <label>your gender:</label>
            <input placeholder="M/F" type="text" name="gender" value={inputs.gender || ""} onChange={handleChange}/>     
            </div>
            <div>
            <label>age when run this marathon:</label>
            <input placeholder="35" type="text" name="age" value={inputs.age || ""} onChange={handleChange}/>     
            </div>
            <input type="submit" />
            </form>
          </div>
          <br/>
          Register Status: {status}
        </div>
      )
  };
  
  export default RegisterMarathon;