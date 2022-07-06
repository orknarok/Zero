// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-8

let i = +prompt("Введіть число");

while (i >= 2) {
    // число парне?
    if (i % 2 == 0) {
        console.put(i);

        // це не останнє число в ряді?
        if (i > 2) {
            console.put(",");
        }
    }

    i--;
}
