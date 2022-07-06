// Завдання: https://shpp.gitbook.io/zero/tutorials/functions/array-reversing

main();

function main() {
    let arrayLength = getArrayLength();
    let array = [];

    fillArray(array, arrayLength);
    printArray(array);
    reverseArray(array);
    console.log(array.length > 0 ? "ось реверснутий масив: " : "");
    printArray(array);
}

// Перевіряє чи рядок пустий (або містить лише пробіли)
// Аргумент повинен бути типу рядок.
// Повертає undefined, якщо аргумент не є рядком.
// Повертає true, якщо рядок містить лише пробіли, або пустий.
// Повертає false, якщо рядок містить щось крім пробілів.
function isEmptyString(str) {
    if (typeof str !== "string") {
        console.log("Помилка в isEmptyString(): аргумент повинен бути рядком.");

        return;
    }

    let symbols = 0;

    for (let i = 0; i < str.length && symbols == 0; i++) {
        if (str[i] != " ") {
            symbols++;
        }
    }

    // console.log(
    //     "isEmptyString(): Рядок " + (symbols == 0 ? "пустий!" : "не пустий!")
    // );

    return symbols == 0;
}

// Запитує у користувача розмір масиву.
// Повертає введене значення, якщо воно >= 0
// Повертає undefined, якщо введення скасовано (null) або
// введене значення < 0, пустий рядок або не число.
function getArrayLength() {
    let length;

    do {
        length = prompt("Введіть розмір масиву.");

        if (length == null) {
            return;
        }

        // if (isEmptyString(length)) {
        //     console.log("getArrayLength(): Ви нічого не ввели.");

        //     return;
        // }

        // if (+length + "" == "NaN") {
        //     console.log("getArrayLength(): Ви ввели не число.");

        //     return;
        // }

        // if (+length < 0) {
        //     console.log("getArrayLength(): Число не має бути від'ємним.");

        //     return;
        // }
    } while (isEmptyString(length) || +length + "" == "NaN" || +length < 0);

    return +length;
}

// Запитує користувача про значення кожного елементу масиву
// відповідно до довжини масиву та заповнює отриманий як аргумент масив.
function fillArray(array, arrayLength) {
    for (let i = 0, buffer; i < arrayLength; i++) {
        buffer = prompt(`Введіть ${i + 1} елемент масиву`);

        if (buffer == null) {
            // array[i] = "";
            continue;
        } else {
            array[i] = buffer;
        }
    }
}

// Виводить в консоль елементи масиву у вигляді [elem1, elem2, ...]
function printArray(array) {
    let buffer = "";

    for (let i = 0; i < array.length; i++) {
        buffer += i < array.length - 1 ? array[i] + ", " : array[i];
    }

    console.log(array.length > 0 ? "[" + buffer + "]" : "");
}

// Обертає отриманий як аргумен масив.
function reverseArray(array) {
    for (
        let i = 0, buffer = 0, lastElement = array.length - 1;
        i < array.length / 2;
        i++
    ) {
        buffer = array[i];
        array[i] = array[lastElement - i];
        array[lastElement - i] = buffer;
    }
}
