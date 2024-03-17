import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({ sigint: true });

const x: number = Number(promptsync("choose a celcius") ?? "");
if (Number.isNaN(x)) {
  console.error("This is not a number, sorry and bye");
  process.exit();
}
const far: number = (x * 9) / 5 + 32;
console.log("your answer is " + far + "f");
