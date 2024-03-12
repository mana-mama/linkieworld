function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("click")
}

let slideIndex = 1;
    showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("vid-con-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";

    let vid_info = document.getElementsByClassName("vid-info");

    vid_info[0].textContent = slides[slideIndex-1].id
}