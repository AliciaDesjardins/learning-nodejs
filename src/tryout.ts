let question = 1.18
const money = [0.01, 0.05, 0.10, 0.25];

// If question is 1.05$ ----> 4x0.25 + 1x0.05
// What you need to do:
//      Find the less amount of coin to give me the amount of the question
// What you think:
//      1) You start with the biggest coin, if it does not fit, you go to the next biggest
//      2) If it fits, you take the maximum ammount. E.g. 0.22
let amountCent = Math.ceil(question * 100);
let answer = Array(money.length).fill(0); // [0,0,0,0]
for(let index=money.length-1;index>=0;index--){
    const cointCent = money[index] * 100;
    let qte = Math.floor(amountCent/cointCent);
    answer[index] = qte;
    amountCent  = amountCent - (qte*cointCent);
}
console.log(answer);
    