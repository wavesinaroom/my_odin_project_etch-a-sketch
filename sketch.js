let documentBody = document.body;


function createCells(cellsNumber)
{
  cellsDiv = document.createElement("div");
  cellsDiv.id = 'cells';
  documentBody.appendChild(cellsDiv);

  //Sets table style
  let cellsWidth = window.innerWidth/cellsNumber;
  let cellsHeight = window.innerHeight/cellsNumber;

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

function setUpGrid()
{
  let cellsDiv = document.getElementById("cells");
  //if there's a grid and create one otherwise just create one
  if(cellsDiv == null)
  {
    const buttonHolder = document.createElement("div");
    buttonHolder.id = 'buttonHolder';
    documentBody.appendChild(buttonHolder);

    //Creates button
    const promptButton = document.createElement("button");
    promptButton.id = 'promptButton';
    promptButton.innerText = "Change cells number";
    promptButton.addEventListener("click", setUpGrid);
    buttonHolder.appendChild(promptButton);
    createCells(prompt("Please enter a positive number up to 100"));
    //Creates button holder

    //Creates table frame
  }else{
    alert("There's a grid in there");
    cells.remove();
    createCells(prompt("Please enter a positive number up to 100"));
  }
}

setUpGrid();
