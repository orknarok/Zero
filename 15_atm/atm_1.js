// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/atm

let accounts = [-123, 33, 0, 4500, -611, 44, 0, 0, -1, -85];
let selectedAccount;

do {
    selectedAccount = parseInt(prompt("Select your account."));
} while (selectedAccount < 0 || selectedAccount > 9);

let transaction = 0;

if (selectedAccount >= 0 && selectedAccount <= 9) {
    do {
        transaction = +prompt("Enter the transaction sum");
    } while (transaction < -1000 || transaction > 1000);
}

accounts[selectedAccount] += transaction;

let accountsBalance = "";
let totalBalance = 0;

for (let i = 0; i < accounts.length; i++) {
    accountsBalance += i < accounts.length - 1 ? accounts[i] + ", " : accounts[i];
    totalBalance += accounts[i];
}

console.log("Поточна картка: " + selectedAccount);
console.log("Сума транзакції: " + transaction);
console.log("Стан рахунків: " + accountsBalance);
console.log("Загальний баланс: " + totalBalance);
