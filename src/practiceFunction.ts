import prompt_sync from "prompt-sync";
const promptsync = prompt_sync({ sigint: true });

console.log("Practice Function");
// const daddy: string = "Patrick";
// function buildName( age: number, first:string, last:string):string{
//     const newAge = age + 1;
//     return first+" "+last + ", next year age is " + newAge + "(current age is "+age+"). My dad name is " + daddy;
// }
// console.log(buildName(9, "Alicia", "Desjardins"));
let x = 0;
let y = 0;
function move(key: string): void {
    if (key == "w") {
        y += 1;
        // y++;
        // y=y+1;
    } else if (key == "d") {
        x += 1;
    }
    else if (key == "a") {
        x -= 1;
    }
    else if (key == "s") {
        y -= 1;
    }
    // console.log("Coordinate: [" + x + ",  " + y + "]");
    console.log("The user moved using the key: " + key);
    showMap();
    if(x==4&&y==4){
        console.log("You Win!");
    }
}

function showMap(): void {
    console.clear();
    for(let height= 4;height>=0;height--){
        let line = "";
        for (let width  = 0 ; width <5;width++){
            if( x == width && y == height){
                line += "[ "+String.fromCharCode(9619)+" ]"
            }
            else {
                // line +="[" + width+","+height+"]";
                line += '[   ]';
            }
        }
        console.log(line);
    }
}

// 0,0
showMap();
// move("w"); // 0,1
// move("d"); // 1,1
// move("d"); // 2,1
// move("w"); // 2,2
// move("d");
// move("d");
// move("w");
// move("w");

while(true){
    let key = promptsync("");
    move(key);
}