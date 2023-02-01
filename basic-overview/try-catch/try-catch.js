



let arrayList;


try{ //hata olmadığı taktirde çalışacak kod bloğu 
    arrayList.forEach((item) => console.log(item))
}catch(err){ // hata olduğunda çalışacak kod bloğu
    console.log("Error:",err);
    arrayList = [1,2,3]
    arrayList.forEach(item => console.log(item))
}finally{ // hata olsun ya da olmasın yukarıdaki işlemler bittikten sonra çalışacak kod bloğu
    console.log("This code block will work independently from the error");
}