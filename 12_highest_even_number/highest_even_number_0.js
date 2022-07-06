// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/highest_even_number

let inputNumber;
let biggestEvenNumber;

for (let i = 0; i >= 0; i++) {
    inputNumber = +prompt("Введіть число");

    // Вихід з циклу якщо користувач ввів нуль
    if (inputNumber == 0) {
        if (biggestEvenNumber) {
            console.log(biggestEvenNumber);
        } else {
            console.log("Жодного парного");
        }

        break;
    }

    // Визначаємо найбільше парне число
    if (inputNumber !== 0) {
        if (i == 0) {
            if (inputNumber % 2 == 0) {
                biggestEvenNumber = inputNumber;
            } else {
                i--;
            }
        } else if (i > 0 && inputNumber % 2 == 0) {
            if (inputNumber > biggestEvenNumber) {
                biggestEvenNumber = inputNumber;
            }
        }
    }
}
