import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({sigint:true});

// 1) Ask for a number
// 2) Ask for a second number
// 3) Add the two numbers
// 4) Write the user numbers and the sum
// 5) Write to the user if the number if under 100
const answer1:number = Number(promptsync("choose a number ")??"");
if(Number.isNaN(answer1)){
    console.error("This is not a number, sorry and bye");
    process.exit();
}
const answer2:number = Number(promptsync("choose a second number ")??"");
if(Number.isNaN(answer2)){
    console.error("This is not a number, sorry and bye");
    process.exit();
}
const sum:number=answer1+answer2;
console.log(answer1 + "+" + answer2 + "=" + sum)
if(sum <100){
    console.log("your number is under 100") 
} else{
    console.log("your number is a big one!") 
}