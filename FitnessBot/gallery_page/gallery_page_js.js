// Designed by Uzman Arfan
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// slide Number is described in the images to navigate
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // adding variables and gathering element
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumbImage");
  let captionText = document.getElementById("caption");

  // all the images and description should change at the same time
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // changing the description
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
