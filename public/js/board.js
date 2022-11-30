var board = [[0,1,0,0,7,8,0,0,0],
[0,0,0,0,0,9,0,0,5],
[9,2,8,0,0,1,0,0,0],
[0,0,9,6,0,3,0,2,7],
[8,0,0,0,0,0,0,0,0],
[6,0,0,0,0,0,5,3,1],
[1,0,7,0,0,0,4,9,6],
[3,0,0,0,4,5,2,0,0],
[0,0,0,1,0,0,0,5,0]];

function createBoard() {
  for(i=0; i<board.length; i++) {
    const row = document.createElement("div")
    for(j=0; j<board[0].length; j++) {
      let position = [j, i];
      if(board[j][i] == 0) {
        const newInput = document.createElement("input");
        newInput.maxLength = 1;
        newInput.setAttribute("id", "setid");
        newInput.setAttribute("class", "tile");
        newInput.addEventListener("input", () => {
          if(valid(board, parseInt(newInput.value), position)) {
            newInput.style.color = "black";
          } else {
            newInput.style.color = "#ff0000";
          }
        })
        row.appendChild(newInput);
      } else {
        const newDiv = document.createElement("tile");
        newDiv.setAttribute("id", "setid");
        newDiv.setAttribute("class", "tile");
        newDiv.innerHTML=board[j][i];
        row.appendChild(newDiv);
      }
    }
    boardElem = document.getElementById("sudokuBoard");
    boardElem.appendChild(row);
  }
  setId();
};

function userBoard(board) {
  resetBoard();
  for(let i=0; i<board.length; i++) {
    const row = document.createElement("div")
    for(let j=0; j<board[0].length; j++) {
      const userInput = document.createElement("input");
      userInput.maxLength = 1;
      userInput.setAttribute("id", "setid");
      userInput.setAttribute("class", "tile");
      userInput.addEventListener("input", () => {
        board[j][i] = parseInt(userInput.value);
      })
      row.appendChild(userInput);
    }
    boardElem = document.getElementById("sudokuBoard");
    boardElem.appendChild(row);
  }
  setId();
  
}

function solve() {
  let find = find_empty(board)
  if (!find) {
    return true
  } else {
    var [row, col] = find;
  }
  for (let i=1; i<10; i++) {
    if(valid(board, i, [row, col])) {
      board[row][col] = i;
      if (solve()) {
        return true
      }
      board[row][col] = 0;
    }
  }
  return false;
};

function valid(board, number, position) {
  // check row
  for (i=0; i<board[0].length; i++) {
    if (board[position[0]][i] == number && position[1] != i) {
      return false
    }
  };
  // check column
  for (let i=0; i<board.length; i++) {
    if (board[i][position[1]] == number && position[0] != i) {
      return false
    }
  };
  // check 3 by 3
  let box_x = Math.floor(position[1] / 3);
  let box_y = Math.floor(position[0] / 3);
  for (i=box_y*3; i<box_y*3+3; i++) {
    for (j=box_x*3; j<box_x*3+3; j++) {
      if (board[i][j] == number && [i, j] != position) {
        return false
      }
    }
  }
  return true
};

function find_empty(board) {
  for (i=0; i<board.length; i++ ){
    for (j=0; j<board[0].length; j++) {
      if (board[i][j] == 0) {
        return [i, j]
      }
    }
  }
  return null
};

function resetBoard() {
  for(let i of board) {
    i.fill(0);
  }
}

function clearPage() {
  let elem = document.getElementById("sudokuBoard");
  elem.innerHTML = '';
}

function setId() {
  for (let i=0; i<81; i++) {
    document.getElementById("setid").setAttribute("id", `${i}`)
  }
};