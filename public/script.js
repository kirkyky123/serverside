let selectedCraft = null;

const showCrafts = async () => {
  const craftsJSON = await getJSON();

  if (craftsJSON == "") return;

  let craftsDiv = document.getElementById("crafts-container");

  craftsJSON.forEach((craft) => {
    let section = document.createElement("div");
    section.classList.add("craft-item");
    craftsDiv.append(section);

    let img = document.createElement("img");
    section.append(img);
    img.src = "http://localhost:3000/images/" + craft.image;
    img.alt = craft.name;
    img.onclick = () => showModal(craft);
  });
};

const showModal = (craft) => {
  selectedCraft = craft;
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <div class="modal-left">
      <img src="http://localhost:3000/images/${craft.image}" alt="${craft.name}">
    </div>
    <div class="modal-right">
      <span class="close">&times;</span>
      <h2>${craft.name}</h2>
      <p>${craft.description}</p>
      <h3>Supplies:</h3>
      <ul>
        ${craft.supplies.map((supply) => `<li>${supply}</li>`).join("")}
      </ul>
    </div>
  `;
  const closeModal = () => {
    modal.style.display = "none";
  };
  const closeBtn = modalContent.querySelector(".close");
  closeBtn.onclick = closeModal;
  window.onclick = (event) => {
    if (event.target == modal) {
      closeModal();
    }
  };
};

const getJSON = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/crafts");
    let craftsJSON = await response.json();
    return craftsJSON;
  } catch (error) {
    console.log(error);
    return "";
  }
};

window.onload = () => {
  showCrafts();
};