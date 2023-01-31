// DOMS

const taskDOM = document.querySelector("#input-task")
const btnAddDOM = document.querySelector("#btn-add")

const selectDOM = document.querySelector("#selection")

const schoolListDOM = document.querySelector("#school-list")
const homeListDOM = document.querySelector("#home-list")
const otherListDOM = document.querySelector("#other-list")




let taskSchool = []
let checkedTaskSchool = []

if(JSON.parse(localStorage.getItem("schoolTasks")) != null ){
    let tasks = JSON.parse(localStorage.getItem("schoolTasks"))
    let checks = JSON.parse(localStorage.getItem("checkedListSchool"))

    for(let i = 0; i<tasks.length;i++){
        taskSchool[i] = tasks[i]
    }

    for(let i=0;i<checks.length;i++){
        checkedTaskSchool[i] = checks[i]
    }

    

    for(let i = 0; i<taskSchool.length;i++){

        const liDOM = document.createElement("li")
        liDOM.classList.add("list-group-item")       
        let task = taskSchool[i]
        liDOM.innerHTML = task
        //silme butonunu oluşturmak için
        const closeDOM = document.createElement("span")
        closeDOM.textContent = "x"
        closeDOM.classList.add("close")
        liDOM.appendChild(closeDOM)
            
        schoolListDOM.appendChild(liDOM)
        closeDOM.onclick = delTask
        liDOM.onclick = checked 
        

        //görevin tamamlanıp tamamlanmadığını kontrol etmek için
        for(let j=0;j<checkedTaskSchool.length;j++){
            if(taskSchool[i] == checkedTaskSchool[j]){
                liDOM.classList.add("clicked")
            }
        }
    
    }


}

// console.log(taskSchool);


// ekleme butonuna tıklandığında görevlerin ilgili kategoriye eklenmesini sağlayan event
btnAddDOM.addEventListener("click", () => {


    if(taskDOM.value == ""){
        Swal.fire(
            'Error!',
            'You need to input task',
            'error'
          )
    }else {        
        if(selectDOM.value == "School"){

            const liDOM = document.createElement("li")
            liDOM.classList.add("list-group-item")       
            let task = taskDOM.value
            liDOM.innerHTML = task

            //silme butonunu oluşturmak için
            const closeDOM = document.createElement("span")
            closeDOM.textContent = "x"
            closeDOM.classList.add("close")
            liDOM.appendChild(closeDOM)
            
            schoolListDOM.appendChild(liDOM)
            closeDOM.onclick = delTask
            liDOM.onclick = checked  

            taskSchool.push(task)
            localStorage.setItem("schoolTasks",JSON.stringify(taskSchool))
            // console.log(taskSchool);
            
            

        }else if(selectDOM.value == "Home"){

            const liDOM = document.createElement("li")
            liDOM.classList.add("list-group-item")       
            liDOM.innerHTML = taskDOM.value 
            
            //silme butonunu oluşturmak için
            const closeDOM = document.createElement("span")
            closeDOM.textContent = "x"
            closeDOM.classList.add("close")
            liDOM.appendChild(closeDOM)
            
            homeListDOM.appendChild(liDOM)
            closeDOM.onclick = delTask
            liDOM.onclick = checked  

        }else if(selectDOM.value == "Other"){

            const liDOM = document.createElement("li")
            liDOM.classList.add("list-group-item")       
            liDOM.innerHTML = taskDOM.value 
            
            //silme butonunu oluşturmak için
            const closeDOM = document.createElement("span")
            closeDOM.textContent = "x"
            closeDOM.classList.add("close")
            liDOM.appendChild(closeDOM)
            
            otherListDOM.appendChild(liDOM)
            closeDOM.onclick = delTask
            liDOM.onclick = checked  

        }
        taskDOM.value = ""
    }


})


// üstüne tıklanan li elementini tamamlanmış görev olarak işaretlemek için kullanılan fonksiyon
function checked() {
    this.classList.toggle("clicked")
    if(this.classList.contains("clicked")){
        let checkedTask = this.textContent.slice(0,-1)
        checkedTaskSchool.push(checkedTask)
        localStorage.setItem("checkedListSchool",JSON.stringify(checkedTaskSchool))
        console.log(this.textContent.slice(0,-1));
   }else {
        for(let i=0;i<checkedTaskSchool.length;i++){
            if(checkedTaskSchool[i] == this.textContent.slice(0,-1)){
                checkedTaskSchool.splice(i,1)
                localStorage.setItem("checkedListSchool",JSON.stringify(checkedTaskSchool))
            }
        }
        console.log("Clicked removed");
   }
}

// close butonuna tıklandığında görevi silmek için kullanılan fonksiyon
function delTask () {
    this.parentElement.remove();
    // console.log(this.parentElement.textContent.slice(0,-1));
    let index = taskSchool.indexOf(this.parentElement.textContent.slice(0,-1))
    taskSchool.splice(index,1)
    localStorage.setItem("schoolTasks",JSON.stringify(taskSchool))
}

// function finishedTasks(){
//    if(this.parentElement.classList.contains("clicked")){
//         console.log(this.parentElement);
//    }
// }

