"use strict";
const myFood = [
  {
    Name: "Steak and Bake",
    cuisine: "American",
    location: "Houston Texas",
    rating: 5,
  },

  {
    Name: "Cool Scoops",
    cuisine: "Dessert",
    location: "Boise Idaho",
    rating: 3,
  },
];

function render(myFood) {
  const container = document.getElementById("food");
  container.innerHTML = "";
  for (let i = 0; i < myFood.length; i++) {
    const myFoods = myFood[i];
  }
}

const card = `<div class="card" style="background-color: ${backgroundColor}"width: 18rem;">
  <ul class="list-group -flush - list-unstyled">
    <li class="list-group-item">${myFood.Name}</li>
    <li class="list-group-item">${myFood.cuisine}</li>
    <li class="list-group-item">${myFood.location}</li>
    <li class = "active-true-false">${myFood.rating}
  </ul>
</div>`;

container.innerHTML += card;
render(myFood);
