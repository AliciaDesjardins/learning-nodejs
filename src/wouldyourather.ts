const prompt = require("prompt-sync")({sigint:true});

let goodAnswer: number =0; // Can change

const answer1 = prompt("would you rather have 1 million dollars?Or have never ending money?")??"";
const answer1LowerCase = answer1.toLowerCase(); // Cannot change

if (answer1LowerCase =="1 millon dollars"){
    console.log("you would have a limit!");
} else if (answer1LowerCase.includes("never ending money")){
    console.log("Dont forget to share");
    goodAnswer=goodAnswer+1;
} else {
    console.log("You did not answer the question properly");
}
console.log("Your score is " + goodAnswer + " out of 1");