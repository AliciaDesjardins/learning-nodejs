//console.log("monkey")
for(let x=8;x>-1;x--){
    // Define what we want to print
    let value:string = x.toString();
    if(x==4){
        value = "monkey";
    }
    else if(x==1){
        value = "pig";
    }
    // We are acting and printing using console.log
    console.log(value);
}