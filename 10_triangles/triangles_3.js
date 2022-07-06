// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/triangles

// ****
//  ***
//   **
//    *

  let size = +prompt("Введіть розмір трикутника");

// від більшого до меншого
for (let i = size; i > 0; i--) {
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
