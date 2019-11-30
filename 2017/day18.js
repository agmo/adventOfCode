function findRecoveredFrequencyValuePart1(instructions) {
    const registers = {};
    let freqOfLastSound;

    for (let i = 0; i < instructions.length && i >= 0;) {
        switch (instructions[i].instruction) {
            case 'snd':
                playSound(instructions[i].register);
                break;
            case 'set':
                setRegisterValue({register, value} = instructions[i]);
                break;
            case 'add':
                increaseRegisterValue({register, value} = instructions[i]);
                break;
            case 'mul':
                multiplyRegisterValue({register, value} = instructions[i]);
                break;
            case 'mod':
                applyModuloToRegisterValue({register, value} = instructions[i]);
                break;
            case 'rcv':
                if (registers[instructions[i].register]) {
                    return freqOfLastSound;
                }
                break;
            case 'jgz':
                if (registers[instructions[i].register]) {
                    i +=
                        typeof instructions[i].value === 'number' ?
                            instructions[i].value :
                            //if jgz value is specified as register name rather than a number:
                            registers[instructions[i].value];
                    continue;
                }
        }

        i++;
    }

    ///////////////////////////////////////////
    function applyModuloToRegisterValue({register, value}) {
        if (registers[register]) {
            registers[register] %= typeof value === 'number' ? value : registers[value];
        } else {
            registers[register] = 0; //register should start with a value of 0, so 0%value->0
        }
    }

    function increaseRegisterValue({register, value}) {
        if (registers[register]) {
            registers[register] += typeof value === 'number' ? value : registers[value];
        } else {
            registers[register] = typeof value === 'number' ? value : registers[value]; //register should start with a value of 0, so 0+value->value
        }
    }

    function multiplyRegisterValue({register, value}) {
        if (registers[register]) {
            registers[register] *= typeof value === 'number' ? value : registers[value];
        } else {
            registers[register] = 0; //register should start with a value of 0, so 0*0->0
        }
    }

    function playSound(register) {
        if (registers[register]) {
            freqOfLastSound = registers[register];
        }
    }

    function setRegisterValue({register, value}) {
        registers[register] = typeof value === 'number' ? value : registers[value];
    }

}

//puzzle input
//[{instruction: 'set', register: 'i', value: 31}, {instruction: 'set', register: 'a', value: 1}, {instruction: 'mul', register: 'p', value: 17}, {instruction: 'jgz', register: 'p', value: 'p'}, {instruction: 'mul', register: 'a', value: 2}, {instruction: 'add', register: 'i', value: -1}, {instruction: 'jgz', register: 'i', value: -2}, {instruction: 'add', register: 'a', value: -1}, {instruction: 'set', register: 'i', value: 127}, {instruction: 'set', register: 'p', value: 622}, {instruction: 'mul', register: 'p', value: 8505}, {instruction: 'mod', register: 'p', value: 'a'}, {instruction: 'mul', register: 'p', value: 129749}, {instruction: 'add', register: 'p', value: 12345}, {instruction: 'mod', register: 'p', value: 'a'}, {instruction: 'set', register: 'b', value: 'p'}, {instruction: 'mod', register: 'b', value: 10000}, {instruction: 'snd', register: 'b'}, {instruction: 'add', register: 'i', value: -1}, {instruction: 'jgz', register: 'i', value: -9}, {instruction: 'jgz', register: 'a', value: 3}, {instruction: 'rcv', register: 'b'}, {instruction: 'jgz', register: 'b', value: -1}, {instruction: 'set', register: 'f', value: 0}, {instruction: 'set', register: 'i', value: 126}, {instruction: 'rcv', register: 'a'}, {instruction: 'rcv', register: 'b'}, {instruction: 'set', register: 'p', value: 'a'}, {instruction: 'mul', register: 'p', value: -1}, {instruction: 'add', register: 'p', value: 'b'}, {instruction: 'jgz', register: 'p', value: 4}, {instruction: 'snd', register: 'a'}, {instruction: 'set', register: 'a', value: 'b'}, {instruction: 'jgz', register: '1', value: 3}, {instruction: 'snd', register: 'b'}, {instruction: 'set', register: 'f', value: 1}, {instruction: 'add', register: 'i', value: -1}, {instruction: 'jgz', register: 'i', value: -11}, {instruction: 'snd', register: 'a'}, {instruction: 'jgz', register: 'f', value: -16}, {instruction: 'jgz', register: 'a', value: -19}]
