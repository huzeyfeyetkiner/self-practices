

// json dosyasından veri çekmek
fetch("settings.json").then( resp => {
    return resp.json()
}).then(respJSON => {
    console.log(respJSON);
    console.log(respJSON.userName);
    console.log(respJSON.IDs);
})



const userListDOM = document.querySelector(".userList")

// API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then( data =>{
    return data.json()
}).then(dataJson => {
    console.log(dataJson);
    console.log(dataJson[0]);

    const filteredData = dataJson.filter( item => item.id = 1)
    // console.log(filteredData);

    filteredData.forEach( data => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = data.title
        userListDOM.appendChild(liDOM)
        console.log(data);       

    })
})