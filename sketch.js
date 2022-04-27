const cells = document.getElementById("cells");
const cell = document.createElement('div');
const gridSize = 16;

for(let i = 0; i <gridSize; ++i)
{
  cells.appendChild(cell.cloneNode(true));
}
