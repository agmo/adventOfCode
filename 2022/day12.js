function findFewestStepsToBestSignal(heightmap) {
  const mapped = new Map();
  let start = '';
  let Square = class { // 'Square' as in 'heightmap square' in the puzzle.
    constructor(height, adjacentSquares) {
      this.height = height;
      this.adjacentSquares = adjacentSquares;
      this.explored = false;
      this.parent = null;
    }
  };

  for (let i = 0; i < heightmap.length; i++) {
    const row = heightmap[i];

    for (let j = 0; j < row.length; j++) {
      const adjacentSquares = [];

      if (j - 1 >= 0) { // left
        adjacentSquares.push(`${i},${j - 1}`)
      }

      if (j + 1 < row.length) { // right
        adjacentSquares.push(`${i},${j + 1}`)
      }

      if (i - 1 >= 0) { // top
        adjacentSquares.push(`${i - 1},${j}`)
      }

      if (i + 1 < heightmap.length) { // down
        adjacentSquares.push(`${i + 1},${j}`)
      }

      let currentLetter = heightmap[i][j];

      if (currentLetter === 'S') {
        start = `${i},${j}`;
      }

      mapped.set(`${i},${j}`, new Square(currentLetter.charCodeAt(0), adjacentSquares))
    }
  }

  const queue = [];
  let node = search(mapped.get(start));
  let steps = 0;

  while (node.parent) {
    steps++;
    node = node.parent;
  }

  return steps;

  function dequeue() {
    return queue.shift(); // First in, first out.
  }

  function enqueue(toEnqueue) {
    queue.push(toEnqueue);
  }

  function search(start) {
    // https://en.wikipedia.org/wiki/Breadth-first_search

    // Input: A graph G and a starting vertex root of G
    //
    // Output: Goal state. The parent links trace the shortest path back to root[
    //
    // 1  procedure BFS(G, root) is
    // 2      let Q be a queue
    // 3      label root as explored
    // 4      Q.enqueue(root)
    // 5      while Q is not empty do
    // 6          v := Q.dequeue()
    // 7          if v is the goal then
    // 8              return v
    // 9          for all edges from v to w in G.adjacentEdges(v) do
    // 10              if w is not labeled as explored then
    // 11                  label w as explored
    // 12                  w.parent := v
    // 13                  Q.enqueue(w)

    start.explored = true;
    enqueue(start);

    while (queue.length) {
      const current = dequeue();

      if (isBestSignalLocation(current.height)) {
        return current;
      }

      current.adjacentSquares.forEach(coords => {
        const square = mapped.get(coords);

        if (!square.explored && isDestinationAtMostOneHigher(current, square)) {
          square.explored = true;
          square.parent = current;
          enqueue(square);
        }
      })
    }
  }

  function isBestSignalLocation(height) {
    return height === 69; // 'E'.charCodeAt(0) is 69
  }

  function isDestinationAtMostOneHigher(current, destination) {
    let currentHeight = current.height;
    let destinationHeight = destination.height;

    if (destination.height === 69) { // E -> z
      destinationHeight = 'z'.charCodeAt(0);
    }

    if (current.height === 83) { // S -> a
      currentHeight = 'a'.charCodeAt(0);
    }

    return destinationHeight - currentHeight <= 1;
  }
}

