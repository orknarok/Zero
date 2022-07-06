// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/cities

let cities = [];

// записуємо міста в масив
for (let i = 0; i < 10; i++) {
    cities[i] = prompt("Введіть назву міста № " + (i + 1));
}

let homeCity = prompt("Введіть назву рідного міста");
let isHomeCity = false;

// рідне місто є серед міст в масиві?
for (let i = 0; i < cities.length && isHomeCity == false; i++) {
    if (cities[i] == homeCity) {
        isHomeCity = true;
    }
}

console.log("Я " + (isHomeCity == true ? "" : "НЕ ") + "знаю твоє місто");
