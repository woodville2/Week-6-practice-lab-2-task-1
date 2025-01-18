"use strict";

const products = [
  {
    Name: "Orange Juice",
    category: "Juice",
    price: 3.99,
    available: true,
    image:
      "https://unsplash.com/photos/a-glass-of-orange-juice-sitting-on-top-of-a-book-kFRC5gPX4CY",
  },
  {
    Name: "Bacon",
    category: "Meat",
    price: 6.99,
    available: true,
    image:
      "https://www.istockphoto.com/photo/sizzling-bacon-frying-in-a-pan-gm472093755-32091588?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbacon&utm_medium=affiliate&utm_source=unsplash&utm_term=bacon%3A%3A%3A",
  },
  {
    Name: "Greek Yogurt",
    category: "Dairy",
    price: 4.99,
    available: false,
    image:
      "greek/ yogurthttps://unsplash.com/photos/red-and-white-ice-cream-on-clear-glass-container-l3lsro9TlYA.png",
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
  <img src= ${product.image}" class = "card-img-top" alt="${product.Name}">
  <div class="card-body">
    <h5 class="card-title">${product.Name}</h5>
    <p class="card-text">${product.category}</p>
    <p class="card-text">${product.price}</p>
    <p class="card-text">${available}</p>
  </div>
</div>`;
    document.getElementById("foodShopping").innerHTML += card;
  }
}
render(products);
