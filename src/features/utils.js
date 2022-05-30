function arrayUpTo(n) {
  const rv = [];
  let i = 1;
  while (i - 1 < n) {
    rv.push(i++);
  }
  return rv;
}
function removeVal(arr, val) {
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

export { arrayUpTo, removeVal };
