let time1="03:03:04";
let time2="13:34:56"

const getTimeNumber = (time) =>{
    let hours = time.split(":")[0];
    if(hours.startsWith['0']) hours=hours[1]
    let minutes = time.split(":")[1];
    if(minutes.startsWith['0']) minutes=minutes[1]
    let seconds = time.split(":")[2];
    if(seconds.startsWith['0']) seconds=seconds[1]
    
    let timeNumber = Number(hours)*3600+Number(minutes)*60+Number(seconds);

    return timeNumber;
}
const getTimeString = (time) =>{
    hoursQuotient = Math.floor(time/3600);
    hoursRemainder = time % 3600;
    minutesQuotient = Math.floor(hoursRemainder/60);
    minutesRemainder = hoursRemainder % 60;
    if(minutesQuotient<10) minutesQuotient='0'+minutesQuotient;
    if(minutesRemainder<10) minutesRemainder='0'+minutesRemainder;
    return hoursQuotient+":"+minutesQuotient+":"+minutesRemainder
}
//console.log(13*3600+34*60+56) //10984//48896
//console.log(getTimeNumber(time2));

console.log(getTimeString(48896));