var hamburgerMenu = document.getElementsByClassName("burger");
console.log(hamburgerMenu)
hamburgerMenu[0].addEventListener("click",()=>{
    var menuBox = document.getElementsByClassName("menu-box");

    if(menuBox[0].classList.contains("active")){
        menuBox[0].classList.remove("active");
        menuBox[0].style.display="none";
    }else{
        menuBox[0].classList.add("active")
        menuBox[0].style.display="grid";
    }


})