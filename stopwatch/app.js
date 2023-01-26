

const daysDOM = document.querySelector(".days")
const hoursDOM = document.querySelector(".hours")
const minutesDOM = document.querySelector(".minutes")
const secondsDOM = document.querySelector(".seconds")
const splitsDOM = document.querySelector(".splits")



const startDOM = document.querySelector(".start")
const stopDOM = document.querySelector(".stop")
const clearDOM = document.querySelector(".clear")

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let splits = 0;

startDOM.addEventListener("click",()=>{

    startDOM.disabled = true
    let counter = setInterval(()=>{
        splits++;
        if(splits == 60){
            splits = 0;
            seconds++;
            if(seconds == 60){
                seconds = 0
                minutes++
                if(minutes == 60){
                    minutes = 0
                    hours++
                    if(hours == 24){
                        hours = 0
                        days++
                    }
                }
            }
        }


        daysDOM.innerHTML = `Days:${days}`
        hoursDOM.innerHTML = `Hours:${hours}`
        minutesDOM.innerHTML = `Minutes:${minutes}`
        secondsDOM.innerHTML = `Seconds:${seconds}`
        splitsDOM.innerHTML = `Split-seconds:${splits}`
        
    },16,6)



    stopDOM.addEventListener("click",()=>{
        clearInterval(counter);
        startDOM.disabled=false
    })

    clearDOM.addEventListener("click",()=>{
        clearInterval(counter)
        startDOM.disabled=false;
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        splits = 0;
        daysDOM.innerHTML = `Days:${days}`
        hoursDOM.innerHTML = `Hours:${hours}`
        minutesDOM.innerHTML = `Minutes:${minutes}`
        secondsDOM.innerHTML = `Seconds:${seconds}`
        splitsDOM.innerHTML = `Split-seconds:${splits}`
    })


})

