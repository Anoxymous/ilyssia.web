const countdownEl = document.getElementById("hero-countdown");
const weddingDate = new Date("2026-09-26T15:30:00+10:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "It's Wedding Time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `${days} days to go`;
}

updateCountdown();
setInterval(updateCountdown, 86400000); // Update daily