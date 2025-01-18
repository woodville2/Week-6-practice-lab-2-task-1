"use strict";

const products = [
  {
    Name: "Orange Juice",
    category: "Juice",
    price: 3.99,
    available: true,
    image:
      "https://images.unsplash.com/photo-1650460069032-3c410224fe55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    Name: "Bacon",
    category: "Meat",
    price: 6.99,
    available: true,
    image:
      "https://media.istockphoto.com/id/472093755/photo/sizzling-bacon-frying-in-a-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=o3eEyJv3w9YDlvjugTSfBM4O6yKv5rNBvSzE1NAva8o=",
  },
  {
    Name: "Greek Yogurt",
    category: "Dairy",
    price: 4.99,
    available: false,
    image:
      "https://images.unsplash.com/photo-1618798513386-fedeb5c30d39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZWslMjB5b2d1cnR8ZW58MHx8MHx8fDA%3D",
  },
];

function render(products) {
  for (let i = 0; i < products.length; i++) {
    let card = "";
    let available = "";
    const product = products[i];

    if (product.available) {
      available = "Product available";
    } else {
      available = "Product not available";
    }

    card = `<div class="card" style="width: 18rem;">
  <img src= "${product.image}" class = "card-img-top" alt="${product.Name}">
  <div class="card-body">
    <h5 class="card-title">${product.Name}</h5>
    <p class="card-text"> Category: ${product.category}</p>
    <p class="card-text">Price: ${product.price}</p>
    <p class="card-text">Availability: ${available}</p>
  </div>
</div>`;
    document.getElementById("foodShopping").innerHTML += card;
  }
}
render(products);
