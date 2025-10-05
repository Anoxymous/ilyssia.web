const images = document.querySelectorAll(".collage-image");
let current = 0;
let startX = 0;
let endX = 0;

function showImage(index) {
  images[current].classList.remove("active");
  current = (index + images.length) % images.length; // wrap around
  images[current].classList.add("active");
}

function showNextImage() {
  showImage(current + 1);
}

function showPreviousImage() {
  showImage(current - 1);
}

// Swipe detection
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (Math.abs(deltaX) > 50) { // threshold to avoid accidental swipes
    if (deltaX < 0) {
      showNextImage(); // swipe left
    } else {
      showPreviousImage(); // swipe right
    }
  }
});

setInterval(showNextImage, 15000); // 15 seconds
