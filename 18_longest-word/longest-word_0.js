// Завдання: https://shpp.gitbook.io/zero/tutorials/strings/longest-word

let string = prompt("Введіть слова");
let array = [];
let buffer = "";

for (let i = 0, flag = 0, j = 0, char; i < string.length; i++) {
    char = string.charCodeAt(i);

    if (char < 65 || char > 122 || (char > 90 && char < 97)) {
        flag = 0;

        if (buffer != "") {
            array[j++] = buffer;
            buffer = "";
        }
    } else {
        flag = 1;
        buffer += string[i];

        if (buffer != "" && i == string.length - 1) {
            array[j++] = buffer;
            buffer = "";
        }
    }
}

let longestWord = "";

for (let i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
        longestWord = array[i];
    }
}

console.log(longestWord);
