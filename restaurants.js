"use strict";
const myFood = [
  {
    Name: "Steak and Bake",
    cuisine: "American",
    location: "Houston, Texas",
    rating: 5,
  },

  {
    Name: "Cool Scoops",
    cuisine: "Dessert",
    location: "Boise, Idaho",
    rating: 3,
  },
];

function render(myFood) {
  let card = "";
  for (let i = 0; i < myFood.length; i++) {
    const myFoods = myFood[i];

    card = `<div class="card" style= "color:blue; width: 18rem justify-right;">
  <ul class="list-group -flush - list-unstyled">
    <li class="list-group-item">${myFoods.Name}</li>
    <li class="list-group-item">${myFoods.cuisine}</li>
    <li class="list-group-item">${myFoods.location}</li>
    <li class = "active-true-false"> Rating  ${myFoods.rating}
  </ul>
</div>`;
    document.getElementById("food").innerHTML += card;
  }
}

render(myFood);
