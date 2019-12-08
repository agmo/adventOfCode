function countOrbits_part1(orbits) {
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
