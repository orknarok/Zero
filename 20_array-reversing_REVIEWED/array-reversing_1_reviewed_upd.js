// Завдання: https://shpp.gitbook.io/zero/tutorials/functions/array-reversing
// Gaston

// Отримує від користувача розмір масиву (число >= 0) та повертає його
function getArrayLength() {
    let length;

    do {
        length = parseInt(prompt("Введіть розмір масива.", 1));
    } while (isNaN(length) || length < 1);

    return length;
}

// Заповнює масив введеними користувачем значеннями
function fillArray(array, arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
        array[i] = prompt(`Введіть ${i + 1} елемент масива.`);
    }
}

// Виводить в консоль елементи масиву у вигляді [elem1, elem2, ...]
function printArray(array) {
    let buffer = "";

    for (let i = 0; i < array.length; i++) {
        buffer += i < array.length - 1 ? array[i] + ", " : array[i];
    }

    console.log("[" + buffer + "]");
}

// Обертає отриманий, як аргумент, масив.
function reverseArray(array) {
    for (let i = 0, buffer; i < array.length / 2; i++) {
        buffer = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = buffer;
    }
}

function main() {
    let arrayLength = getArrayLength();
    let array = [];

    fillArray(array, arrayLength);
    printArray(array);
    reverseArray(array);
    console.log("ось реверснутий масив:");
    printArray(array);
}

main();
