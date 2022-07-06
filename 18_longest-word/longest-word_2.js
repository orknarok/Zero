function highAndLow(numbers) {
    // let array = numbers.split(" ");

    let array = [];

    for (let i = 0, j = 0, isNumber, buffer, char; i < numbers.length; i++) {
        isNumber = false;
        buffer = "";
        char = numbers[i];

        while (char != " " && i < numbers.length) {
            isNumber = true;
            buffer += char;
            char = numbers[++i];
        }

        if (isNumber) {
            array[j++] = buffer;
        }
    }

    let highestNumber = -Infinity;
    let lowestNumber = +Infinity;

    for (let i = 0; i < array.length; i++) {
        array[i] = +array[i];

        if (highestNumber < array[i]) {
            highestNumber = array[i];
        }

        if (lowestNumber > array[i]) {
            lowestNumber = array[i];
        }
    }

    return highestNumber + " " + lowestNumber;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
