function countOverlappingInchesOfFabric(claimsString) {
    const claimsArray = claimsStringToArray(claimsString);
    const nonOverlapping = {};
    const overlapping = new Set();

    claimsArray.forEach(claim => {
        for (let i = claim.x; i < claim.width + claim.x; i++) {
            for (let j = claim.y; j < claim.height + claim.y; j++) {
                const currentCoords = JSON.stringify({x: i, y: j});

                if (!(currentCoords in nonOverlapping)) {
                    nonOverlapping[currentCoords] = 1;
                } else {
                    overlapping.add(currentCoords);
                }
            }
        }
    });

    return overlapping.size;
}

function findNonOverlappingClaim(claimsString) {
    const claimsArray = claimsStringToArray(claimsString);
    const claimedSquares = {};
    let result;

    claimsArray.forEach((claim, index, array) => {
        let overlapped = false;
        const claimedSquareCoords = [];

        for (let i = claim.x; i < claim.width + claim.x; i++) {
            for (let j = claim.y; j < claim.height + claim.y; j++) {
                const currentCoords = JSON.stringify({x: i, y: j});

                if (!(currentCoords in claimedSquares)) {
                    claimedSquares[currentCoords] = 1;

                    if (!overlapped) {
                        claimedSquareCoords.push(currentCoords);
                    }
                } else {
                    claimedSquares[currentCoords]++;
                    overlapped = true;
                }
            }
        }

        if (!overlapped) {
            array[index].coords = claimedSquareCoords;
        }
    });

    for (let i = 0; i < claimsArray.length; i++) {
        if (claimsArray[i].coords && claimsArray[i].coords.every(xy => {
            return claimedSquares[xy] === 1
        })) {
            result = claimsArray[i].id;
            break;
        }
    }

    return result;
}

function claimsStringToArray(claimsString) {
    const regexp = /^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/;

    const split = claimsString.split('\n');
    const mapped = split.map (item => {
        return JSON.parse(item.replace(regexp, replacer));
    });

    return mapped;

    function replacer(match, group1, group2, group3, group4, group5) {
        return '{"id": ' + group1 + ', "x": ' + group2 + ', "y": ' + group3 + ', "width": ' + group4 + ', "height": ' + group5 + '}';
    }
}