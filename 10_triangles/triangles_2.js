// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles

// ****
// ***
// **
// *

let size = +prompt("Введіть розмір трикутника");

// від більшого до меншого
for (let i = size; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        // виводить рядок довжиною від j до i
        console.put("*");
    }

    console.log();
}
