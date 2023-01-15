const About = () => {
    return (
    <div>
        <p>
            Introduction:<br/><br/>
            1. input your marathon record, then click the different rankings link for Fun<br/><br/>
            2. click link Register Your Marathon Record to input your Marathon record<br/><br/>
                your name:  Firstname Lastname, make sure use the same name for all your record<br/>
                where: the city you run this Marathon or the Marathon name<br/>
                date: the date you run this Marathon, format yyyy-mm-dd, make sure enter the acurate date<br/>
                time: the time you finish this Marathon, format hh:mm:ss, such as 3:45:12<br/>
                gender: this is optional, if you want want ranking this record based on gender,  you can choose your gender<br/>
                age: this is optional, if you want want ranking this record based on age, you can input your age when run this Marathon<br/><br/>
                your name plus the date will uniquely identify one marathon record in this app<br/><br/>
            3. Rankings:<br/><br/>
               All Rankings link show all rankings, no consider gender and age<br/>
               Female Rankings link show rankings of Female only, no consider age<br/>
               Male Rankings link show rankings of Male only, no consider age<br/>
               30- Rankings link show rankings of runner under 30, no consider gender<br/>
               30-50 Rankings link show rankings of runner between 30-50, no consider gender<br/>
               50+ Rankings link show rankings of runner above 50, no consider gender<br/>
               
        </p>
    </div>
    )
  };
  
  export default About;