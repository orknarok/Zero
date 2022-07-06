// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-4
let i = +prompt("Введіть натуральне число");

while (i >= 1) {
    console.put(i);

    if (i > 1) {
        console.put(",");
    }

    i--;
}
