//-------------------------------------------//
const navBtn=document.querySelector(".nav_button")
const navUl=document.querySelector(".nav_ul")

navBtn.addEventListener("click",()=>{
    navUl.classList.toggle("show_nav")
    navBtn.classList.toggle("show_btn_green")
})
//-----===============SLIDESHOW=====================----//
//declarations
const preBtn=document.querySelector(".prev")
const nextBtn=document.querySelector(".next")

const dot1=document.querySelector("#dot1")
const dot2=document.querySelector("#dot2")
const dot3=document.querySelector("#dot3")
const dot4=document.querySelector("#dot4")

preBtn.addEventListener("click",()=>{
    plusSlides(-1)
})
nextBtn.addEventListener("click",()=>{
    plusSlides(1)
})
dot1.addEventListener("click",()=>{
    currentSlide(1)
})
dot2.addEventListener("click",()=>{
    currentSlide(2)
})
dot3.addEventListener("click",()=>{
    currentSlide(3)
})
dot4.addEventListener("click",()=>{
    currentSlide(4)
})

let slideIndex=1;
showSlides(slideIndex);
//perv/next controls
function plusSlides(n){
    showSlides(slideIndex += n);
}
//thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    let slides=document.querySelectorAll(".mySlides")
    let dots=document.querySelectorAll(".dot")
    console.log(slides)
    if(n>slides.length){
        slideIndex=1
    }
    if(n<1){
        slideIndex=slides.length
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
    for(let i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display="block";
    dots[slideIndex-1].className +=" active"
}