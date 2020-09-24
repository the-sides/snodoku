export default (board) => {

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


  setSpot(0, 0, 5);
  setSpot(1, 1, 5);
  setSpot(2, 2, 5);
  setSpot(7, 0, 5);
  setSpot(-1, -1, 5);
  setSpot(9, 9, 5);

  return board;
};
