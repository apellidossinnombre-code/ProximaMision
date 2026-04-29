document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  // Datos de ejemplo (luego los sustituimos por los reales)
  const lanzamientos = [
    {
      nombre: "Falcon 9 – Starlink",
      fecha: "2026-05-12",
      agencia: "SpaceX"
    },
    {
      nombre: "Ariane 6 – Test Flight",
      fecha: "2026-06-01",
      agencia: "ESA"
    }
  ];

  lanzamientos.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.nombre}</h3>
      <p><strong>Fecha:</strong> ${item.fecha}</p>
      <p><strong>Agencia:</strong> ${item.agencia}</p>
    `;
    container.appendChild(card);
  });
});
