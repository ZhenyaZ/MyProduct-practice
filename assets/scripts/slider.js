let sliderIndex = 1;
function nextSlide(){
    ShowSlide(sliderIndex+=1)
}
function previousSlider(){
    ShowSlide(sliderIndex-=1)
}
function currentSlider(){
    ShowSlide(sliderIndex);
}
function ShowSlide(n){
    let slides = document.getElementsByClassName("slider-item")
    if(n > slides.length){
        sliderIndex = 1;
    }
    if(n < slides.length){
        sliderIndex = slides.length;
    }
    for(let item of slides){
        item.style.display="none";
    }
    slides[sliderIndex-1].style.display="flex";
}
window.addEventListener("DOMContentLoaded",currentSlider)
var nextBtn = document.querySelector(".next");
var previousBtn = document.querySelector(".previous");
nextBtn.addEventListener("click",nextSlide);
previousBtn.addEventListener("click",previousSlider);

