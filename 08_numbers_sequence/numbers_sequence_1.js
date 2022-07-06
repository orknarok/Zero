// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-1

let input = +prompt("Введіть число");

for (let i = 1; i <= input; i++) {
    console.put(i);

    if (i < input) {
        console.put(",");
    }
}
