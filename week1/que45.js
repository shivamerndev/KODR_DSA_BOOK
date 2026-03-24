// Q45	Project - Restaurant v1.0
const prompt = require("prompt-sync")()

let choice;

let bill = 0;

do {
    console.log("Select your choice: \n1. Dessert \n2. Snacks \n3. Bill \n4. Exit")
    choice = Number(prompt("Select Any Option : "))
    switch (choice) {
        case 1:
            let dessert;
            do {
                console.log("Select dessert: \n1. Rasgulla \n2. Gulab Jamun \n3. Exit")
                dessert = Number(prompt("Select Any Option : "))
                if (dessert == 1) {
                    bill += 100;
                } else if (dessert == 2) {
                    bill += 200;
                }
            } while (dessert !== 3);
            break;
        case 2:
            let snacks;
            do {
                console.log("Select snacks: 🍉🍇🍉🍉🍇🍎🍑🍒🍌 \n1. Chips \n2. Kurkure \n3. Exit")
                snacks = Number(prompt("Enter Any Option : "))
                if (snacks === 1) {
                    bill += 100;
                } else if (snacks === 2) {
                    bill += 200;
                }
            } while (snacks !== 3);
            break;
        case 3:
            console.log(bill)
            break;

        case 4:
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid choice");
    }

} while (choice !== 4);