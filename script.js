const container = document.querySelector("#container");
const rows = [];
const squares = [];

let canvasSize = 16;

for (let i = 0; i < canvasSize; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < canvasSize; j++) {
    let square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "blue";
      console.log("cc");
    });

    row.appendChild(square);
  }

  rows.push(row);
}

//render rows on screen
rows.forEach((row) => {
  container.appendChild(row);
});
