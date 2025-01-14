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
  }
  const card = `<div class="card" style="background-color: ${backgroundColor}"width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${bands.Name}</li>
    <li class="list-group-item">${bands.Genre}</li>
    <li class="list-group-item"> ${bands.yearFormed}</li>
    <li class = "active-true-false">${bands.active}
  </ul>
</div>`;

  container.innerHTML += card;
}

render(bands);
