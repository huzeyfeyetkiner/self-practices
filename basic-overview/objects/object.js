


const laptop1 = {
    brand : "Lenovo",
    model : "Ideapad 5",
    year : "2022"
}


console.log(laptop1);

// yeni değer ekleme

laptop1.version = "10.11.22"
console.log(laptop1);



console.log("***************");
//key değerine ulaşma

console.log(Object.keys(laptop1));
let keys = Object.keys(laptop1)
keys.forEach ( key => console.log(key) ) // key değerlerini ekrana yazdırıyor
keys.forEach ( key => console.log(laptop1[key]) ) //value değerlerine ulaşıyor

console.log("************");

//value değerine ulaşma
let values = Object.values(laptop1)
values.forEach ( value => console.log(value) )


//objelere metot-fonksiyon ekleme

let user = {
    userName : "Huzeyfe",
    userLastName : "Yetkiner",
    password : "123456",
    shortName : function() { 
        return `${this.userName[0].toUpperCase()}. ${this.userLastName}` 
    }
}

//obje içerisinde oluşturulan fonksiyonu çağırdım
console.log(user.shortName());