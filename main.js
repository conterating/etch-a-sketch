function createGrid(gridDimensions) {
  let container = document.querySelector(".container");
  for (let i = 0; i < gridDimensions; i++) {
    let column = document.createElement("div");
    column.classList.add("columns");
    column.style.height = 500 / gridDimensions + "px";
    for (let j = 0; j < gridDimensions; j++) {
      let row = document.createElement("div");
      row.classList.add("rows");
      row.style.width = 500 / gridDimensions + "px";
      row.style.height = column.style.height;
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

createGrid(16);
