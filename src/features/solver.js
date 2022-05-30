import { arrayUpTo, removeVal } from './utils';

export default (board) => {
  // Need to be here for the sake of sharing the scope.
  // Ideally, the board should be a Class with the board member, operating via get/setters
  const givens = board.map(val => {
    if (val) {
      return true;
    }
    return false;
  });


  function getSpot(x, y) {
    const val = Number(board[y * 9 + x]);
    return val > 0 ? val : false;
  }
  function setSpot(x, y, val) {
    if ((x > 8) || (y > 8)) {
      return false;
    }
    if (givens[y * 9 + x]) {
      console.info('caught writing to a given')
      return false;
    }
    board[y * 9 + x] = val;
  }

  const isGiven = (x, y) => {
    if (givens[y * 9 + x]) {
      return true;
    }
    return false;
  }
  ////////////////////////////////////////
  // Using a point, check it's limitations, the point's row, col and containing box. 
  const checkBox = (x, y) => {
    // Identify box with coordinates that specify a point.
    const xBox = Math.floor(x / 3);
    const yBox = Math.floor(y / 3);
    let remaining = arrayUpTo(9);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // console.log('inspecting x:',i + xBox * 3, ' y:', j + yBox * 3)
        remaining = removeVal(remaining, getSpot(i + xBox * 3, j + yBox * 3));
        // console.log(remaining)
        if (!remaining) {
          // console.log(`${xBox}, ${yBox}: FAIL X`);
          return false;
        }
      }
    }
    // console.log(`${xBox}, ${yBox}: PASS √`);
    return true;
  }

  const checkRow = (y) => {
    let remaining = arrayUpTo(9);
    for (let x = 0; x < 9; x++) {
      remaining = removeVal(remaining, getSpot(x, y));
      // console.log(remaining)
      if (!remaining) {
        // console.log(`Row-${y} @ x-${x}: FAIL X`);
        return false;
      }
    }
    // console.log(`Row-${y}: PASS √`);
    return true;
  }


  const checkCol = (x) => {
    let remaining = arrayUpTo(9);
    for (let y = 0; y < 9; y++) {
      remaining = removeVal(remaining, getSpot(x, y));
      // console.log(remaining)
      if (!remaining) {
        // console.log(`Row-${x} @ y-${y}: FAIL X`);
        return false;
      }
    }

    // console.log(`Col-${x}: PASS √`);
    return true;

  }

  const checkSpot = (x, y) => {
    return checkRow(x, y) && checkCol(x, y) && checkBox(x, y);
  }

  const checkBoard = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (0 === ((i + 1) % 3) &&
          0 === ((j + 1) % 3) &&
          !checkBox(i, j)) {
          return false;
        }
        if (!getSpot(i, j)) {
          return false;
        }
      }
    }
    console.log('board is filled')
    return true;
  }

  // Go through each square, in order of the 1D array
  //   skip givens
  //   create array of possible values
  //   check if spot is valid, 
  //     if so, move to next spot
  //     else if returned, try next possible value.
  //        unless if returned with a solved flag

  const recursiveSolve = (x, y) => {
    // Simple way for stepping through the matrix with callbacks
    if (9 === x) {
      y += 1;
      x = 0;
    }

    // Move on if spot is given and non-writeable
    if (isGiven(x, y)) {
      if(8 === x && 8 === y) return checkBoard();
      return recursiveSolve(x + 1, y);
    }

    // We're cleared to test on this spot.
    const possibleVals = arrayUpTo(9);

    let currentGuess = possibleVals.pop();
    while (currentGuess) {
      console.log('solving...');
      setSpot(x, y, currentGuess);
      if (!checkSpot(x, y)) {
        currentGuess = possibleVals.pop();
        continue;
      }

      // We know what we just set is valid and we move forward
      //   if we're on the last square and it's valid, we've solved;
      if(8 === x && y === 8) {
        return checkBoard();
      }
      // Otherwise, recursively keep going, allowing for result to propagate upwards when solved
      const result = recursiveSolve(x + 1, y);
      if (result) {
        return true;
      };

      // A later spot ran out of possibleVals with the previous decisions made
      //   and we must backtrack those spots. The current spot will be re-executed 
      //   with new possible values again. 
      currentGuess = possibleVals.pop();
    };

    // Current spot backtracking
    setSpot(x, y, '');
    return false;
  };

  recursiveSolve(0, 0);
  console.log('Root solver finished');
  return board;
};
