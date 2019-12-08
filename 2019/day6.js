function countOrbits(orbits) {
  const orbitMap = mapOrbits(orbits);
  let totalOrbits = 0;
  const centerOfMass = 'COM';

  for (const orbitMapElement of orbitMap) {
    totalOrbits += countOrbits(orbitMapElement);
  }

  return totalOrbits;

  ///////////////////
  function countOrbits(objects) {
    let orbitCount = 1;

    if (objects[1] === centerOfMass) {
      return orbitCount;
    } else {
      return orbitCount + countOrbits([objects[1], orbitMap.get(objects[1])]);
    }
  }
}

function countOrbitalTransfers(orbits) {
  const centerOfMass = 'COM';
  const orbitMap = mapOrbits(orbits);
  let yourTransfersToCOM = registerTransfersToCOM(orbitMap.get('YOU'));
  let santaTransfersToCOM = registerTransfersToCOM(orbitMap.get('SAN'));

  return symmetricDifference(yourTransfersToCOM, santaTransfersToCOM).size;

  ///////////////////
  function registerTransfersToCOM(objectName) {
    let transfers = new Set();

    while(objectName !== centerOfMass) {
      transfers.add(objectName);
      objectName = orbitMap.get(objectName);
    }

    return transfers;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function symmetricDifference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function mapOrbits(orbits) {
  const result = new Map();

  orbits.forEach(orbit => {
    const separatorPosition = orbit.indexOf(')');
    const key = orbit.substring(separatorPosition + 1);
    const value = orbit.substring(0, separatorPosition);
    result.set(key, value);
  });

  return result;
}
