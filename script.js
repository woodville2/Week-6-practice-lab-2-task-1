"use strict";

const bands = [
  { Name: "Pink Floyd", Genre: "Rock", yearFormed: 1972, active: false },

  { Name: "The Who", Genre: "Rock", yearFormed: 1969, active: false },

  { Name: "Heart", Genre: "Rock", yearFormed: 1975, active: true },
];

function render(bands) {
  const container = document.getElementById("music");
  container.innerHTML = "";
  let backgroundColor;
  for (let i = 0; i < bands.length; i++) {
    const band = bands[i];

    if (band.active) {
      backgroundColor = "green";
    } else {
      backgroundColor = "red";
    }

    const card = `<div class="card" style="background-color: ${backgroundColor}"width: 22rem;">
  <ul class="list-group -flush - list-unstyled">
    <li class="list-group-item">${band.Name}</li>
    <li class="list-group-item">${band.Genre}</li>
    <li class="list-group-item"> ${band.yearFormed}</li>
    <li class = "active-true-false">${band.active}
  </ul>
</div>`;

    container.innerHTML += card;
  }
}
render(bands);
