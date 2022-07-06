// Завдання: https://shpp.gitbook.io/zero/tutorials/strings/longest-word

let input = prompt("Enter the words.");
let words = [];

for (let i = 0, j = 0, char, flag, buffer = ""; i < input.length; i++) {
    char = input.charCodeAt(i);

    while ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
        flag = 1;
        buffer += input[i];
        char = input.charCodeAt(++i);
    }

    if (flag == 1) {
        words[j++] = buffer;
        buffer = "";
        flag = 0;
    }
}

let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
        longestWord = words[i];
    }
}

console.log(longestWord);
