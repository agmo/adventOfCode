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
