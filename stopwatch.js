console.log("Connection Successful");
var sec=0;
var min=0;
var hours=0;

const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const reset=document.querySelector('#reset');
const time=document.querySelector('#time');

function timer(){
    sec++;
    if(sec%60 && sec>60)
    {
        sec=0
        min++;
    }
    if(min%60 && min>60)
    {
        min=0
        hours++;
    }
    time.innerHTML=`${hours}:${min}:${sec}`;
}

var interval
start.addEventListener('click',()=>{
    interval=setInterval(timer,10);
})

stop.addEventListener('click',()=>{
    clearInterval(interval);
    time.innerHTML=`${hours}:${min}:${sec}`;
})
reset.addEventListener('click',()=>{
    time.innerHTML=`00:00:00`
    min=0;
    sec=0;
    hours=0;
})