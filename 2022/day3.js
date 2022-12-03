function calculatePrioritiesSumPart1(rucksackContents) {
  let totalPriority = 0;

  rucksackContents.forEach(item => {
    const firstCompartment = item.slice(0, item.length / 2);
    const secondCompartment = item.slice(item.length / 2, item.length);
    let commonType;

    for (const type of firstCompartment) {
      if (secondCompartment.includes(type)) {
        commonType = type;
        break
      }
    }

    const commonTypePriority = calculatePriority(commonType)
    totalPriority += commonTypePriority;
  })


  return totalPriority;

  function calculatePriority(type) {
    const charCode = type.charCodeAt(0);
    const isSmallLetter = charCode >= 97 && charCode <= 122;

    if (isSmallLetter) {
      return charCode - 96;
    } else {
      return charCode - 38;
    }
  }
}
