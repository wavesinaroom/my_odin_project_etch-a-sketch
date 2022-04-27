
function createGrid()
{
  let documentBody = document.body;


  //Creates table frame
  const cellsDiv = document.createElement("div");
  cellsDiv.id = 'cells';
  cellsDiv.innerHTML = "<div id='cellsGrid'></div>";
  documentBody.appendChild(cellsDiv, documentBody.firstChild);

  //Sets table style

  let cellsGrid = document.getElementById("cellsGrid");
  const cellsNumber = 16;
  const cellsWidth = window.innerWidth/cellsNumber;
  const cellsHeight = window.innerHeight/cellsNumber;

  for (var i = 0; i <cellsNumber; i++) {
    let row = document.createElement('div');
    for (var j = 0; j < cellsNumber; j++) {
      let cell = document.createElement('div');
      cell.style.width = cellsWidth + "px";
      cell.style.height = cellsHeight + "px";
      row.appendChild(cell);
    }
    cellsGrid.appendChild(row);
  }
}

createGrid();
