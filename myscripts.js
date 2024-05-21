const defaultGridSize = 16;
setSquareSize(defaultGridSize);
setTimeout(getSquareSize, 1000);
function getSquareSize() {
    let userSquareInput = prompt("Type in the size of the grid (ex: 20 for a 20 x 20 grid)");
    while(!(Number.isInteger(userSquareInput) || userSquareInput < 0 || userSquareInput <= 100)) {
        userSquareInput = prompt("Enter only numbers greater than 0 and maximum 100");
    }
    setSquareSize(userSquareInput);

}

function setSquareSize(size) {
    const squareContainer = document.getElementById("square-container");
    squareContainer.textContent = "";
    squareContainer.style.display = "flex";
    squareContainer.style.flexWrap = "wrap";
    squareContainer.style.width = "auto%";
    squareContainer.style.height = "auto%";


    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.height = `${100 / size}%`;
        newDiv.style.flex = `0 0 ${100 / size}%`;
        newDiv.addEventListener("mouseover", function () {
            newDiv.style.backgroundColor = getRandomRGBColor();
        })
        squareContainer.appendChild(newDiv);
    }
}

function getRandomRGBColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r}, ${g}, ${b})`;}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}