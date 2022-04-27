
function createGrid()
{
  let documentBody = document.body;

  const cells = document.createElement("div");
  cells.id = 'cells';
  cells.innerHTML = "<table id='cellsGrid'></table>";
  documentBody.insertBefore(cells, documentBody.firstChild);


  const gridSize = 16;
  const cellWidth = window.innerWidth/gridSize;
  const cellHeight = window.innerHeight/gridSize;
}


createGrid();
