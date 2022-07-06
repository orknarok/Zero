// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-5

let input = +prompt("Введіть число");

for (let i = 2; i <= input; i++) {
    if (i % 2 == 0) {
        console.put(i);

        if (i < input - 1) {
            console.put(",");
        }
    }
}
