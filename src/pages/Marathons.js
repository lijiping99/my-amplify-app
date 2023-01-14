import { Outlet, Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import Amplify, { API } from 'aws-amplify'
import { useParams } from "react-router-dom"

const myAPI = "apia8c750ec"

const Marathons = () => {

    let rank = 0;

    let path = '/marathons'; 

    const { gender,ageScope } = useParams();

    const [ data, setData ] = useState([]);
   
    console.log("path variable gender ="+gender);
    console.log("path variable scope ="+ageScope);

    if(gender){
        path = path+"/gender/"+gender;
    }
    if(ageScope){
        path = path+"/age/"+ageScope
    }
    useEffect(() => {
        async function getMarathons() {
            let marathons;
            //console.log("start calling path:"+path);
            await API.get(myAPI, path,{})
            .then(response => {
            //console.log("get api resopnse="+JSON.stringify(response));
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

    },[gender,ageScope]);

    return (
        <div>
        <table>
            {/*
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
            */}
            <tbody>
            {data.map(marathon => {
                    rank = rank+1
                return (            
            <tr>
                <td>{rank}</td>
                <td>{marathon.runner}</td>
                <td>{getTimeString(marathon.time)}</td>
                <td>{marathon.marathon}</td>
                <td>{marathon.date}</td>
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

  const getTimeString = (time) =>{
    let hoursQuotient = Math.floor(time/3600);
    let hoursRemainder = time % 3600;
    let minutesQuotient = Math.floor(hoursRemainder/60);
    let minutesRemainder = hoursRemainder % 60;
    if(minutesQuotient<10) minutesQuotient='0'+minutesQuotient;
    if(minutesRemainder<10) minutesRemainder='0'+minutesRemainder;
    return hoursQuotient+":"+minutesQuotient+":"+minutesRemainder
}
  
  export default Marathons;