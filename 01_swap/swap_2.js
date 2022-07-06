// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-2

let first = 55;
let second = 88;

console.log("До обміну:");
console.log(" first = " + first);
console.log("second = " + second);
console.log();

// Міняємо вміст змінних місцями за допомогою однієї додаткової змінної
let swapBuffer = first;

first = second;
second = swapBuffer;

console.log("Після обміну:");
console.log(" first = " + first);
console.log("second = " + second);
