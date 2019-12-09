function day8_part1(digits) {
  const pxWidth = 25;
  const pxHeight = 6;
  let layerWithFewestZeros = {layerIndex: 0, layerZeros: Number.MAX_SAFE_INTEGER};
  const layers = [];

  for (let i = 0; i < digits.length; i += pxWidth * pxHeight) {
    const layer = digits.substring(i, i + pxWidth * pxHeight);
    layers.push(layer);

    const zeros = layer.match(/0/g);
    if (zeros && zeros.length < layerWithFewestZeros.layerZeros) {
      layerWithFewestZeros.layerZeros = zeros.length;
      layerWithFewestZeros.layerIndex = i;
    }
  }

  const ones = layers[layerWithFewestZeros.layerIndex / (pxWidth * pxHeight)].match(/1/g);
  const twos = layers[layerWithFewestZeros.layerIndex / (pxWidth * pxHeight)].match(/2/g);

  return (ones && ones.length || 1) * (twos && twos.length || 1);
}

function day8_part2(digits) {
  const pxWidth = 25;
  const pxHeight = 6;
  let layer = '';

  for (let i = 0; i < pxWidth * pxHeight; i++) {
    for (let j = 0; j < digits.length; j += pxWidth * pxHeight) {
      if (digits[i + j] === '2') {
        continue;
      }

      layer += digits[i + j];

      if (layer.length === pxWidth) {
        console.log(layer);
        layer = ''
      }
      break;
    }
  }

  return true; // Return true for QUnit only; puzzle answer gets logged to the console.
}
