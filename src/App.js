import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "apia80f2aef"
const path = '/marathons'; 

const App = () => {

  /*
  const [name, setName] = useState("")
  const [marathon, setMarathon] = useState("")
  const [gender, setGender] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [age, setAge] = useState("")
 */
  const [inputs, setInputs] = useState({});
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    getMarathon(inputs);
  }

  const [marathons, setMarathons] = useState([])

  //Function to fetch from our backend and update customers array
  function getMarathon(e) {
    let marathonId = e.input
    
    API.post(myAPI, path + "/" + marathonId,{body: e,headers: {}})
       .then(response => {
         console.log(response)
         let newMarathons = [...marathons]
         newMarathons.push(response)
         setMarathons(newMarathons)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>Super Simple Marathon Ranking App</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label>your name:</label>
        <input placeholder="your name" type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>    
        </div>
        <div>
        <label>marathon city:</label>
        <input placeholder="" type="text" name="marathon" value={inputs.marathon || ""} onChange={handleChange}/>           
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
      

      <h2 style={{visibility: marathons.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       marathons.map((thisMarathon, index) => {
         return (
        <div key={thisMarathon.marathonId}>
          <span><b>MarathonId:</b> {thisMarathon.customerId} - <b>MarathonName</b>: {thisMarathon.customerName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;
