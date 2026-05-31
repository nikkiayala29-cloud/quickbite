let cart = [];
let currentData = foods;

const list = document.getElementById("foodList");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function render(data) {
  list.innerHTML = "";
  data.forEach(food => {
    list.innerHTML += `
      <div class="card">
        <img src="${food.img}">
        <div class="info">
          <h4>${food.name}</h4>
          <p class="price">₱${food.price}</p>
          <button class="add" onclick="addToCart(${food.id})">Add</button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = foods.find(f => f.id === id);
  cart.push(item);
  document.getElementById("cartCount").innerText = cart.length;
}

function openCart() {
  document.getElementById("cartModal").classList.remove("hidden");

  let total = 0;

  document.getElementById("cartItems").innerHTML = cart.map(c => {
    total += c.price;
    return `<p>${c.name} - ₱${c.price}</p>`;
  }).join("");

  document.getElementById("total").innerText = "Total: ₱" + total;
}

function closeCart() {
  document.getElementById("cartModal").classList.add("hidden");
}

function checkout() {
  document.getElementById("checkoutModal").classList.remove("hidden");
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.add("hidden");
  cart = [];
  document.getElementById("cartCount").innerText = 0;
}

function filterCat(cat) {
  render(foods.filter(f => f.category === cat));
}

function showAll() {
  render(foods);
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  render(foods.filter(f => f.name.toLowerCase().includes(val)));
});

render(foods);
