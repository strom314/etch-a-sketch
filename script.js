const container = document.querySelector("#container");
const canvasDivs = [];

for (let i = 0; i < 16; i++) {
    let canvasDiv = document.createElement("div");

    canvasDiv.style.backgroundColor = "blue";
    canvasDiv.classList = "canvas-square";

    canvasDivs.push(canvasDiv);
}

canvasDivs.forEach(div => {
    container.appendChild(div);
});