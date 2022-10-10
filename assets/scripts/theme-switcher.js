var light = document.getElementById("light");
var mainStyle = document.getElementsByClassName("mainStyle");
var switcher = document.querySelectorAll("#switcher");
switcher.forEach(el=>{
    el.addEventListener("click", () => {
        if (!el.classList.contains("switcher-active")) {
            el.classList.add("switcher-active")
            if (mainStyle[0].attributes[1].nodeValue == "./assets/style/index/light.css") {
                mainStyle[0].attributes[1].nodeValue = "./assets/style/index/dark.css"
            } else {
                mainStyle[0].attributes[1].nodeValue = "./assets/style/index/dark.css"
            }
        } else {
            el.classList.remove("switcher-active")
            if (mainStyle[0].attributes[1].nodeValue == "./assets/style/index/dark.css") {
                mainStyle[0].attributes[1].nodeValue = "./assets/style/index/light.css"
            } else {
                mainStyle[0].attributes[1].nodeValue = "./assets/style/index/dark.css"
            }
        }
    
    })
})
