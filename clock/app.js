

let name = document.querySelector("#nameText")
let date = document.querySelector("#dateText")


let ad = prompt("Lütfen adınızı girin")
name.innerHTML = `Merhaba ${ad}`

function showTime(){
    const d = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    let day = d.getDay()

    date.innerHTML = `Bugün günlerden ${days[day]} ve Saat ${hour}:${min}:${(sec<10) ? "0"+sec : sec}`
    setTimeout(showTime,1000)
}

showTime();