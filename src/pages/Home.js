import { getActiveElement } from '@testing-library/user-event/dist/utils';
import {useState,useEffect} from 'react';

const Home = () => {
    return (
    <div>
        <p>
            1. input your marathon record, then check the different rankings link for Fun<br/><br/>
            2. click link Register Your Marathon Record to input your Marathon record<br/><br/>
                your name:  Firstname Lastname, make sure use the same name for all your record<br/>
                where: the city you run this Marathon or the Marathon name<br/>
                date: the date you you run this Marathon, format yyyymmdd<br/>
                time: the time you finish this Marathon, format hh:mm:ss, such as 3:45:12<br/>
                gender: this is optional, if you want want ranking this record based on gender,  you can choose your gender<br/>
                age: this is optional, f you want want ranking this record based on age, you can input your age when run this Marathon<br/><br/>
            3. Rankings:<br/><br/>
               All Rankings link show rankings without consider gender and age<br/>
               Female Rankings link show rankings of Female only, no consider age<br/>
               Male Rankings link show rankings of Male only, no consider age<br/>
               30- Rankings link show rankings of runner under 30, no consider gender<br/>
               30-50 Rankings link show rankings of runner between 30-50, no consider gender<br/>
               30- Rankings link show rankings of runner above 50, no consider gender<br/>
               
        </p>
    </div>
    )
  };
  
  export default Home;