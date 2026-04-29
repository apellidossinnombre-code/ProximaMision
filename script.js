const targetDate = new Date("2026-04-30T10:08:00Z").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("min").innerText = String(min).padStart(2, "0");
  document.getElementById("sec").innerText = String(sec).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
