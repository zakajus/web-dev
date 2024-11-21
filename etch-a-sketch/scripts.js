const square = document.querySelector(".square");
const inputBox = document.querySelector(".input-box");

function getRandomColor(alpha) {
    return `rgba(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${alpha})`    
}

function generateGrid(gridDimension) {
    // Clear grid
    while (square.firstChild) {
        square.removeChild(square.firstChild);
    }

    for (let i = 0; i < gridDimension; ++i) {
        const box = document.createElement("div");
        box.classList.add("gridbox");

        for (let j = 0; j < gridDimension; ++j) {
            const box2 = document.createElement("div");
            box2.classList.add("gridbox");
            
            let alpha = 1;

            box2.addEventListener("mouseover", () => {
                alpha -= 0.1;
                box2.style.background = getRandomColor(alpha);
            })

            box.appendChild(box2)
        }

        square.appendChild(box)
    }
}

function getGridSize() {
    gridSize = parseInt(inputBox.value);
    if (gridSize > 100 || gridSize < 1) {
        alert("Grid size must be between 1 and 100!");
    } else {
        console.log(gridSize);
        return gridSize;
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let gridSize = getGridSize();
    if (gridSize) {
        generateGrid(gridSize);
    }
})