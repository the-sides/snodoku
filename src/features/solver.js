function arrayUpTo(n) {
  const rv = [];
  let i = 1;
  while (i - 1 < n) {
    rv.push(i++);
  }
  return rv;
}
function remove(arr, val) {
  // Passive fail on blank spots. 
  if (!val) {
    return arr;
  }
  const index = arr.indexOf(val);
  // console.log('remove', val, index)
  if (index == -1) return false;
  arr.splice(index, 1);
  return arr;
}

export default (board) => {

  // Need to be here for the sake of sharing the scope.
  // Ideally, the board should be a Class with the board member, operating via get/setters

  function getSpot(x, y) {
    const val = Number(board[y * 9 + x]);
    return val > 0 ? val : false;
  }
  function setSpot(x, y, val) {
    if ((x > 8) || (y > 8)) {
      return false;
    }
    board[y * 9 + x] = val;
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
        remaining = remove(remaining, getSpot(i + xBox * 3, j + yBox * 3));
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

  const checkRow = () => {

  }
  const checkCol = () => {

  }

  const checkBoard = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!checkBox(i, j)) {
          console.log('Board invalid')
          return false;
        }
      }
    }
  }

  checkBoard();

  return board;
};
