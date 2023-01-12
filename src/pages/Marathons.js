import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';
import Amplify, { API } from 'aws-amplify'

const myAPI = "apia8c750ec"
const path = '/marathons'; 

const Marathons = () => {
    const [data, setData] = useState([]);
    
    const getMarathons =  async () => {
      /*
        let marathons = [
         {
             runner: "abc",
             marathon: "Carmel",
             gender: "M",
             time: 200000,
             date: "20200202",
             age: 35
         },
         {
             runner: "def",
             marathon: "Carmel",
             gender: "M",
             time: 200000,
             date: "20200202",
             age: 35
         }
     ];
     console.log("static response="+JSON.stringify(marathons));
     */
    
    let marathons;
     await API.get(myAPI, path,{})
     .then(response => {
       console.log("get api resopnse="+JSON.stringify(response));
       marathons = response; //need to know what is response is
     })
     .catch(error => {
       console.log(error)
     })
     
     return marathons;
    }

    const handleClick = async () => {
        //let marathons = await getMarathons();
        setData(await getMarathons());
    }

    return (
        <div>
        <Link to="/marathons" onClick={handleClick}>Total Marathons Rankings</Link>&emsp;
        <Link to="/marathons">Female Marathons Rankings</Link>&emsp;
        <Link to="/marathons">Male Marathons Rankings</Link>
        <table>
            <thead>
            <tr>
                <th>runner</th>
                 <th>marathon</th>
                 <th>date</th>
                 <th>time</th>
                 <th>gender</th>
                 <th>age</th>
            </tr>
            </thead>
            <tbody>
            {data.map(marathon => {
                return (            
            <tr>
                <td>{marathon.runner}</td>
                <td>{marathon.marathon}</td>
                <td>{marathon.date}</td>
                <td>{marathon.time}</td>
                <td>{marathon.gender}</td>
                <td>{marathon.age}</td>
            </tr>
            );
         })}
         </tbody>
        </table> 
        </div>
    );
  };
  
  export default Marathons;