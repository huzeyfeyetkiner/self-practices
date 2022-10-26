


let inputTaskDOM = document.querySelector("#inputTask")
let btnAddDOM = document.querySelector("#btnAdd")
let listTask = document.querySelector("#listTask")
let ullength = document.getElementsByTagName("li")

btnAddDOM.addEventListener("click", addTask)


for(let i=0;i<ullength.length;i++){

    let closeBtnDOM = document.createElement("span")
    closeBtnDOM.innerHTML = "\u00D7"
    closeBtnDOM.classList.add("close")        
     
    closeBtnDOM.addEventListener("click",remove)
    ullength[i].append(closeBtnDOM)
    

    // <li><span class ="close">\u00D7</span></li>


}


function addTask(){

    if(inputTaskDOM.value){

        let liDOM = document.createElement("li")
        liDOM.classList.add("list-group-item")
        liDOM.innerHTML = inputTaskDOM.value        

        let closeBtnDOM = document.createElement("span")
        closeBtnDOM.textContent = "\u00D7"
        closeBtnDOM.classList.add("close")        
        liDOM.append(closeBtnDOM)        
        
        listTask.append(liDOM)   

        inputTaskDOM.value = ""          
        
        closeBtnDOM.onclick = remove
        liDOM.onclick = check
    }else {
        alert("BOŞ EKLEME YAPAMAZSINIZ")
    }  


}

function remove(){
    this.parentElement.remove()
}

function check() {
    this.style.textDecoration = "line-through"
}


window.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
  });