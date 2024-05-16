const possibleMoves = [
  [2, 1], [2, -1],  // Moves 2 steps in x and 1 step in y (both directions)
  [-2, 1], [-2, -1], // Moves 2 steps in -x and 1 step in y (both directions)
  [1, 2], [1, -2],  // Moves 1 step in x and 2 steps in y (both directions)
  [-1, 2], [-1, -2]  // Moves 1 step in -x and 2 steps in y (both directions)
];

console.log(possibleMoves); // This will print the array of possible moves