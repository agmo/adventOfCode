function findFirstStartOfPacketMarker(testDatastreamBuffer, part) {
  const markerLength = part === 1 ? 4 : 14;
  let result = 0;

  for (let i = 0; i < testDatastreamBuffer.length; i++) {
    let foundRepeatedChar = new Set(Array.from(testDatastreamBuffer.slice(i, i + markerLength))).size !== markerLength;

    if (!foundRepeatedChar) {
      result = i + markerLength;
      break;
    }
  }

  return result;
}
