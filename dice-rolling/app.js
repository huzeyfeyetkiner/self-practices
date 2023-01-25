
// kullanıcı adlarının girileceği DOM'lar
const inputOneDOM = document.querySelector("#input-one")
const inputTwoDOM = document.querySelector("#input-two")

// submit butonlarının DOM'ları
const submitOneDOM = document.querySelector(".submit-1")
const submitTwoDOM = document.querySelector(".submit-2")

// roll butonun DOM'u
const btnRollDOM = document.querySelector(".btn-roll")

// zar imagelerinin DOM'ları
const firstDiceDOM = document.querySelector(".first")
const secondDiceDOM = document.querySelector(".second")

// kullanıcı adlarının yazdığı p elementlerinin DOM'ları
const p1Name = document.querySelector(".p-1")
const p2Name = document.querySelector(".p-2")

// başlık
const headingDOM = document.querySelector(".heading")

let name1 = "Player ONE"
let name2 = "Player TWO"


//swal alert fonksiyonları için 
function Saved(){
    Swal.fire(
        'Saved!',
        'Your player name saved',
        'success'
      )
}

function Error(){
    Swal.fire(
        'Error!',
        'You need to give a player name first',
        'error'
      )
}


// Sumbit butonuna basıldığında olacak olan olaylar
submitOneDOM.addEventListener("click",()=>{
    if(inputOneDOM.value === ''){
        Error() 
    }else{
        name1 = inputOneDOM.value
        p1Name.innerHTML=name1;
        Saved()
    }   
})

submitTwoDOM.addEventListener("click",()=>{
    if(inputTwoDOM.value === ''){
        Error() 
    }else{
        name2 = inputTwoDOM.value
        p2Name.innerHTML=name2;
        Saved()
    }   

})


// zar atma işlemi
btnRollDOM.addEventListener("click", ()=>{
    let random1 = Math.floor( Math.random() * 6 + 1);
    let random2 = Math.floor( Math.random() * 6 + 1);    
   

    firstDiceDOM.setAttribute("src",`img/dice${random1}.png`)
    secondDiceDOM.setAttribute("src",`img/dice${random2}.png`)

    if(random1 > random2){
        headingDOM.innerHTML = `${name1} crushed ${name2}`
    }else if(random1 < random2){
        headingDOM.innerHTML = `${name2} crushed ${name1}`
    }else{
        headingDOM.innerHTML = `DRAW!`
    }
    
})



