let colorMode = "normal";
let color = "#000000";
let shading = false;
const board = document.getElementById("board");
const normalButton = document.getElementById("normal-btn");
const randomButton = document.getElementById("random-btn");
const shadingButton = document.getElementById("shading-btn");
const colorPicker = document.getElementById("colorPicker");
document.getElementById("clear-btn").addEventListener("click", clear);
document.getElementById("reset-btn").addEventListener("click", reset);
initialize();

function createBoard(gridSize){
    let numOfCells = gridSize * gridSize;
    let cellSize = 480 / gridSize;

    for(let i = 0; i < numOfCells; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.addEventListener("mouseenter", function(e) {
            colorCell(e);
        })

        board.appendChild(cell);
    }
}

function initialize() {
    normalButton.addEventListener("click", function(e) {
        colorMode = "normal";
        normalButton.className = "selected";
        randomButton.className = "";
    });

    shadingButton.addEventListener("click", function() {
        shading = !shading;
        if(shading){
            shadingButton.className = "selected";
        } else {
            shadingButton.className = "";
        }
    })

    randomButton.addEventListener("click", function(){
        colorMode = "random";
        normalButton.className = "";
        randomButton.className = "selected";
    })

    colorPicker.addEventListener("slChange", changeColor)

    createBoard(16);
}

function reset() {
    let size = prompt("How many squares per side?");
    board.innerHTML = "";
    createBoard(size);
}

function clear(){
    cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.background = "none";
        cell.style.opacity = 0;
    });
}

function changeColor(e) {
    color = e.target.value;
}

function randomRGBValue(){
    return Math.ceil(Math.random() * 255);
}

function colorCell(e){
    let cell = e.target;

    if(shading){
        cell.style.opacity = `${Number(cell.style.opacity) + 0.1}`;
    } else {
        cell.style.opacity = "1";
    }

    if(colorMode == "normal") {
        cell.style.backgroundColor = color;
    } else {
        cell.style.backgroundColor = `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
    }
}