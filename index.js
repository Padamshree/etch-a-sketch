// Random Color Array
let colorArray = [];
for(i=0; i<4000; i++) {
    let rgb = [];
    for (j=0; j<3; j++) {
        rgb.push(Math.floor(Math.random() * 255));
    }
    colorArray.push(rgb);
}

// Create Grid
let GRID_SIZE = 16;

createGrid = (gridSize) => {
    const mainContainer = document.querySelector("#main-grid");

    for (i=0; i<(gridSize*gridSize); i++) {
        let newDiv = document.createElement("div");
        mainContainer.appendChild(newDiv).className = "cell";
    }

    mainContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    mainContainer.style.gridTemplatRows = `repeat(${gridSize}, auto)`;
}

createGrid(GRID_SIZE);

// Reset To Initial State
reset = () => {
    let inputSize = prompt('Please Enter Grid Size (16-95)')
    let newGridSize = parseInt(inputSize, 10);
    if (newGridSize >=16 && newGridSize <= 95) {
        for (i=0;i<(GRID_SIZE*GRID_SIZE); i++) {
            document.querySelector('.cell').remove();
        }
        createGrid(newGridSize);
    }
}

// Clear Grid
clear = () => {
    resetState = Array.from(document.querySelectorAll('#main-grid div'))
    resetState.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}

// Color Away

document.getElementById('main-grid').addEventListener("mouseover", (e) => {
    let gridCells = Array.from(document.querySelectorAll('#main-grid div'));
    let idx = gridCells.findIndex((cell) => {return cell === e.target});
    console.log(idx);
    let targetCell = gridCells[idx];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    targetCell.style.backgroundColor = 'rgb(' + randColor.join(',') + ')';
});

document.querySelector('.reset-btn').addEventListener('click', reset);
document.querySelector('.clear-btn').addEventListener('click', clear);