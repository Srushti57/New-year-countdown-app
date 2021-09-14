
const new_years = "1 Jan 2022";
const daysN = document.getElementById("days");
const hoursN = document.getElementById("hours");
const minutesN = document.getElementById("minutes");
const secondsN = document.getElementById("seconds");

function countdown(){
    const newYearsDate = new Date(new_years);
    const currDate = new Date();

    var totalseconds = (newYearsDate - currDate)/1000;

    // const days = Math.floor((totalseconds/3600) / 24);
    // const hours = Math.floor((totalseconds/3600) % 24);
    // const minutes = Math.floor((totalseconds/60) % 60);
    // const seconds = Math.floor(totalseconds % 60);

var minutes = Math.floor(totalseconds/60);
var hours = Math.floor(minutes/60);
var days = Math.floor(hours/24);

hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
totalseconds = Math.floor(totalseconds-(days*24*60*60)-(hours*60*60)-(minutes*60));

    daysN.innerHTML = days;
    hoursN.innerHTML = formatTime(hours);
    minutesN.innerHTML = formatTime(minutes);
    secondsN.innerHTML = formatTime(totalseconds);
}
function formatTime(time){
    return time<10 ? `0${time}`: time;
}
countdown();

setInterval(countdown, 1000);