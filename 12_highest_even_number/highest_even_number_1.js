// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/highest_even_number

let inputNumber;
let biggestEvenNumber;

do {
    inputNumber = +prompt("Введіть число");

    if (inputNumber == 0) {
        // Користувач ввів нуль
        if (biggestEvenNumber) {
            console.log(biggestEvenNumber);
        } else {
            console.log("Жодного парного");
        }
    } else if (inputNumber % 2 == 0) {
        // Користувач ввів парне число
        if (biggestEvenNumber == undefined) {
            biggestEvenNumber = inputNumber;
        }

        if (inputNumber > biggestEvenNumber) {
            biggestEvenNumber = inputNumber;
        }
    }

} while (inputNumber != 0);
