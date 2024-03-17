const prompt = require("prompt-sync")({ sigint: true });

console.log("Hello Bunny");
const answer: string = prompt("What do you like?") ?? "";
const answerLowerCase: string = answer.toLowerCase();
const c1: boolean = answerLowerCase == "carrots";
if (c1) {
  console.log("Yummmmmmy");
} else if (answerLowerCase == "carrot") {
  console.log("Only one! Still like it!");
} else {
  console.log("Yauk!");
}

const answer2 = prompt("What do you like to do?") ?? "";
const c2: boolean = answer2.includes("jump");
if (c2) {
  if (answer2.includes("on")) {
    console.log("that's dangerous");
  } else {
    console.log("Me too!");
  }
} else {
  console.log("What?");
}
