function findLargestValueInRegistersPart1(instructions) {
    let registerToModify;
    let operationType;
    let operationAmount;
    let condition;
    let registerInCondition;
    const registerValues = {};
    let largestValue = 0;

    instructions.forEach(instruction => {
        parseInstruction(instruction);

        if (conditionSucceeds()) {
            modifyRegister();
        }
    });

    for (let modifiedRegister in registerValues) {
        if (registerValues[modifiedRegister] > largestValue) {
            largestValue = registerValues[modifiedRegister];
        }
    }

    return largestValue;

    ///////////////////////////////////////////////////////////
    function parseInstruction(instruction) {
        const operationLength = 3; //either 'inc' or 'dec', so always 3
        const spaceLength = 1;
        const ifLength = 2; //the word 'if'
        let currentIndex = 0;

        registerToModify = instruction.substring(0, findNearestSpace(0));
        currentIndex += registerToModify.length + spaceLength;

        operationType = instruction.substr(currentIndex, operationLength);
        currentIndex += operationType.length + spaceLength;

        operationAmount = instruction.substring(currentIndex, findNearestSpace(currentIndex));
        currentIndex += operationAmount.length + spaceLength + ifLength + spaceLength;

        registerInCondition = instruction.substring(currentIndex, findNearestSpace(currentIndex));
        currentIndex += registerInCondition.length + spaceLength;

        condition = instruction.substring(currentIndex);

        function findNearestSpace(startingPosition) {
            return instruction.indexOf(' ', startingPosition);
        }
    }

    function conditionSucceeds() {
        if (!registerValues[registerInCondition]) {
            registerValues[registerInCondition] = 0; //The registers all start at 0.
        }

        return eval(registerValues[registerInCondition] + condition);
    }

    function modifyRegister() {
        if (!registerValues[registerToModify]) {
            registerValues[registerToModify] = 0;
        }

        if (operationType === 'inc') {
            registerValues[registerToModify] += Number(operationAmount);
        } else {
            registerValues[registerToModify] -= Number(operationAmount);
        }
    }
}

function findLargestValueInRegistersPart2(instructions) {
    let registerToModify;
    let operationType;
    let operationAmount;
    let condition;
    let registerInCondition;
    const registerValues = {};
    let highestValueInAnyRegister = 0;

    instructions.forEach(instruction => {
        parseInstruction(instruction);

        if (conditionSucceeds()) {
            modifyRegister();
        }
    });

    for (let modifiedRegister in registerValues) {
        if (registerValues[modifiedRegister].highestValue > highestValueInAnyRegister) {
            highestValueInAnyRegister = registerValues[modifiedRegister].highestValue;
        }
    }

    return highestValueInAnyRegister;

    ///////////////////////////////////////////////////////////
    function parseInstruction(instruction) {
        const operationLength = 3; //either 'inc' or 'dec', so always 3
        const spaceLength = 1;
        const ifLength = 2; //the word 'if'
        let currentIndex = 0;

        registerToModify = instruction.substring(0, findNearestSpace(0));
        currentIndex += registerToModify.length + spaceLength;

        operationType = instruction.substr(currentIndex, operationLength);
        currentIndex += operationType.length + spaceLength;

        operationAmount = instruction.substring(currentIndex, findNearestSpace(currentIndex));
        currentIndex += operationAmount.length + spaceLength + ifLength + spaceLength;

        registerInCondition = instruction.substring(currentIndex, findNearestSpace(currentIndex));
        currentIndex += registerInCondition.length + spaceLength;

        condition = instruction.substring(currentIndex);

        function findNearestSpace(startingPosition) {
            return instruction.indexOf(' ', startingPosition);
        }
    }

    function conditionSucceeds() {
        if (!registerValues[registerInCondition]) {
            registerValues[registerInCondition] = {currentValue: 0, highestValue: 0}; //The registers all start at 0.
        }

        return eval(registerValues[registerInCondition].currentValue + condition);
    }

    function modifyRegister() {
        if (!registerValues[registerToModify]) {
            registerValues[registerToModify] = {currentValue: 0, highestValue: 0};
        }

        if (operationType === 'inc') {
            registerValues[registerToModify].currentValue += Number(operationAmount);
        } else {
            registerValues[registerToModify].currentValue -= Number(operationAmount);
        }

        if (registerValues[registerToModify].currentValue > registerValues[registerToModify].highestValue) {
            registerValues[registerToModify].highestValue = registerValues[registerToModify].currentValue;
        }
    }
}
