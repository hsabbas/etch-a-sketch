const container = document.getElementById("container");

createBoard(container, 16, 16, 'blue');

function createBoard(container, rows, columns, color){
    let numOfCells = rows * columns;

    for(let i = 0; i < numOfCells; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.addEventListener("mouseenter", function(e) {
            e.target.style.background = color;
        })

        container.appendChild(cell);
    }
}