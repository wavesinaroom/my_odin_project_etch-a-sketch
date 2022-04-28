
function createGrid()
{
  let documentBody = document.body;


  //Creates table frame
  const cellsDiv = document.createElement("div");
  cellsDiv.id = 'cells';
  documentBody.appendChild(cellsDiv, documentBody.firstChild);

  //Sets table style
  const cellsNumber = 160;
  const cellsWidth = window.innerWidth/cellsNumber;
  const cellsHeight = window.innerHeight/cellsNumber;

  for (var i = 0; i <cellsNumber; i++) {
    let row = document.createElement('div');
    for (var j = 0; j < cellsNumber; j++) {
      let cell = document.createElement('div');
      cell.id = "cell";
      cell.style.width = cellsWidth + "px";
      cell.style.height = cellsHeight + "px";
      cell.addEventListener("mouseover", () => {cell.style.backgroundColor = "red"});
      row.appendChild(cell);
    }
    cellsDiv.appendChild(row);
  }
}

createGrid();
