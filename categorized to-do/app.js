// DOMS

const taskDOM = document.querySelector("#input-task")
const btnAddDOM = document.querySelector("#btn-add")

const selectDOM = document.querySelector("#selection")

const schoolListDOM = document.querySelector("#school-list")
const homeListDOM = document.querySelector("#home-list")
const otherListDOM = document.querySelector("#other-list")




let taskSchool = []
let checkedTaskSchool = []

let taskHome = []
let checkedTaskHome= []

let taskOther = []
let checkedTaskOther = []

// önceden eklenmiş okul görevlerini yüklemek için
if(JSON.parse(localStorage.getItem("schoolTasks")) != null ){
    let tasks = JSON.parse(localStorage.getItem("schoolTasks"))

    for(let i = 0; i<tasks.length;i++){
        taskSchool[i] = tasks[i]
    }


    // tamamlanmış görev olup olmadığını kontrol ediyor
    if(JSON.parse(localStorage.getItem("checkedListSchool")) != null){
        let checks = JSON.parse(localStorage.getItem("checkedListSchool"))
        for(let i= 0;i<checks.length;i++){
            checkedTaskSchool[i] = checks[i]
        }
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
        closeDOM.onclick = delSchoolTask
        liDOM.onclick = checkedSchoolTask
        

        //görevin tamamlanıp tamamlanmadığını kontrol etmek için
        for(let j=0;j<checkedTaskSchool.length;j++){
            if(taskSchool[i] == checkedTaskSchool[j]){
                liDOM.classList.add("clicked")
            }
        }
    
    }


}

// önceden eklenmiş ev görevlerini yüklemek için
if(JSON.parse(localStorage.getItem("homeTasks")) != null){
    let tasks = JSON.parse(localStorage.getItem("homeTasks"))
    

    for(let i =0; i<tasks.length;i++){
        taskHome[i] = tasks[i]
    }

    // tamamlanmış görev olup olmadığını kontrol ediyor
    if(JSON.parse(localStorage.getItem("checkedListHome")) != null){
        let checks = JSON.parse(localStorage.getItem("checkedListHome"))
        for(let i= 0;i<checks.length;i++){
            checkedTaskHome[i] = checks[i]
        }
    }
    

    for(let i=0;i<taskHome.length;i++){
        const liDOM = document.createElement("li")
        liDOM.classList.add("list-group-item")       
        let task = taskHome[i]
        liDOM.innerHTML = task
        //silme butonunu oluşturmak için
        const closeDOM = document.createElement("span")
        closeDOM.textContent = "x"
        closeDOM.classList.add("close")
        liDOM.appendChild(closeDOM)            
        closeDOM.onclick = delHomeTask
        liDOM.onclick = checkedHomeTask
        homeListDOM.appendChild(liDOM)


        for(let j=0;j<checkedTaskHome.length;j++){
            if(taskHome[i] == checkedTaskHome[j]){
                liDOM.classList.add("clicked")
            }
        }



    }


}

if(JSON.parse(localStorage.getItem("otherTasks")) != null){
    let tasks = JSON.parse(localStorage.getItem("otherTasks"))

    for(let i=0;i<tasks.length;i++){
        taskOther[i] = tasks[i]
    }

    if(JSON.parse(localStorage.getItem("checkedListOther")) != null){
        let checks = JSON.parse(localStorage.getItem("checkedListOther"))
        for(let i= 0;i<checks.length;i++){
            checkedTaskOther[i] = checks[i]
        }
    }

    for(let i=0;i<tasks.length;i++){
        const liDOM = document.createElement("li")
        liDOM.classList.add("list-group-item")       
        let task = taskOther[i]
        liDOM.innerHTML = task
        //silme butonunu oluşturmak için
        const closeDOM = document.createElement("span")
        closeDOM.textContent = "x"
        closeDOM.classList.add("close")
        liDOM.appendChild(closeDOM)            

        closeDOM.onclick = delOtherTask
        liDOM.onclick = checkedOtherTask
        otherListDOM.appendChild(liDOM)

        for(let j=0;j<checkedTaskOther.length;j++){
            if(taskOther[i] == checkedTaskOther[j]){
                liDOM.classList.add("clicked")
            }
        }
    }
}

        
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
            closeDOM.onclick = delSchoolTask
            liDOM.onclick = checkedSchoolTask

            taskSchool.push(task)
            localStorage.setItem("schoolTasks",JSON.stringify(taskSchool))
            // console.log(taskSchool);
            
            

        }else if(selectDOM.value == "Home"){

            const liDOM = document.createElement("li")
            liDOM.classList.add("list-group-item")   
            let task = taskDOM.value    
            liDOM.innerHTML = task
            
            //silme butonunu oluşturmak için
            const closeDOM = document.createElement("span")
            closeDOM.textContent = "x"
            closeDOM.classList.add("close")
            liDOM.appendChild(closeDOM)
            
            homeListDOM.appendChild(liDOM)
            closeDOM.onclick = delHomeTask
            liDOM.onclick = checkedHomeTask

            taskHome.push(task)
            localStorage.setItem("homeTasks",JSON.stringify(taskHome))

        }else if(selectDOM.value == "Other"){

            const liDOM = document.createElement("li")
            liDOM.classList.add("list-group-item")
            let task = taskDOM.value       
            liDOM.innerHTML = task
            
            //silme butonunu oluşturmak için
            const closeDOM = document.createElement("span")
            closeDOM.textContent = "x"
            closeDOM.classList.add("close")
            liDOM.appendChild(closeDOM)
            
            otherListDOM.appendChild(liDOM)
            closeDOM.onclick = delOtherTask
            liDOM.onclick = checkedOtherTask
            
            taskOther.push(task)
            localStorage.setItem("otherTasks",JSON.stringify(taskOther))

        }
        taskDOM.value = ""
    }


})


// üstüne tıklanan okul görevini tamamlanmış görev olarak işaretlemek için kullanılan fonksiyon
function checkedSchoolTask() {
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

// okul görevlerinde close butonuna tıklandığında görevi silmek için kullanılan fonksiyon
function delSchoolTask () {
    this.parentElement.remove();
    // console.log(this.parentElement.textContent.slice(0,-1));
    let index = taskSchool.indexOf(this.parentElement.textContent.slice(0,-1))
    taskSchool.splice(index,1)
    localStorage.setItem("schoolTasks",JSON.stringify(taskSchool))
}

// üstüne tıklanan ev görevini tamamlanmış görev olarak işaretlemek için kullanılan fonksiyon
function checkedHomeTask() {
    this.classList.toggle("clicked")

    if(this.classList.contains("clicked")){
        let checkedTask = this.textContent.slice(0,-1)
        checkedTaskHome.push(checkedTask)
        localStorage.setItem("checkedListHome",JSON.stringify(checkedTaskHome))
    }else{
        for (let i=0;i<checkedTaskHome.length;i++){
            if(checkedTaskHome[i] == this.textContent.slice(0,-1)){
                checkedTaskHome.splice(i,1)
                localStorage.setItem("checkedListHome",JSON.stringify(checkedTaskHome))
            }
        }
    }

}

// ev görevlerinde close butonuna tıklandığında görevi silmek için kullanılan fonksiyon
function delHomeTask() {
    this.parentElement.remove();
    let index = taskHome.indexOf(this.parentElement.textContent.slice(0,-1))
    taskHome.splice(index,1)
    localStorage.setItem("homeTasks",JSON.stringify(taskHome))
}

function checkedOtherTask(){
    this.classList.toggle("clicked")

    if(this.classList.contains("clicked")){
        let checkedTask = this.textContent.slice(0,-1)
        checkedTaskOther.push(checkedTask)
        localStorage.setItem("checkedListOther",JSON.stringify(checkedTaskOther))
    }else {
        for(let i=0;i<checkedTaskOther.length;i++){
            if(checkedTaskOther[i] == this.textContent.slice(0,-1)){
                checkedTaskOther.splice(i,1)
                localStorage.setItem("checkedListOther",JSON.stringify(checkedTaskOther))
            }
        }
    }
}

function delOtherTask() {
    this.parentElement.remove();
    let index = taskOther.indexOf(this.parentElement.textContent.slice(0,-1))
    taskOther.splice(index,1)
    localStorage.setItem("otherTasks",JSON.stringify(taskOther))
}

// function delOtherTask() {
//     this.parentElement.remove();
//     let index = taskOt
// }





