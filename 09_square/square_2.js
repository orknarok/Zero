// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/square#chastina-2

let size = +prompt("Введіть розмір квадрата");
let i = 0;

while (i < size) {
    let j = 0;

    while (j < size) {
        console.put("* ");
        j++;
    }

    console.log();

    i++;
}
