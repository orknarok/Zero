// Завдання: https://shpp.gitbook.io/zero/tutorials/strings/words-counter

let words = prompt("Enter the words.");
let wordsCounter = 0;

for (let i = 0, char, nextChar; i < words.length - 1; i++) {
    char = words.charCodeAt(i);
    nextChar = words.charCodeAt(i + 1);

    if ((char >= 65 && char <= 92) || (char >= 97 && char <= 122)) {
        if (i == 0) {
            wordsCounter++;
        }
    }

    if (char < 65 || (char > 92 && char < 97) || char > 122) {
        if (
            (nextChar >= 65 && nextChar <= 92) ||
            (nextChar >= 97 && nextChar <= 122)
        ) {
            wordsCounter++;
        }
    }
}

console.log(wordsCounter);
