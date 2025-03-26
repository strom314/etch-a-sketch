const container = document.querySelector("#container");
const restart = document.querySelector("#restart");

const rowsInput = document.querySelector("#rows");
const columnsInput = document.querySelector("#columns");

let rows = [];
let squares = [];

let canvasSize = 16;

generateGrid(canvasSize);
renderRows();

restart.addEventListener("click", () => {
  canvasSize = Number(rowsInput.value);
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
        e.target.style.backgroundColor = getRandomColor();
        console.log("cc");
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
  const hex = "1234567890ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
