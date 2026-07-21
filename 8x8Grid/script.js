const grid = document.getElementById("grid");

const rows = 8;
const cols = 8;
const cells = [];

let currentRow = 0;
let currentCol = 0;

// Create the grid
for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    cells.push(cell);
}

// Function to update active cell
function updateGrid() {
    // Remove black color from all cells
    cells.forEach(cell => cell.classList.remove("active"));

    // Make current cell black
    const index = currentRow * cols + currentCol;
    cells[index].classList.add("active");
}

// Initial position
updateGrid();

// Listen for arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (currentRow > 0) currentRow--;
            break;

        case "ArrowDown":
            if (currentRow < rows - 1) currentRow++;
            break;

        case "ArrowLeft":
            if (currentCol > 0) currentCol--;
            break;

        case "ArrowRight":
            if (currentCol < cols - 1) currentCol++;
            break;

        default:
            return;
    }

    updateGrid();
});