// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/highest_even_number

let number;
let maxEvenNumber = -Infinity;

do {
    number = +prompt("Enter the number.");

    if (number % 2 == 0 && number > maxEvenNumber && number != 0) {
        maxEvenNumber = number;
    }
} while (number != 0);

console.log(maxEvenNumber > -Infinity ? maxEvenNumber : "Жодного парного");
