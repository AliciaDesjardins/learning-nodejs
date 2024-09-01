// Question 1
// Create a function to calculate the area of rectangle. The function
// takes 2 parameters: x and y. The function returns a number that is
// the result of the area

// Question 2
// What side of the rectangle is bigger: x (return true), y (return false)
function area (x:number,y:number):number{
    return x*y;
}
//console.log(area(1,2));

function printarea(x:number,y:number):string{
    let output = "";
    for(let i=0;i<x;i++){ // 3
        for(let r=0;r<y;r++){ // 10
            output += "X";
        }
        output += "\n"
    }
    return output;
}
console.log(printarea(1,2))

function printSquare(x:number):string{
    let output = "";
    for(let i=0;i<x;i++){ // 3
        for(let r=0;r<x;r++){ // 10
            output += "X";
        }
        output += "\n"
    }
    return output;
}

// console.log(printSquare(1000));

function printTriangle(x:number):string{
    let output = "";
    let h=x;
    for(let i=0;i<x;i++){ // 3
        for(let r=0;r<h;r++){ // 10
            output += "X";
        }
        h--;
        output += "\n"
    }
    return output;
}
//console.log(printTriangle(1000))

function printTriangle2(x:number):string{
    let output = "";
    let h=x; // 4
    for(let i=0;i<x;i++){ // 4
        for(let r=0;r<x;r++){ // 4
            if(r<h){
                output += "X";
            } else {
                output+="O";
            }
        }
        output += "     H VALUE IS "+h+"\n"
        h--; //3.....2.....1
    }
    return output;
}
console.log(printTriangle2(3))