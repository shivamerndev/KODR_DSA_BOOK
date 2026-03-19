/* Q20 Shop discount  */

const prompt = require("prompt-sync")()

let amount = Number(prompt("Enter amount : "))

let discount = (num) => amount - amount * num / 100;

if (500 <= amount && amount <= 1000) {

    console.log("You will get 5% ", discount(5))

}
else if (1000 <= amount) {

    console.log("You will get 10% ", discount(10))

} else {
    console.log("you will get 0% ", amount)
}