// For example
//                       0   1   2    3     4     5    6    7    8    9    10
let houses: number[] = [326,500, 328,331, 878,  545,  222, 233 ,987 ,876 ,325];
// [0,1,2,3,4,5,6,7.......]
console.log("There is a total of " + houses.length);
for (let i = 0; i<houses.length;i++) {
    console.log(houses[i]);
}

// While example
let j = 0;
while (j < houses.length) {
    if (houses[j]==326){
        console.log("This is my house, the " + houses[j]);
    } 
    else if (houses[j]<500){
        console.log(houses[j] + " Springpark Cir.");
    } 
    else {
        console.log("We found an error with the value " + houses[j]);
    }
    j++;
}


for(let x = 0 ; x < houses.length; x++){
    const isEven = houses[x] % 2 == 0;
    if(isEven) {
        console.log("The house " + houses[x] + " is on the same side of my street");
    } else {
        console.log("The house " + houses[x] + " is on Eliana side");
    }
}