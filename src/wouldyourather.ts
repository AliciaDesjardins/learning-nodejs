const prompt = require("prompt-sync")({sigint:true});

let goodAnswer: number =0; // Can change

const answer1 = prompt("would you rather have 1 million dollars(type 1) or have never ending money(type 2)?")??"";
const answer1LowerCase = answer1.toLowerCase(); // Cannot change

if (answer1LowerCase =="1"){
    console.log("you would have a limit!");
} else if (answer1LowerCase=="2"){
    console.log("Dont forget to share");
    goodAnswer=goodAnswer+1;
} else {
    console.log("You did not answer the question properly");
}

console.log("Your score is " + goodAnswer + " out of 2");

const answer2 = prompt("would you rather have all the answers in the world (type 1) or get all A+'s on your report card (type 2)?")??"";;
const answer2LowerCase = answer2.toLowerCase(); // Cannot change
if (answer2LowerCase =="1"){
    console.log("you would know every thing you need to know");
}
else if (answer2LowerCase=="2"){
    console.log("you would never need to study");
}else {
    console.log("You need to answer by 1 or 2.");
}
goodAnswer=goodAnswer+1;
console.log("Your score is " + goodAnswer + " out of 2");