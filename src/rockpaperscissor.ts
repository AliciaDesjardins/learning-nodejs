console.log("Rock, Paper, Scissor");

function whoIsWinning(p1:string, p2:string):string {
    if(p1=="r"&&p2=="r"){
        return"tie";
    }
    else if(p1=="r"&&p2=="p"){
        return"p2";
    }
    else if(p1=="r"&&p2=="s"){
        return"p1";
    }
    else if(p1=="p"&&p2=="r"){
        return"p1";
    }
    else if(p1=="p"&&p2=="p"){
        return"tie";
    }
    else if(p1=="p"&&p2=="s"){
        return"p2";
    }
    else if(p1=="s"&&p2=="r"){
        return"p2";
    }
    else if(p1=="s"&&p2=="p"){
        return"p1";
    }
    else if(p1=="s"&&p2=="s"){
        return"tie";
    }
    return "Invalid inputs: No winner"; 
}
function format(s:string):string {
   
    if( s=="r"){
        return"rock";
    
      }if( s=="p"){
        return"paper";
    
      }if( s=="s"){
        return"scissor";
    
      }
  return "Invalid inputs, here is what I have received: " + s;
}
// Setting players values
let p1:string = "p";
let p2:string = "s";
// Evaluating the winner
const result: string = whoIsWinning(p1,p2);
// Printing in the terminal the result
console.log("P1:" +format(p1));
console.log("P2:" +format(p2));
console.log("Winner:" +result);
