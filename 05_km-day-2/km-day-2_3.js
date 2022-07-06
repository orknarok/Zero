// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/km-day-2#chastina-3

let distance = +prompt("Скільки кілометрів на день Ви проходите пішки?");

if (distance < 0) {
    console.log("такого не може бути");
}

if (distance >= 0) {
    if (distance <= 3) {
        console.log("мало");
    }

    if (distance >= 4) {
        if (distance < 20) {
            console.log("красунчик!");
        }
    }

    if (distance >= 20) {
        console.log("марафонець!");
    }
}
