const container = document.getElementById("restaurants");
const modal = document.getElementById("modal");
const foodDetails = document.getElementById("foodDetails");
const closeBtn = document.getElementById("close");

// DISPLAY RESTAURANTS
restaurants.forEach((r, index) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${r.name}</h3>
    <p>${r.food.length} items</p>
  `;

  div.onclick = () => showFoods(index);

  container.appendChild(div);
});

function showFoods(index) {
  modal.classList.remove("hidden");

  foodDetails.innerHTML = restaurants[index].food.map(f => `
    <div class="card">
      <img src="${f.img}" />
      <h3>${f.name}</h3>
      <p>₱${f.price}</p>
    </div>
  `).join("");
}

// CLOSE MODAL
closeBtn.onclick = () => {
  modal.classList.add("hidden");
};
