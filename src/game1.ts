import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({sigint:true});

// Ask names
const player1Name:string = promptsync("Player 1 name: ")??"";
const player2Name:string = promptsync("Player 2 name: ")??"";

// Start game
let p1Health:number = minMax(48,52);
let p2Health:number = minMax(48,52);
let isP1Turn:boolean=true;
let roundNumber = 0;
while(p1Health>0 && p2Health>0){
    roundNumber = roundNumber+1;
    console.log("========================================")
    console.log("================ Round " + roundNumber + " ==============");
    console.log("========================================")
    if(isP1Turn){
        console.log(player1Name + " " + p1Health + " vs " + p2Health + " " + player2Name); 
    } else {
        console.log(player2Name + " " + p2Health + " vs " + p1Health + " " + player1Name);
    }
    console.log("What do you want to do?");
    console.log("1. Heal");
    console.log("2. Attack");
    const actionNumber:number = Number(promptsync("Choose an action: ")??"");
    
    if(actionNumber==1){
        const point  = minMax(5,15); 
        console.log("You are healing " + point + " points");

        if(isP1Turn){
            p1Health = p1Health + point;
        } else {
            p2Health = p2Health + point;
        }
    }
    else if(actionNumber==2){
        const point = minMax(5,15); 
    
        console.log("You attacked the opponent with " + point + " points");
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
    console.log(player1Name+" won");
} else {
    console.log(player2Name+" won");
}

function minMax(minValue:number, maxValue:number): number {
    const maximumBoundary: number = maxValue-minValue;
    return  Math.round(minValue + Math.random()*maximumBoundary); // Value between 5 and 15
}