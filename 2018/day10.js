// Day 10, part 1 answer is XLZAKBGZ (gets logged to the console)
function readMessageFromPoints(points) {
    let {minX, maxX, minY, maxY} = getMinMaxCoords(points);
    let width = Math.abs(minX) + maxX + 1;
    let height = Math.abs(maxY) + minY + 1;
    let pointsShrinking = true;
    let seconds = 0;

    while (pointsShrinking) {
        seconds++;

        // Update point positions
        for (let i = 0; i < points.length; i++) {
            points[i].position.x += points[i].velocity.x;
            points[i].position.y += points[i].velocity.y;
        }

        const currentMinMaxCoords = getMinMaxCoords(points);

        const currentWidth = Math.abs(currentMinMaxCoords.minX) + currentMinMaxCoords.maxX + 1;
        const currentHeight = Math.abs(currentMinMaxCoords.maxY) + currentMinMaxCoords.minY + 1;

        if (currentWidth <= width || currentHeight <= height) {
            width = currentWidth;
            height = currentHeight;
        } else {
            pointsShrinking = false;
            seconds--;

            // The message would have been shown before the last update so it needs to be undone
            for (let i = 0; i < points.length; i++) {
                points[i].position.x -= points[i].velocity.x;
                points[i].position.y -= points[i].velocity.y;
            }

            // Recalculate width and height
            const currentMinMaxCoords = getMinMaxCoords(points);

            const currentWidth = Math.abs(currentMinMaxCoords.minX) + currentMinMaxCoords.maxX + 1;
            const currentHeight = Math.abs(currentMinMaxCoords.maxY) + currentMinMaxCoords.minY + 1;

            width = currentWidth;
            height = currentHeight;
            minX = currentMinMaxCoords.minX;
            maxX = currentMinMaxCoords.maxX;
            minY = currentMinMaxCoords.minY;
            maxY = currentMinMaxCoords.maxY;
        }
    }

    draw(points, width, height, minX, maxX, minY, maxY);

    return seconds;
}

function draw(movedPoints, width, height, minX, maxX, minY, maxY) {
    let lastY = maxY;
    let lastLine;
    let linesTotal = '';
    createAnEmptyLine();

    movedPoints = movedPoints.sort((a, b) => a.position.y - b.position.y);

    movedPoints.forEach(point => {
        if (Math.abs(lastY - point.position.y) === 0) {
            // Y hasn't changed, draw the point on the existing line
            lastLine[Math.abs(minX) + point.position.x] = '#';

        } else if (Math.abs(lastY - point.position.y) === 1) {
            linesTotal += `${lastLine.join('')}\n`;
            lastY = point.position.y;
            createAnEmptyLine();
            lastLine[Math.abs(minX) + point.position.x] = '#';

        } else if (Math.abs(lastY - point.position.y) > 1) {
            linesTotal +=  `${lastLine.join('')}\n`;

            for (let i = 0; i < Math.abs(lastY - point.position.y) - 1; i++) {
                createAnEmptyLine();
                linesTotal +=  `${lastLine.join('')}\n`;
            }

            lastY = point.position.y;
            createAnEmptyLine();
            lastLine[Math.abs(minX) + point.position.x] = '#';
        }
    });

    linesTotal += `${lastLine.join('')}\n`;

    function createAnEmptyLine() {
        lastLine = Array(width);
        lastLine.fill('.');
    }

    console.log(linesTotal);
}

function getMinMaxCoords(points) {
    let minX = 0;
    let maxX = 0;
    let minY = 0;
    let maxY = 0;

    points.forEach(point => {
        if (point.position.x < minX) {
            minX = point.position.x;
        } else if (point.position.x > maxX) {
            maxX = point.position.x
        }

        if (point.position.y > minY) {
            minY = point.position.y;
        } else if (point.position.y < maxY) {
            maxY = point.position.y;
        }
    });

    return {minX, maxX, minY, maxY};
}
