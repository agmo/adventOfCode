function countStepsPart1(number) {
    const {x, y} = position(number);

    return Math.abs(x) + Math.abs(y); //https://en.wikipedia.org/wiki/Taxicab_geometry#Formal_definition
    //  The 'access port' coords in the puzzle one are 0,0, so this is in fact Math.abs(x-0) + Math.abs(y-0)

    //Solution adapted from https://stackoverflow.com/questions/11550153/determine-position-of-number-in-a-grid-of-numbers-centered-around-0-and-increasi (Markus Jarderot)
    function first(cycle) {
        const x = 2 * cycle - 1;

        return x * x + 1;
    }

    function cycle(index) {
        return Math.trunc((isqrt(index - 1) + 1) / 2);
    }

    function length(cycle) {
        return 8 * cycle;
    }

    function sector(index) {
        const c = cycle(index);
        const offset = index - first(c);
        const n = length(c);

        return Math.trunc(4 * offset / n);
    }

    function position(index) {
        const c = cycle(index);
        const s = sector(index);
        const offset = Math.trunc(index - first(c) - Math.trunc(s * length(c) / 4));

        if (s === 0) { //east
            return {x: c, y: -c + offset + 1}
        } else if (s === 1) { //north
            return {x: c - offset - 1, y: c};
        } else if (s === 2) { //west
            return {x: -c, y: c - offset - 1};
        } else { //south
            return {x: -c + offset + 1, y: -c}
        }
    }

    function isqrt(x) {
        if (x === 0) {
            return 0;
        }

        let n = Math.trunc(x / 2) + 1;
        let n1 = Math.trunc((n + Math.trunc(x / n)) / 2);

        while (n1 < n) {
            n = n1;
            n1 = Math.trunc((n + Math.trunc(x / n)) / 2);
        }

        return n;
    }
}