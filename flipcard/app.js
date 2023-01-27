const vocabulary = [

    {
        english : "Blue",
        turkish : "Mavi"
    },
    {
        english : "Teacher",
        turkish : "Öğretmen"
    },
    {
        english : "Computer",
        turkish : "Bilgisayar"
    },
    {
        english : "Phone",
        turkish : "Telefon"
    },
    {
        english : "Glass",
        turkish : "Cam"
    },
    {
        english : "Tomato",
        turkish : "Domates"
    },
    {
        english : "Paper",
        turkish : "Kağıt"
    },
    {
        english : "School",
        turkish : "Okul"
    },

]

console.log(typeof(vocabulary));

const flipcards = document.querySelector(".flipcards")

for(let i =0;i<vocabulary.length;i++) {
    let liDOM = document.createElement("li")
    liDOM.classList.add("flipcard")
    liDOM.innerHTML = `<h3 class="flipcard-head">${vocabulary[i].turkish}</h3> 
                       <p class="flipcard-body">${vocabulary[i].english}</p>
    `
    flipcards.appendChild(liDOM)

}

const fpDOM = document.querySelectorAll(".flipcard")

fpDOM.forEach((item) => {
    item.addEventListener("click",() => {
        item.classList.toggle("clicked")
    })
})

