var elements = document.querySelectorAll(".nav-item-child")
var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
var activeElements = document.querySelectorAll(".active")
console.log(activeElements)
activeElements.forEach((element)=>{
    element.classList.toggle("active");
})
console.log(fileName)
switch(fileName){
    case "index.html":
        document.getElementById("home").classList.toggle("active");
        break;
    case "contact.html":
        document.getElementById("contact").classList.toggle("active");
        break;
    case "about.html":
        document.getElementById("about").classList.toggle("active");
        break;
    case "download.html":
        document.getElementById("download").classList.toggle("active");
        break;
    case "products.html":
        document.getElementById("product").classList.toggle("active");
        document.getElementById("services").classList.toggle("active");
        break;
}