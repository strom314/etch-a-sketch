const container = document.querySelector("#container");
const restart = document.querySelector("#restart");

const rowsInput = document.querySelector("#rows");

let rows = [];
let squares = [];

let canvasSize = 16;

generateGrid(canvasSize);
renderRows();

restart.addEventListener("click", () => {
  canvasSize = Number(rowsInput.value);
  if (canvasSize > 100) {
    canvasSize = 100;
    rowsInput.value = 100;
  }
  rows = [];
  squares = [];

  clearGrid();

  generateGrid(canvasSize);
  renderRows();

  console.log(canvasSize);
});


function clearGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}


function generateGrid(canvasSize) {
  for (let i = 0; i < canvasSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < canvasSize; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseenter", (e) => {
        let color = getRandomColor();
        e.target.style.backgroundColor = color;
      });

      row.appendChild(square);
    }

    rows.push(row);
  }

}

function renderRows() {
  rows.forEach((row) => {
    container.appendChild(row);
  });
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgba(${red},${green},${blue},0.5)`;

  return color;
}
