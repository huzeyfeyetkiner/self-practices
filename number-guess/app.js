let inputDOM = document.querySelector("#number")
let guessDOM = document.querySelector("#guess")
let resetDOM = document.querySelector("#reset")

let numbersDOM = document.querySelector(".numbers")
let messageDOM = document.querySelector(".message")

let guessedNums = [];
let count = 10;


let random = Math.floor(Math.random() * 100 + 1) // 0-100 arası rastgele sayı üretiyor

console.log(random);



guessDOM.addEventListener("click", () => { //girilen tahminin doğru olup olmadığını kontrol eden event

    
    if(count>0){
         if(inputDOM.value == random){
            alert("Congrats!! You found the number.")   
            count = 10
            random = Math.floor(Math.random() * 100 + 1)
            guessedNums = []
            messageDOM.textContent = "Hints will be shown here"
            numbersDOM.textContent = "Numbers you tried:"
            inputDOM.value = "";
    console.log(random);     
        }else if(inputDOM.value < random){
            guessedNums.push(inputDOM.value)
            messageDOM.textContent = `Give a higher number. ${count} Lives left`
            numbersDOM.textContent = `Numbers you tried: ${guessedNums}`
            count -= 1
        }else if(inputDOM.value > random){
            guessedNums.push(inputDOM.value)
            messageDOM.textContent = `Give a lower number. ${count} Lives left`
            numbersDOM.textContent = `Numbers you tried: ${guessedNums}`
            count -= 1
        }
    }else{
        alert(`You couldn't find the number: ${random}`)
    }
    inputDOM.value = "";
})


resetDOM.addEventListener("click",()=> {
    count = 10
    random = Math.floor(Math.random() * 100 + 1)
    guessedNums = []
    messageDOM.textContent = "Hints will be shown here"
    numbersDOM.textContent = "Numbers you tried:"
    inputDOM.value = "";
    console.log(random);
})

