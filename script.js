const container = document.querySelector("#container");
const canvasDivs = [];

for (let i = 0; i < 255; i++) {
    let canvasDiv = document.createElement("div");

    canvasDiv.classList.add("canvas-div");
    canvasDiv.textContent = "a";

    canvasDivs.push(canvasDiv);
}

canvasDivs.forEach(div => {
    container.appendChild(div);
});