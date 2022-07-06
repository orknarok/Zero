// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/atm

let cards = [-123, 33, 0, 4500, -611, 44, 0, 0, -1, -85];

// вибір картки
let selectedCard;

do {
    selectedCard = parseInt(prompt("Оберіть картку: 0 - 9"));
} while (selectedCard < 0 || selectedCard > cards.length - 1);

// вибір суми транзакції
let transaction = 0;

do {
    transaction = parseInt(prompt("Введіть суму транзакції"));
} while (transaction < -1000 || transaction > 1000);

// проведення транзакції
cards[selectedCard] += transaction;

// стан рахунків після транзакції
let cardsBalance = "";

for (let i = 0; i < cards.length; i++) {
    cardsBalance += cards[i];

    if (i < cards.length - 1) {
        cardsBalance += ", ";
    }
}

// загальний баланс всіх рахунків
let totalMoney = 0;

for (let i = 0; i < cards.length; i++) {
    totalMoney += cards[i];
}

console.log("Поточна картка: " + selectedCard);
console.log("Сума транзакції: " + transaction);
console.log("Стан рахунків: " + cardsBalance);
console.log("Загальний баланс: " + totalMoney);
