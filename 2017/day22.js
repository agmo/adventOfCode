function countBurstsThaCauseNodeToBeInfectedPart1(mapAsString, bursts) {
    let burstsThatCauseInfections = 0;
    let {convertedMap, x} = convertMap(mapAsString);

    //The virus carrier begins in the middle of the map. 0,0 is the top left corner.
    x = Math.trunc(x / 2);
    let y = x * -1;

    let direction = 0; // 0 = N; 1 = E; 2 = S; 3 = W;

    while (bursts) {
        moveVirus();
        bursts--;
    }

    return burstsThatCauseInfections;

    /////////////////////////
    function moveVirus() {
        const currentNode = (convertedMap.has(`${x},${y}`) || convertedMap.set(`${x},${y}`, 0))
            && convertedMap.get(`${x},${y}`);

        if (currentNode) { //1 -> node infected
            //clean the node
            convertedMap.set(`${x},${y}`, 0);

            turnAndMakeMove('R');
        } else { //0 -> node clean
            //infect the node
            convertedMap.set(`${x},${y}`, 1);
            burstsThatCauseInfections++;

            turnAndMakeMove('L');
        }
    }

    function convertMap(mapAsString) {
        const convertedMap = new Map();
        let x = 0;
        let y = 0;

        for (let char of mapAsString) {
            if (char === '\n') {
                y--;
                x = 0;
                continue;
            }

            convertedMap.set(`${x},${y}`, char === '.' ? 0 : 1);
            x++;

        }

        return {convertedMap, x};
    }

    function turnAndMakeMove(turnDirection) {
        switch (turnDirection) {
            case 'R': //right
                direction += 1;
                break;
            case 'L': //left
                direction += 3;
        }

        direction %= 4;

        switch (direction) {
            case 0 :
                y++;
                break;
            case 1 :
                x++;
                break;
            case 2:
                y--;
                break;
            case 3:
                x--;
        }
    }
}

function countBurstsThaCauseNodeToBeInfectedPart2(mapAsString, bursts) {
    let burstsThatCauseInfections = 0;
    let {convertedMap, x} = convertMap(mapAsString);
    x = Math.trunc(x / 2);
    let y = x * -1;

    let direction = 0;

    while (bursts) {
        moveVirus();
        bursts--;
    }

    return burstsThatCauseInfections;

    /////////////////////////
    function moveVirus() {
        const currentNode = (convertedMap.has(`${x},${y}`) || convertedMap.set(`${x},${y}`, '.'))
            && convertedMap.get(`${x},${y}`);

        switch (currentNode) {
            case '#': //node infected

                //flag the node
                convertedMap.set(`${x},${y}`, 'Fl');
                turnAndMakeMove('R'); //turn right

                break;
            case '.': //node clean

                //weaken the node
                convertedMap.set(`${x},${y}`, 'W');
                turnAndMakeMove('L'); //turn left

                break;
            case 'W': //node weakened

                //infect the node
                convertedMap.set(`${x},${y}`, '#');
                burstsThatCauseInfections++;
                turnAndMakeMove('F'); //continue forward in the same direction

                break;
            case 'Fl': //node flagged

                //clean the node
                convertedMap.set(`${x},${y}`, '.');
                turnAndMakeMove('B'); //go back (reverse direction)
        }
    }

    function convertMap(mapAsString) {
        const convertedMap = new Map();
        let x = 0;
        let y = 0;

        for (let char of mapAsString) {
            if (char === '\n') {
                y--;
                x = 0;
                continue;
            }

            convertedMap.set(`${x},${y}`, char);
            x++;

        }

        return {convertedMap, x};
    }

    function turnAndMakeMove(turnDirection) {
        switch (turnDirection) {
            case 'R': //right
                direction += 1;
                break;
            case 'L': //left
                direction += 3;
                break;
            case 'B': //back the way it came
                direction += 2;
                break;
            case 'F': //forward, so do not change direction
        }

        direction %= 4; // 4 -> number of directions

        switch (direction) {
            case 0 :
                y++;
                break;
            case 1 :
                x++;
                break;
            case 2:
                y--;
                break;
            case 3:
                x--;
        }
    }
}
