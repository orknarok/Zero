// Завдання: https://shpp.gitbook.io/zero/tutorials/strings/words-counter

let input = prompt("Enter the words.");
let wordsCounter = 0;

for (let i = 0, char, isWord; i < input.length; i++) {
    char = input.charCodeAt(i);
    isWord = false;

    while ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
        isWord = true;
        char = input.charCodeAt(++i);
    }

    if (isWord) {
        wordsCounter++;
    }
}

console.log(wordsCounter);
