function mapMovesToCoords(moves) {
  const coords = new Set();
  const currentCoords = {x: 0, y: 0};

  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i];
    const moveDirection = currentMove.substring(0, 1);
    let moveDistance = Number(currentMove.substring(1));

    if (moveDirection === 'R') {
      while (moveDistance > 0) {
        currentCoords.x += 1;
        moveDistance--;
        coords.add(JSON.stringify(currentCoords));
      }
    } else if (moveDirection === 'L') {
      while (moveDistance > 0) {
        currentCoords.x -= 1;
        moveDistance--;
        coords.add(JSON.stringify(currentCoords));
      }
    } else if (moveDirection === 'U') {
      while (moveDistance > 0) {
        currentCoords.y += 1;
        moveDistance--;
        coords.add(JSON.stringify(currentCoords));
      }
    } else if (moveDirection === 'D') {
      while (moveDistance > 0) {
        currentCoords.y -= 1;
        moveDistance--;
        coords.add(JSON.stringify(currentCoords));
      }
    }
  }

  return coords;
}

function findClosesIntersection(movesA, movesB) {
  const movesACoords = mapMovesToCoords(movesA);
  const movesBCoords = mapMovesToCoords(movesB);
  const intersections = new Set([...movesACoords].filter(x => movesBCoords.has(x)));

  let closestIntersection = Number.MAX_SAFE_INTEGER;

  intersections.forEach(function(intersection) {
    const {x, y} = JSON.parse(intersection);
    const manhattanDistance = Math.abs(x) + Math.abs(y);
    closestIntersection = Math.min(closestIntersection, manhattanDistance);
  });

  return closestIntersection;
}
