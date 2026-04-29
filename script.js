const mockData = [
  {
    name: "Falcon 9",
    agency: "SpaceX",
    status: "Activo"
  },
  {
    name: "Artemis I",
    agency: "NASA",
    status: "Completado"
  },
  {
    name: "Starship",
    agency: "SpaceX",
    status: "En pruebas"
  }
];

function loadData() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  mockData.forEach(item => {
    const card = document.createElement("div");
    card.style.background = "#111827";
    card.style.padding = "15px";
    card.style.borderRadius = "10px";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Agencia: ${item.agency}</p>
      <p>Estado: ${item.status}</p>
    `;

    container.appendChild(card);
  });
}
