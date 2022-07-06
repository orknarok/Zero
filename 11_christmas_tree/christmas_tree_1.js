// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/christmas_tree

let size = +prompt("Введіть висоту ялинки;");

for (let i = 1; i <= size; i++) {
    // (size - i) пробілів
    for (let j = 0; j < size - i; j++) {
        console.put(" ");
    }

    // (i + (i - 1)) зірочок
    for (let j = 0; j < i + (i - 1); j++) {
        console.put("*");
    }

    console.log();
}

for (let i = 1; i < size; i++) {
    console.put(" ");
}

if (size > 0) {
    console.log("*");
}
