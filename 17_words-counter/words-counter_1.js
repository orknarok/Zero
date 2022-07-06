// Завдання: https://shpp.gitbook.io/zero/tutorials/strings/words-counter

let words = prompt("Enter the words.");
let wordsCounter = 0;

for (let i = 0, flag = 0, char; i < words.length; i++) {
    char = words.charCodeAt(i);

    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
        if (flag == 0) {
            wordsCounter++;
            flag = 1;
        }
    } else {
        flag = 0;
    }
}

console.log(wordsCounter);
