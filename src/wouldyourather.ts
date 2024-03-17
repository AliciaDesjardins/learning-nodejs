import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({ sigint: true });

const questions: string[] = [
  "would you rather have 1 million dollars(type 1) or have never ending money(type 2)?",
  "would you rather have all the answers in the world (type 1) or get all A+'s on your report card (type 2)?",
  "would you rather be rich and ugly (type 1) or poor and beautiful(type 2)?",
];

const answerType1: string[] = [
  "you would have a limit!",
  "you would know every thing you need to know",
  "You might be alone with your money",
];

const answerType2: string[] = [
  "Dont forget to share",
  "you would never need to study",
  "You might have a lot of friend",
];

const rightAnswer: number[] = [1, 0, 1];

let goodAnswer: number = 0; // Can change
for (let i = 0; i < questions.length; i++) {
  const answer: string = promptsync(questions[i]) ?? "";
  if (answer == "1") {
    console.log(answerType1[i]);
  } else if (answer == "2") {
    console.log(answerType2[i]);
  } else {
    console.log("You did not answer the question properly");
  }
  if (Number(answer) - 1 == rightAnswer[i]) {
    goodAnswer++;
  }
  console.log("Your score is " + goodAnswer + " out of " + questions.length);
}
