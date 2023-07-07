const board = document.getElementById("board");
const container = document.getElementById("container");
const cell = document.getElementsByClassName("cell");
const cellist = [...document.querySelectorAll(".cell")];
const button = document.getElementById("button");
const size = 960;
var userNum = 16;

// Adding squares to the board
// for(i=0; i < (userNum*userNum); i++) {
//     var b = document.createElement('div');
//     b.className = "cell";
//     document.getElementById("board").appendChild(b);
// }

function makeGrid(userNum) {
    for (col = 0; col < userNum; col++) {
        var column = document.createElement("div");
        column.classList.add("column");

        for (row = 0; row < userNum; row++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", function() {
                cell.classList.add("newColor");
            })
            column.appendChild(cell);
        }
      board.appendChild(column);
    }
    [...document.querySelectorAll(".cell")].forEach(function(s) {
        s.addEventListener("mouseover", function() {
            s.classList.add("newCell");
        });
    })
  }

makeGrid(userNum);

// Taking user input and parsing int
button.addEventListener("click", function() {
    while (true) {
        var i = prompt("Number between 1 and 100: ");
        userNum = parseInt(i);
    
        if(userNum > 0 && userNum <= 100){
            board.innerHTML = "";
            makeGrid(userNum);
            break;
        }
        else continue;    
    }
})

// Resetting colors of grid
// button.onclick = function() {
//     for (var i = 0; i < square.length; i++){
//         square[i].style.backgroundColor = "white";
//     }
// }