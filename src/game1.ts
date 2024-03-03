import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({sigint:true});

let p1Health:number = 100;
let p2Health:number = 100;
let isP1Turn:boolean=true;
while(p1Health>0 && p2Health>0){
    if(isP1Turn){
        console.log("Player 1 turn your health is "+ p1Health); 
    } else {
        console.log("Player 2 turn your health is "+ p2Health);
    }
    console.log("What do you want to do?");
    console.log("1. Heal");
    console.log("2. Attack");
    const actionNumber:number = Number(promptsync("Choose an action: ")??"");
    
    if(actionNumber==1){
        const point = 5;
        console.log("You are healing " + point + "points");
        if(isP1Turn){
            p1Health = p1Health + point;
        } else {
            p2Health = p2Health + point;
        }
    }
    else if(actionNumber==2){
        const point = 10;
        console.log("You attacked the opponent with " + point + "points");
        if(isP1Turn){
            p2Health = p2Health - point;
        } else {
            p1Health = p1Health - point;
        }
    } else {
        console.log("You are loosing a turn by doing an unknown action!");
    }




    // Flip (reverse) the value. True goes False, False goes True. We alternate.
    isP1Turn = !isP1Turn;
}
console.log("Game over");

if(p1Health>0){
    console.log("Player 1 won");
} else {
    console.log("Player 2 won");
}