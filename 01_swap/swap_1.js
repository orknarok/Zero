// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-1

let first = 5;
let second = 8;

console.log("До обміну:");
console.log(" first = " + first);
console.log("second = " + second);
console.log();

// Міняємо вміст змінних місцями за допомогою двох додаткових змінних
let swapBuffer1 = first;
let swapBuffer2 = second;

first = swapBuffer2;
second = swapBuffer1;

console.log("Після обміну:");
console.log(" first = " + first);
console.log("second = " + second);
