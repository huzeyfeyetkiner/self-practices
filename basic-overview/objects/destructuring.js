

// Object Destructuring


let settings = {
    userName: "Huzeyfe",
    password: "123456",
    isActive: true,
    ip: "127.0.1.2",
    serverName: "yetkinerhuzeyfe@"
}

// destructuring ve yeniden isimlendirme
let {userName: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName);

// obje içindeki bazı bilgilerin çıkartılması

let {userName: user2, password:password2, isActive: isActive2, ...newSettings} = settings
console.log(newSettings);
console.log(settings);

// objenin destructuring ile kopyalanması

let settings2 = {...settings} // detructuring ile kopyalama işlemi yaptığımda objenin referans yolu değil elemanlarını kopyalayabiliyorum.
settings2.userName = "Degisen bilgi"   
console.log("settings",settings);      
console.log("settings2",settings2);


// HATALI KOPYALAMA
// let settings2 = settings
// settings2.userName = "Degisen bilgi"         objeler referans yoluyla kaydedildiği için bu şekilde bir kopyalama işlemi ana objeyi de etkiliyor.
// console.log("settings",settings);
// console.log("settings2",settings2);

