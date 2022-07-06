// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles

// *
// **
// ***
// ****

let size = +prompt("Введіть розмір трикутника");

// від меншого до більшого
for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
        // виводить рядок довжиною від j до i
        console.put("*");
    }

    console.log();
}
