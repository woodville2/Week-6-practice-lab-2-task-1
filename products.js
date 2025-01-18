"use strict";

const products = [
  { Name: "Orange Juice", category: "Juice", Price: 3.99, available: true },
  { Name: "Bacon", category: "Meat", price: 6.99, available: true },
  { Name: "Greek Yogurt", category: "Dairy", price: 4.99, available: false },
];

function render(products) {
  for (let i = 0; i < products.length; index++) {
    let available = "";
    const product = products[i];

    if (product.available) {
      available = "Product available";
    } else {
      available = "Product not available";
    }
  }
}
card = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.Name}</h5>
    <p class="card-text">${products.category}</p>
    <p class="card-text">${products.price}</p>
    <p class="card-text">${available}</p>
  </div>
</div>`;
document.getElementById("foodShopping").innerHTML += card;

render(products);
