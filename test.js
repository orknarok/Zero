// https://shpp.gitbook.io/zero/arrangements/p2p-cs-entrytest#prikladi-zadach-skhozhikh-na-testovi

// 1
const wheels = (bikes, cars) => bikes * 2 + cars * 4;

// console.log(wheels(3, 2));

// 2
function numbers(first, second, third) {
    let sum = first + second + third;

    if (first == second && second == third) {
        return -1;
    }

    if (sum >= 0 && sum <= 100) {
        return 1;
    } else {
        let max = first > second ? first : second;

        return (max = max > third ? max : third);
    }
}

// console.log(numbers(200, 2000, 2));

// 3
function sequenceSum(first, second) {
    if (first > second) {
        first = first + second;
        second = first - second;
        first = first - second;
    }

    let result = 0;

    for (let i = first + 1; i < second; i++) {
        if (i % 5 == 0 || i % first == 0 || i % second == 0) {
            result += i;
        }
    }

    return result;
}

console.log(sequenceSum(50, 0));

// 4
function arrays(firstArray, secondArray, length) {
    firstArray.length = length;
    secondArray.length = length;

    let buffer = [];

    for (let i = 0; i < length; i++) {
        buffer[i] = firstArray[i];
        firstArray[i] = firstArray[i] - secondArray[i];
        secondArray[i] = secondArray[i] + buffer[i];
    }

    return secondArray;
}

let array = arrays([5, 5, 5, 5, 5], [1, 1, 1, 1, 1, 1], 5);

console.log(array);
