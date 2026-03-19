//  Q14 Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.
const prompt = require("prompt-sync")()

let gen = prompt("Enter your gender : ")

let gender = gen.toLowerCase()
let pronoun = gender === "m" ? "Good morning Sir" : gender === "f" ? "Good morning Ma'am" : `Wrong Input => ${gender}`

console.log(pronoun)