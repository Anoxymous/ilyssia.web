const images = document.querySelectorAll(".collage-image");
let current = 0;

function showNextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

setInterval(showNextImage, 15000); // 15 seconds