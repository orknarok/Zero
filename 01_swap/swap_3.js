// Завдання: https://shpp.gitbook.io/zero/tutorials/commands/swap#chastina-3-ne-obovyazkovo

let first = 555;
let second = 888;

console.log("До обміну:");
console.log(" first = " + first);
console.log("second = " + second);
console.log();

// Міняємо вміст змінних місцями без додаткових змінних
first = first + second;
second = first - second;
first = first - second;

console.log("Після обміну:");
console.log(" first = " + first);
console.log("second = " + second);

