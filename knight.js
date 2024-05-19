function knightMoves(start, target) {
    const possibleMoves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    const queue = [start];
    const visited = new Set();
    visited.add(start.toString());
    const parents = new Map();
  
    while (queue.length > 0) {
      const [x, y] = queue.shift();
  
      // If current position is the target, break out of the loop
      if (x === target[0] && y === target[1]) {
        break;
      }
  
      // Explore all possible moves
      for (const [dx, dy] of possibleMoves) {
        const nextX = x + dx;
        const nextY = y + dy;
        const nextPosition = [nextX, nextY];
  
        // Check if the new position is valid and not visited
        if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8 && !visited.has(nextPosition.toString())) {
          queue.push(nextPosition);
          visited.add(nextPosition.toString());
          parents.set(nextPosition.toString(), [x, y]);
        }
      }
    }
  
    // Reconstruct the path from the target to the start
    const path = [];
    let current = target;
    while (current) {
      path.unshift(current);
      current = parents.get(current.toString());
    }
  
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
    return path;
  }
  
  // Test the knightMoves function
  console.log(knightMoves([0, 2], [1, 2])); // Expected: [[0, 0], [1, 2]]
  console.log(knightMoves([0, 3], [3, 3])); // One possible output: [[0, 0], [2, 1], [3, 3]]
  console.log(knightMoves([2, 1], [0, 0])); // One possible output: [[3, 3], [1, 2], [0, 0]]
  console.log(knightMoves([7, 0], [7, 7])); // One possible output: [[0, 0], ..., [7, 7]]
  console.log(knightMoves([3, 3], [4, 3])); // One possible output: [[3, 3], [5, 4], [4, 3]]
  