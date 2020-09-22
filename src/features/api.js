export default (board) => {

  function getSpot(x, y) {
    return board[x * 9 + y];
  }
  function setSpot(x, y, val) {
    if ((x > 8) || (y > 8)) {
      return false;
    }
    board[y * 9 + x] = val;
  }

  setSpot(0, 0, 5);
  setSpot(1, 1, 5);
  setSpot(2, 2, 5);
  setSpot(7, 0, 5);
  setSpot(-1, -1, 5);
  setSpot(9, 9, 5);

  return board;
};
