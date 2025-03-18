const container = document.querySelector("#container");
const rows = [];


let canvasSize = 5;



for (let i = 0; i < canvasSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < canvasSize; j++) {
        let square = document.createElement("div");
        square.classList.add("square");

        row.appendChild(square);
    }
    
    rows.push(row);
}

rows.forEach(row => {
    container.appendChild(row);
});