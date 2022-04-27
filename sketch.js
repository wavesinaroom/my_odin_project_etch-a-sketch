
function createGrid()
{
  let documentBody = document.body;


  //Creates table frame
  const cellsDiv = document.createElement("div");
  cellsDiv.id = 'cells';
  cellsDiv.innerHTML = "<table id='cellsGrid'></table>";
  documentBody.appendChild(cellsDiv, documentBody.firstChild);

  //Sets table style
  let cells = document.getElementById("cells");
  cells.style.display = "block";
  cells.style.width = window.innerWidth + "px";
  cells.style.heigt = window.innerHeight + "px";

  let cellsGrid = document.getElementById("cellsGrid");
  const cellsNumber = 16;

  for (var i = 0; i <cellsNumber; i++) {
    let row = document.createElement('tr');
    for (var j = 0; j < cellsNumber; j++) {
      let cell = document.createElement('td');
      row.appendChild(cell);
    }
    cellsGrid.appendChild(row);
  }
}

createGrid();
