const prompt = require("prompt-sync")({sigint:true});

const questions: string[] = [
    "would you rather have 1 million dollars(type 1) or have never ending money(type 2)?",
    "would you rather have all the answers in the world (type 1) or get all A+'s on your report card (type 2)?",
];

const answerType1: string[] = [
    "you would have a limit!",
    "you would know every thing you need to know"
];

const answerType2: string[] = [
    "Dont forget to share",
    "you would never need to study"
];

let goodAnswer: number =0; // Can change

// QUESTION 1 =====> in the list 0
const answer1:string = prompt(questions[0])??"";
const answer1LowerCase:string = answer1.toLowerCase(); // Cannot change

if (answer1LowerCase =="1"){
    console.log(answerType1[0]);
} else if (answer1LowerCase=="2"){
    console.log(answerType2[0]);
    goodAnswer=goodAnswer+1;
} else {
    console.log("You did not answer the question properly");
}

console.log("Your score is " + goodAnswer + " out of 2");

// QUESTION 2 =====> in the list 1
const answer2 = prompt(questions[1])??"";;
const answer2LowerCase = answer2.toLowerCase(); // Cannot change
if (answer2LowerCase =="1"){
    console.log(answerType1[1]);
    goodAnswer=goodAnswer+1;
}
else if (answer2LowerCase=="2"){
    console.log(answerType2[1]);
}else {
    console.log("You need to answer by 1 or 2. Unfortunately, you answered:" + answer2);
}

console.log("Your score is " + goodAnswer + " out of 2");