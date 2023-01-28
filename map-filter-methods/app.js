


const users = ["Huzo","Furkan","MAMİ","MasTER","sAmEt"]


const filteredUsers = users.filter( item => item.length>5 )
console.log(filteredUsers);

const mapUsers = users.map( user => user.toLowerCase() )

console.log(mapUsers);

const mapUsers2 = users.map( user => {
    return { userName : user , shortName : `${user[0].toUpperCase()}.` , newName : `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}` }
})

console.log(mapUsers2);