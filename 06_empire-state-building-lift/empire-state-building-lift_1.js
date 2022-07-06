// Завдання: https://shpp.gitbook.io/zero/tutorials/if-else/empire-state-building-lift

let floor = prompt("Введіть номер поверху.");

if (floor != null && +floor + "" != "NaN" && floor != "") {
    floor = +floor;

    // Обраний поверх є у будівлі?
    if (floor >= 1 && floor <= 102) {
        // Обраний поверх секретний? Потрібно ввести пароль.
        if (floor >= 24 && floor <= 39) {
            if (prompt("Цей поверх - секретний. Введіть пароль.") === "1337") {
                console.log("ок");
            } else {
                console.log("невірний пароль");
            }

            // Обраний поверх не секретний? Ок.
        } else {
            console.log("ок");
        }

        // Обраного поверху немає у будівлі?
    } else {
        console.log("невірний поверх");
    }
} else {
    // Користувач скасував введення, ввів не число або пустий рядок?
    if (floor == null) {
        console.log("Скасовано!");
    } else {
        console.log("Ви не ввели номер поверху!");
    }
}
