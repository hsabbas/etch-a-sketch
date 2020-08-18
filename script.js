let colorMode = "black";
const board = document.getElementById("board");
const shadingButton = document.getElementById("shading-btn");
initialize();

function createBoard(gridSize){
    let numOfCells = gridSize * gridSize;
    let cellSize = 480 / gridSize;

    for(let i = 0; i < numOfCells; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.addEventListener("mouseover", function(e) {
            color(e, board);
        })

        board.appendChild(cell);
    }
}

function initialize() {

    document.getElementById("black-btn").addEventListener("click", function() {
        colorMode = "black";
        shadingButton.style.visibility = "visible";
    });

    shadingButton.addEventListener("click", function() {
        colorMode = "shading";
    })

    document.getElementById("random-btn").addEventListener("click", function(){
        colorMode = "random";
        shadingButton.style.visibility = "hidden";
    })

    document.getElementById("reset-btn").addEventListener("click", function(){
        reset();
    })

    createBoard(16);
}

function reset() {
    let size = prompt("How many squares per side?");
    board.innerHTML = "";
    createBoard(size);
}

function randomRGBValue(){
    return Math.ceil(Math.random() * 255);
}

function color(e){
    let cell = e.target;

    if(colorMode == "random") {
        cell.style.backgroundColor = `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
        cell.style.opacity = "1";
        return;
    }

    cell.style.backgroundColor = "black";
    if(colorMode == "shading"){
        cell.style.opacity = `${Number(cell.style.opacity) + 0.1}`;
    } else {
        cell.style.opacity = "1";
    }
}