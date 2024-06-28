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
      row.style.border = "0.5px solid black";
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

createGrid(16);

function identifyWhenHovered() {
  let container = document.querySelector(".container");
  container.addEventListener("mouseover", function (e) {
    let divBox = e.target;
    console.log(divBox.getAttribute("class"));
    if (divBox.getAttribute("class") == "container") {
      console.log("container");
    } else {
      divBox.style.backgroundColor = getRandomColor();
    }
  });
}

function getRandomColor() {
  let hexCodes = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * 16)];
  }
  return color;
}

function requestSizeChange() {
  let header = document.createElement("h1");
  header.textContent = "Etch A Sketch";
  let button = document.createElement("button");
  const buttonContainer = document.querySelector(".button-container");
  const gridContainer = document.querySelector(".grid-container");
  button.textContent = "Change Grid Shape";
  button.classList.add("grid-button");
  buttonContainer.appendChild(header);
  buttonContainer.appendChild(button);
  gridContainer.appendChild(buttonContainer);
}

function gridButtonClicked() {
  let button = document.querySelector(".grid-button");
  let container = document.querySelector(".container");
  button.addEventListener("click", (e) => {
    let userGridSize = prompt("Enter a grid size: (Max Size = 100)");
    if (userGridSize > 100) {
      alert("Grid Size is too big, please choose a number under 100");
    } else {
      container.innerHTML = "";
      createGrid(userGridSize);
    }
  });
}

function playGame() {
  identifyWhenHovered();
  requestSizeChange();
  gridButtonClicked();
}

playGame();
