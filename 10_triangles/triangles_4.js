// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles

//    *
//   **
//  ***
// ****

let size = +prompt("Введіть розмір трикутника");

// від меншого до більшого
for (let i = 1; i <= size; i++) {
    // виводимо пробіли
    for (let j = 0; j < size - i; j++) {
        console.put(" ");
    }

    // виводимо зірочки
    for (let j = 0; j < i; j++) {
        console.put("*");
    }

    console.log();
}
