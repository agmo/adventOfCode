function findSumPart1(digitsString) {
    let sum = 0;

    for (let i = 0, length = digitsString.length; i < length; i++) {
        if (+digitsString[i] === +digitsString[(i+1)%length]) {
            sum+= +digitsString[i];
        }
    }

    return sum;
}

function findSumPart2(digitsString) {
    let sum = 0;

    for (let i = 0, length = digitsString.length; i < length; i++) {
        if (+digitsString[i] === +digitsString[(i+(length/2))%length]) {
            sum+= +digitsString[i];
        }
    }

    return sum;
}