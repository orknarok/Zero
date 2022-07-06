// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-2#chastina-2

let distance = +prompt("Скільки кілометрів на день Ви проходите пішки?");

if (distance < 0) {
    console.log("такого не може бути");
} else if (distance <= 3) {
    console.log("мало");
} else if (distance < 20) {
    console.log("красунчик!");
} else if (distance >= 20) {
    console.log("марафонець!");
}
