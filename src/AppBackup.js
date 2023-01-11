import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "apia80f2aef"
const path = '/marathons'; 

const App = () => {
  const [input, setInput] = useState("")
  const [marathons, setMarathons] = useState([])

  //Function to fetch from our backend and update customers array
  function getMarathon(e) {
    let marathonId = e.input
    API.get(myAPI, path + "/" + marathonId)
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
      <h1>Super Simple React App</h1>
      <div>
          <input placeholder="marathon id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getMarathon({input})}>Get Marathon From Backend</button>

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
