const list = document.getElementById("foodList");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("close");
const search = document.getElementById("search");

// render foods
function render(data) {
  list.innerHTML = "";
  data.forEach(food => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${food.img}">
      <div class="info">
        <h4>${food.name}</h4>
        <p class="price">₱${food.price}</p>
      </div>
    `;

    div.onclick = () => openModal(food);

    list.appendChild(div);
  });
}

function openModal(food) {
  modal.classList.remove("hidden");
  modalBody.innerHTML = `
    <h2>${food.name}</h2>
    <img src="${food.img}" style="width:100%; border-radius:10px;">
    <p>${food.desc}</p>
    <h3>₱${food.price}</h3>
    <button>Add to Cart</button>
  `;
}

closeBtn.onclick = () => modal.classList.add("hidden");

// search function
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = foods.filter(f =>
    f.name.toLowerCase().includes(value)
  );
  render(filtered);
});

// init
render(foods);
