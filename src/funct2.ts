function whatYearOld(yearToCheck:number):number{
    const currentYear = new Date().getFullYear();
    if(yearToCheck>currentYear){
        throw new Error("Your date is above the current year. Impossible.");
    }
    return currentYear-yearToCheck;
}
console.log(whatYearOld(1984));

console.log("alicia desjardins");
console.log("my name is alicia .I love school,but it is tiring");
console.log("I learned some more about funcions.Today I did something to tell how meny years old somting is.")
function findMyear(age:number):number{
    const currentYear = new Date().getFullYear();
    return currentYear-age;
}

console.log(findMyear(40));