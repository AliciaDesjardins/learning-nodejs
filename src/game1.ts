import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({ sigint: true });

// Ask names
const player1Name: string = promptsync("Player 1 name: ") ?? "";
const player2Name: string = promptsync("Player 2 name: ") ?? "";

// Start game
let p1Health: number = minMax(48, 52);
let p2Health: number = minMax(48, 52);
let isP1Turn: boolean = true;
let roundNumber = 0;
while (p1Health > 0 && p2Health > 0) {
    roundNumber = roundNumber + 1;
    console.log("========================================");
    console.log("================ Round " + roundNumber + " ==============");
    console.log("========================================");
    if (isP1Turn) {
        console.log(
            player1Name + " " + p1Health + " vs " + p2Health + " " + player2Name,
        );
    } else {
        console.log(
            player2Name + " " + p2Health + " vs " + p1Health + " " + player1Name,
        );
    }
    console.log("What do you want to do?");
    console.log("1. Heal");
    console.log("2. Attack");
    const actionNumber: number = Number(promptsync("Choose an action: ") ?? "");

    if (actionNumber == 1) {
        const actionType: number = minMax(1, 4); // Random between 1 and 4
        let point = 0;
        if(actionType==1){
            const result = askAddition();
            if(result==true){
                point=minMax(5,10);
            } 
        }
        else if(actionType==2){
            const result=askSubstraction();
            if(result==true){
                point=minMax(10,15)
            }
        }
        else if(actionType==3){
            const result=askMultiplication();
            if(result==true){
                point=minMax(10,20)
            }
        }
        else if(actionType==4){
            const result=askDivision();
            if(result==true){
                point=minMax(12,22)
            }
        }
        if(point==0){
            console.log("You fumbled, no healing for you!");
        } else{
            console.log("You are healing " + point + " points");
        }
        if (isP1Turn) {
            p1Health = p1Health + point;
        } else {
            p2Health = p2Health + point;
        }
    } else if (actionNumber == 2) {
        const typeAttack: number = promptAttack();
        if(typeAttack==1){
            const userGoodAnswer = askAddition();
            if(userGoodAnswer == true){
                const point = minMax(5, 10);

                console.log("You attacked the opponent with " + point + " points");
                if (isP1Turn) {
                    p2Health = p2Health - point;
                } else {
                    p1Health = p1Health - point;
                }
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        } else if (typeAttack==2){
            // Substraction
            const userGoodAnswer = askSubstraction();
            if(userGoodAnswer == true){
                const point = minMax(8, 15);
                console.log("You attacked the opponent with " + point + " points");
                if (isP1Turn) {
                    p2Health = p2Health - point;
                } else {
                    p1Health = p1Health - point;
                }
            }else{
                console.log("You attacked and missed! The other player did not get hit.");
            }
        } else if (typeAttack==3){
            const userGoodAnswer = askMultiplication();
            if(userGoodAnswer == true){
                const point = minMax(10, 20);

                console.log("You attacked the opponent with " + point + " points");
                if (isP1Turn) {
                    p2Health = p2Health - point;
                } else {
                    p1Health = p1Health - point;
                }
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        }
        else if (typeAttack==4){
            const userGoodAnswer = askDivision();
            if(userGoodAnswer == true){
                const point = minMax(15, 25);

                console.log("You attacked the opponent with " + point + " points");
                if (isP1Turn) {
                    p2Health = p2Health - point;
                } else {
                    p1Health = p1Health - point;
                }
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        }
       
    } else {
        console.log("You are loosing a turn by doing an unknown action!");
    }

    // Flip (reverse) the value. True goes False, False goes True. We alternate.
    isP1Turn = !isP1Turn;
}
console.log("Game over");

if (p1Health > 0) {
    console.log(player1Name + " won");
} else {
    console.log(player2Name + " won");
}

// Random between min and max value
function minMax(minValue: number, maxValue: number): number {
    const maximumBoundary: number = maxValue - minValue;
    return Math.round(minValue + Math.random() * maximumBoundary); // Value between 5 and 15
}

function promptAttack(): number {
    let actionNumber: number = 0;
    while (actionNumber === 0 || actionNumber > 4) {
        console.log("What type of attack do you want to do?");
        console.log("1. Addition");
        console.log("2. Substraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        actionNumber = Number(promptsync("Choose an action: ") ?? "");
    }
    return actionNumber;
}

// Ask addition between 0-100.
// Example: 100 + 34
function askAddition(): boolean {
    const leftSide = minMax(0, 100);
    const rightSide = minMax(0, 100);
    const userResponse = Number(
        promptsync("What is " + leftSide + "+" + rightSide + "?") ?? "",
    );
    const isGoodValue = leftSide + rightSide == userResponse;
    if(isGoodValue==false){
        console.log("Unfortunately, the good answer was: "+ (leftSide +rightSide) );
    }
    return isGoodValue;
}

function askSubstraction(): boolean {
    const leftSide = minMax(0, 100);
    const rightSide = minMax(0, 100);
    const userResponse = Number(
        promptsync("What is " + leftSide + "-" + rightSide + "?") ?? "",
    );
    const isGoodValue = leftSide - rightSide == userResponse;
    if(isGoodValue==false){
         console.log("Unfortunately, the good answer was: "+ (leftSide -rightSide) );
     } 
     return isGoodValue;
}

function askMultiplication(): boolean {
    const leftSide = minMax(0, 10);
    const rightSide = minMax(0, 10);
    const userResponse = Number(
        promptsync("What is " + leftSide + "*" + rightSide + "?") ?? "",
    );
    const isGoodValue = leftSide * rightSide == userResponse;
    if(isGoodValue==false){
         console.log("Unfortunately, the good answer was: "+ (leftSide *rightSide) );
    }
    return isGoodValue;
}
function askDivision(): boolean {
    const result = minMax(0, 20);
    const rightSide = minMax(0, 10);
    const leftSide = rightSide * result;
    const userResponse = Number(
        promptsync("What is " + leftSide + "/" + rightSide + "?") ?? "",
    );
    const isGoodValue = result == userResponse;
    if(isGoodValue==false){
        console.log("Unfortunately, the good answer was: "+ (leftSide /rightSide) );
    }
    return isGoodValue;
}