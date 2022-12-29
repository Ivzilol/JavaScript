function solve(matrix) {
  let sumFirstRow = 0;
  let sumSecondRow = 0;
  let sumColOne = 0;
  let sumColTwo = 0;
  let isMagical = true;
  for (let row = 0; row < matrix.length - 1; row++) {
    sumFirstRow = matrix[row].reduce((a, b) => a + b, 0);
    sumSecondRow = matrix[row + 1].reduce((a, b) => a + b, 0);
    for (let col = 0; col < matrix.length; col++) {
      sumColOne += matrix[row][col];
      sumColTwo += matrix[row + 1][col];
    }
  }

  if (sumFirstRow !== sumSecondRow || sumColOne !== sumColTwo) {
    isMagical = false;
  }
  return isMagical;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
