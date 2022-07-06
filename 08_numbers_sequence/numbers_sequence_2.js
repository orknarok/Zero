// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-2

let input = +prompt("Введіть число");
let i = 1;

while (i <= input) {
    console.put(i);

    if (i < input) {
        console.put(",");
    }

    i++;
}
