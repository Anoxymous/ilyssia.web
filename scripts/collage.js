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

function swipeStart(eventX)
{
  startX = eventX;	
}

function swipeEnd(eventX)
{
	endX = eventX;
  const deltaX = endX - startX;

  if (Math.abs(deltaX) > 50) { // threshold to avoid accidental swipes
    if (deltaX < 0) {
      showNextImage(); // swipe left
    } else {
      showPreviousImage(); // swipe right
    }
  }
}


const el = document.getElementById("collage");

// Swipe detection
el.addEventListener("touchstart", (e) => { swipeStart(e.touches[0].clientX); });
el.addEventListener("mousedown", (e) => { swipeStart(e.clientX); });

el.addEventListener("touchend", (e) => { swipeEnd(e.changedTouches[0].clientX); });
el.addEventListener("mouseup", (e) => { swipeEnd(e.clientX); });
el.addEventListener("mouseout", (e) => { swipeEnd(e.clientX); });
 

setInterval(showNextImage, 15000); // 15 seconds
