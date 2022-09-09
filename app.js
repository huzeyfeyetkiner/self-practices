


let inputTaskDOM = document.querySelector("#inputTask")
let btnAddDOM = document.querySelector("#btnAdd")
let listTask = document.querySelector("#listTask")


btnAddDOM.addEventListener("click", addTask)





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



    }else {
        alert("BOŞ EKLEME YAPAMAZSINIZ")
    }  


}

function remove(){
    this.parentElement.remove()
}
