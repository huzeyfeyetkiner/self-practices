
const colors = [
    "#F06543",
    "#F09D51",
    "#504136",
    "#B2E6D4",
    "#A49E8D",
    "#495867",
    "#F7F7FF",
    "#FE5F55",
    "#DFC2F2"
]


let containerDOM = document.querySelector(".container")

for (let i = 0;i<300;i++){
    let boxDOM = document.createElement("div")
    boxDOM.classList.add("box")
    containerDOM.appendChild(boxDOM)

}

let boxes = document.querySelectorAll(".box")

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        let random = Math.floor(Math.random() * colors.length)
        box.style.backgroundColor = `${colors[random]}`
    })

    box.addEventListener("mouseout", () => {
        setTimeout( () => {
            box.style.backgroundColor = `gray`
        },2000)
    })

})