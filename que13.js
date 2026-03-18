  // Q13 Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))
  
const prompt = require("prompt-sync")()

  let gen = prompt("Enter Your Gender : ")

    let gender = gen === "male" ? "Sir" : "Mam"

    console.log(`Good Morning ${gender}`)