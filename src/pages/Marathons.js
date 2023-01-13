import { Outlet, Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import Amplify, { API } from 'aws-amplify'
import { useParams } from "react-router-dom"

const myAPI = "apia8c750ec"

const Marathons = () => {

    let path = '/marathons'; 

    const { gender } = useParams();

    const [data, setData ] = useState([]);

    console.log("path variable gender ="+gender);

    if(gender){
        path = path+"/"+gender;
    }
  

    useEffect(() => {
        async function getMarathons() {
            let marathons;
            console.log("start calling path:"+path);
            await API.get(myAPI, path,{})
            .then(response => {
            console.log("get api resopnse="+JSON.stringify(response));
            marathons = response; //need to know what is response is
            })
            .catch(error => {
            console.log(error)
            })
            
            marathons.sort((a, b) => {
                return a.time - b.time;
            })
            setData(marathons);
        };
    
    getMarathons();

    },[]);

    return (
        <div>
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
    
   /*
    return (
        <div>
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
    */
  };
  
  export default Marathons;