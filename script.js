const target = new Date("2026-04-30T10:08:00Z").getTime();

function update() {
  const now = Date.now();
  const diff = target - now;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("d").textContent = String(d).padStart(2,"0");
  document.getElementById("h").textContent = String(h).padStart(2,"0");
  document.getElementById("m").textContent = String(m).padStart(2,"0");
  document.getElementById("s").textContent = String(s).padStart(2,"0");
}

setInterval(update, 1000);
update();
