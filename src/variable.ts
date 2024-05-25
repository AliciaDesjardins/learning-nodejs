let x=1;
let y=9;
let r4=x+y;

print(r4);
print(x+y);

function print(r:number): void {
    console.log(r);
}
function printstr(r:string): void {
    console.log(r);
}


function alicia(first:string,last:string):string{
    return first + " " + last;
}

printstr(alicia('patrick', 'desjardins'));

const firstlast:string = alicia('patrick', 'desjardins');
printstr(firstlast);


function len(first:string,last:string):number{
    return first.length + last.length;
}

print(len("a","bc"));




function f1(p1:number):number {
    return p1;
}

function f2(p1:number):number {
    return p1;
}

function f3(p1:number):number {
    return p1;
}

console.log(f1(1));

console.log(f1(f2(2)));

function perimeter(side1:number, side2:number): number {
    return side1*2+side2*2;
}

console.log(perimeter(10,2));
console.log("area is:" + area(10,2))
function area(side1:number, side2:number): number {
    return side1*side2;
}


// 
//(c × 9/5) + 32 = return
function convertCelciusToFarenheit(c:number):number{
    return (c*9/5)+32;
}

console.log(convertCelciusToFarenheit(-17.75));

//(F − 32) × 5/9 = 0°C
function convertFarenheitToCelcius(f:number):number {
    return (f-32) * 5/9; 
}

console.log(convertFarenheitToCelcius(0));
console.log(convertCelciusToFarenheit(-17.7777777777778));
//0.00000000000000426325641456060