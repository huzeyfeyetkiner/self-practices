

let toplaDOM = document.querySelector("#topla")
let cikarDOM = document.querySelector("#cikar")
let carpDOM = document.querySelector("#carp")
let bolDOM = document.querySelector("#bol")

let deger1DOM = document.querySelector("#num1")
let deger2DOM = document.querySelector("#num2")


toplaDOM.addEventListener("click",topla)
cikarDOM.addEventListener("click",cikar)
carpDOM.addEventListener("click",carp)
bolDOM.addEventListener("click",bol)



let sonucDOM = document.querySelector("#sonuc")


function topla() {    
    let sonuc = parseInt(deger1DOM.value) + parseInt(deger2DOM.value)
    sonucDOM.value = sonuc
    console.log(sonuc);
}

function cikar() {
    let sonuc = parseInt(deger1DOM.value) - parseInt(deger2DOM.value)
    sonucDOM.value = sonuc
    console.log(sonuc);
}

function carp() {
    let sonuc = parseInt(deger1DOM.value) * parseInt(deger2DOM.value)
    sonucDOM.value = sonuc
    console.log(sonuc);
}

function bol() {
    let sonuc = parseInt(deger1DOM.value) / parseInt(deger2DOM.value)
    sonucDOM.value = sonuc
    console.log(sonuc);
}

let resetDOM = document.querySelector("#reset")

resetDOM.addEventListener("click",reset)

function reset(){
    deger1DOM.value = ""
    deger2DOM.value = ""
    sonucDOM.value = ""
}



