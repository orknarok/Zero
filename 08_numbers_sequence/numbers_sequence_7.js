// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/numbers_sequence#chastina-7

for (let i = +prompt("Введіть число"); i >= 2; i--) {
    // число парне?
    if (i % 2 == 0) {
        console.put(i);

        // це не останнє число в ряді?
        if (i > 2) {
            console.put(",");
        }
    }
}
