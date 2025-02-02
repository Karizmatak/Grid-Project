
const gridContainer = document.getElementById("grid");

function createGrid(gridSize){

  gridContainer.innerHTML = ''

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  for(i = 0;i< gridSize * gridSize; i++){
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    gridContainer.appendChild(cell)
  }
}

function myGrid(){
  let gridSize = prompt("Write a number between 1 and 100")
  gridSize = parseInt(gridSize)

  if(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
    alert("Please enter a valid number");
    return;
  }

  createGrid(gridSize)
}

createGrid(16)