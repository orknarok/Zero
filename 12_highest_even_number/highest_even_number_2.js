// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/highest_even_number

let input;
let maxEvenNumber = null;

while (input != 0) {
    if (input % 2 == 0 && input > maxEvenNumber) {
        maxEvenNumber = input;
    }

    input = parseInt(prompt("Введіть число"));
}

console.log(maxEvenNumber != null ? maxEvenNumber : "Жодного парного");
