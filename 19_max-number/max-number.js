// Завдання: https://shpp.gitbook.io/zero/tutorials/functions/max-number

function max (first, second) {
    return first > second ? first : second;
}

let number1 = +prompt("введи перше число");
let number2 = +prompt("введи друге число");

console.log(max(number1, number2));
