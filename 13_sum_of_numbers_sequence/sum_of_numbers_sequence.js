// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/sum_of_numbers_sequence

let first = +prompt("Введіть перше число");
let second = +prompt("Введіть друче число");

// Якщо користувач увів перше число більше ніж друге,
// то міняємо числа місцями
if (first > second) {
    first = first + second;
    second = first - second;
    first = first - second;
}

let numberSequenceSum = 0;

// Обчислення суми послідовності чисел
while (first <= second) {
    numberSequenceSum += first++;
}

console.log(numberSequenceSum);
