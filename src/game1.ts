import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({ sigint: true });
enum Actions {
    Unknown = 0,
    Heal = 1,
    Attack = 2
}

enum AttackTypes {
    Unknown = 0,
    Addition = 1,
    Substraction = 2,
    Multiplication = 3,
    Division = 4
}

interface Player {
    name: string;
    actions: boolean[];
    health: number;
}

interface Game {
    isP1Turn: boolean;
    roundNumber: number;
}

const player1: Player = {
    name: promptsync("Player 1 name: ") ?? "",
    actions: [false, false, false, false],
    health: minMax(48, 52)
};

const player2: Player = {
    name: promptsync("Player 2 name: ") ?? "",
    actions: [false, false, false, false],
    health: minMax(48, 52)
};

const game: Game = {
    isP1Turn: true,
    roundNumber: 0
};

while (player1.health > 0 && player2.health > 0) {
    game.roundNumber++;
    showRoundTitle(game);
    showPlayersHealth(game, player1, player2);
    const actionNumber: Actions = askAction();

    if (actionNumber == Actions.Heal) {
        health(game, player1, player2);
    } else if (actionNumber == Actions.Attack) {
        attack(game, player1, player2);
    } else {
        console.log("You are loosing a turn by doing an unknown action!");
    }

    // Flip (reverse) the value. True goes False, False goes True. We alternate.
    game.isP1Turn = !game.isP1Turn;
}
console.log("Game over");
showWinner(player1, player2);

function showWinner(player1: Player, player2: Player): void {
    const winner: Player = player1.health>0 ? player1 : player2;
    console.log(winner.name + " won");
}

// Random between min and max value
function minMax(minValue: number, maxValue: number): number {
    const maximumBoundary: number = maxValue - minValue;
    return Math.round(minValue + Math.random() * maximumBoundary); // Value between 5 and 15
}

// Ask the user what kind of attack he wants to do
function promptAttack(listOfActions: boolean[]): AttackTypes {
    let actionNumber: number = 0;
    while (actionNumber === 0 || actionNumber > 4 || listOfActions[actionNumber - 1] == true) {
        console.log("What type of attack do you want to do?");
        if (listOfActions[0] == false) {
            console.log("1. Addition");
        }
        if (listOfActions[1] == false) {
            console.log("2. Substraction");
        }
        if (listOfActions[2] == false) {
            console.log("3. Multiplication");
        }
        if (listOfActions[3] == false) {
            console.log("4. Division");
        }
        actionNumber = Number(promptsync("Choose an action: ") ?? "");
    }
    let actionEnum: AttackTypes = AttackTypes.Unknown;
    if (actionNumber == 1) {
        actionEnum = AttackTypes.Addition;
    } else if (actionNumber == 2) {
        actionEnum = AttackTypes.Substraction;
    }
    else if (actionNumber == 3) {
        actionEnum = AttackTypes.Multiplication;
    }
    else if (actionNumber == 4) {
        actionEnum = AttackTypes.Division;
    } else {
        actionEnum = AttackTypes.Unknown;
    }
    if (actionEnum != AttackTypes.Unknown) {
        listOfActions[actionNumber - 1] = true;
    }
    return actionEnum;
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
    if (isGoodValue == false) {
        console.log("Unfortunately, the good answer was: " + (leftSide + rightSide));
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
    if (isGoodValue == false) {
        console.log("Unfortunately, the good answer was: " + (leftSide - rightSide));
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
    if (isGoodValue == false) {
        console.log("Unfortunately, the good answer was: " + (leftSide * rightSide));
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
    if (isGoodValue == false) {
        console.log("Unfortunately, the good answer was: " + (leftSide / rightSide));
    }
    return isGoodValue;
}

function showRoundTitle(game: Game): void {
    console.log("========================================");
    console.log("================ Round " + game.roundNumber + " ==============");
    console.log("========================================");
}

function showPlayersHealth(game: Game, player1: Player, player2: Player): void {
    if (game.isP1Turn) {
        console.log(
            player1.name + " " + player1.health + " vs " + player2.health + " " + player2.name,
        );
    } else {
        console.log(
            player2.name + " " + player2.health + " vs " + player1.health + " " + player1.name,
        );
    }
}

function askAction(): Actions {
    console.log("What do you want to do?");
    console.log("1. Heal");
    console.log("2. Attack");
    const actionNumber: number = Number(promptsync("Choose an action: ") ?? "");
    if (actionNumber == 1) {
        return Actions.Heal
    } else if (actionNumber == 2) {
        return Actions.Attack;
    } else {
        return Actions.Unknown;
    }
}

function health(game: Game, player1: Player, player2: Player):void {
const actionType: AttackTypes = minMax(1, 4); // Random between 1 and 4
    let point = 0;
    if (actionType == AttackTypes.Addition) {
        const result = askAddition();
        if (result == true) {
            point = minMax(10, 15);
        }
    }
    else if (actionType == AttackTypes.Substraction) {
        const result = askSubstraction();
        if (result == true) {
            point = minMax(15, 20)
        }
    }
    else if (actionType == AttackTypes.Multiplication) {
        const result = askMultiplication();
        if (result == true) {
            point = minMax(20, 25)
        }
    }
    else if (actionType == AttackTypes.Division) {
        const result = askDivision();
        if (result == true) {
            point = minMax(20, 30);
        }
    }
    if (point == 0) {
        console.log("You fumbled, no healing for you!");
    } else {
        console.log("You are healing " + point + " points");
    }
    if (game.isP1Turn) {
        player1.health += point;
    } else {
        player2.health += point;
    }
}

function attack(game: Game, player1: Player, player2: Player):void {
    let typeAttack: AttackTypes;
        if (game.isP1Turn) {
            typeAttack = promptAttack(player1.actions);
        } else {
            typeAttack = promptAttack(player2.actions);
        }
        if (typeAttack == AttackTypes.Addition) {
            const userGoodAnswer = askAddition();
            if (userGoodAnswer == true) {
                const point = minMax(5, 10);

                console.log("You attacked the opponent with " + point + " points");
                if (game.isP1Turn) {
                    player2.health -= point;
                } else {
                    player2.health -= point;
                }
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        } else if (typeAttack == AttackTypes.Substraction) {
            // Substraction
            const userGoodAnswer = askSubstraction();
            if (userGoodAnswer == true) {
                const point = minMax(8, 15);
                console.log("You attacked the opponent with " + point + " points");
                if (game.isP1Turn) {
                    player2.health -= point;
                } else {
                    player1.health -= point;
                }
                if (game.isP1Turn) {
                    player1.actions[0] = false;
                } else {
                    player2.actions[0] = false;
                }
            } else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        } else if (typeAttack == AttackTypes.Multiplication) {
            const userGoodAnswer = askMultiplication();
            if (userGoodAnswer == true) {
                const point = minMax(10, 20);

                console.log("You attacked the opponent with " + point + " points");
                if (game.isP1Turn) {
                    player2.health -= point;
                } else {
                    player1.health -= point;
                }
                if (game.isP1Turn) {
                    player1.actions[0] = false;
                    player1.actions[1] = false;
                } else {
                    player2.actions[0] = false;
                    player2.actions[1] = false;
                }
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        }
        else if (typeAttack == AttackTypes.Division) {
            const userGoodAnswer = askDivision();
            if (userGoodAnswer == true) {
                const point = minMax(15, 25);

                console.log("You attacked the opponent with " + point + " points");
                if (game.isP1Turn) {
                    player2.health -= point;
                } else {
                    player1.health -= point;
                }
         
                resetAllActions(game.isP1Turn?player1:player2);
            
            }
            else {
                console.log("You attacked and missed! The other player did not get hit.");
            }
        }
}
function resetAllActions(player: Player):void {
    player.actions[0] = false;
    player.actions[1] = false;
    player.actions[2] = false;
    player.actions[3] = false;
}