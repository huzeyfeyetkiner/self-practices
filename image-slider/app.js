

const nextDOM = document.querySelector(".next")
const prevDOM = document.querySelector(".prev")
const img = document.querySelectorAll("img")
const sliderContainerDOM = document.querySelector(".slider-container")


let imgCount = 0;
let moveAmount = document.querySelector("#slider").clientWidth;

console.log(sliderContainerDOM);


nextDOM.addEventListener("click",()=>{
    if(imgCount < img.length-1){
        imgCount++
    }else{
        imgCount = 0;
    }

    img.forEach((item) => {
        item.style.transform = `translateX(-${moveAmount * imgCount}px)`
    })

})

prevDOM.addEventListener("click",() => {
    if(imgCount == 0){
        imgCount = img.length -1    
    }else{
        imgCount = imgCount - 1;
    }

    img.forEach((item) => {
        item.style.transform = `translateX(-${moveAmount*imgCount}px)`
    })
})