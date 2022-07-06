// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/centered-thing

let numbers = [];

let i = 0;
let numberBuffer = 0;
let maxNumber = 0;

do {
    numberBuffer = +prompt("Кількість зірочок в рядку №" + (i + 1));

    // записуємо в масив непарні числа
    if (numberBuffer % 2 != 0) {
        numbers[i] = numberBuffer;

        // визначаємо найбільше введене число
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }

        i++;
    }
} while (numberBuffer != 0 && numbers.length < 20);

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < (maxNumber - numbers[i]) / 2; j++) {
        console.put(" ");
    }

    for (let j = 0; j < numbers[i]; j++) {
        console.put("*");
    }

    console.log();
}
