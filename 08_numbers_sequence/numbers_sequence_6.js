// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-6

let input = +prompt("Введіть число");
let i = 2;

while (i <= input) {
    if (i % 2 == 0) {
        console.put(i);

        if (i < input - 1) {
            console.put(",");
        }
    }

    i++;
}
