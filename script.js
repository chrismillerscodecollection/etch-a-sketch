function checkForValidInput (number) {
    return isValid = (!isNaN(number) && number >= 1 && number < 101 ) ? true : false;
}

function getBoardSize() {
    let userInput;
    let number;
    let validResponse;

    do {
        userInput = prompt("Please enter a number between 1 and 100:");
        number = Number(userInput);
        validResponse = checkForValidInput(number);
    } while (!validResponse);

    if (validResponse) {
        return number;
    }
}


function calculateOptimalSquareSize(boardSize, boardWidth, boardHeight) {
    const maxWidth = boardWidth / boardSize;
    const maxHeight = boardHeight / boardSize;

    return Math.min(maxWidth, maxHeight);
}

function createBoard(boardSize) {
    let board = document.querySelector(".board");
    let totalSquares = boardSize ** 2;

    for (let i = 0; i < totalSquares; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        board.appendChild(newDiv, board);
    }

}

function deleteSquares() {
    let squares = document.querySelectorAll(".grid-square");
    squares.forEach(el => {
        el.remove();
    });
}

function resetBoard() {
    let resetButton = document.querySelectorAll(".reset");
    resetButton.forEach( (el) => {
        el.remove()
    });
    deleteSquares();
    initializeBoard();
}

function initializeBoard() {
    let boardSize = getBoardSize();
    createBoard(boardSize);

    let squareSize = calculateOptimalSquareSize(boardSize, 800, 800).toString();
    let squares = document.querySelectorAll(".grid-square");

    squares.forEach(el => {
        el.style.width = `${squareSize}px`;
        el.style.height = `${squareSize}px`;
    });


    squares.forEach(el => {
        el.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
            console.log("Event registered");
        });
    });

    let buttonArea = document.querySelector(".button-area");
    let newButton = document.createElement("button");
 
    newButton.classList.add("reset");
    newButton.type = "button"
    newButton.textContent = "Reset";
    buttonArea.appendChild(newButton, buttonArea);
 
    let resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {resetBoard();});
}

initializeBoard();