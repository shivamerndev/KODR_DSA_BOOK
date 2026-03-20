// Q22 Accept an English alphabet from user and check if it is a consonant or a vowel.

let prompt = require("prompt-sync")()

let inp = prompt("Enter a String : ")
let vowel = 0;
inp = inp.toLowerCase();

for (let i = 0; i < inp.length; i++) {
    if ("aeiou".includes(inp[i])) {
        vowel++;
    }
}

if (inp.length === 1) {
    if ("aeiou".includes(inp)) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
}
console.log("Vowel count:", vowel);