console.log("Convert Decimal Value to Binary Value");

function convertDecimalToBinary(decimal: number): string {
    let result = "";
    while(decimal >0){
        // Step 1: Divided by 2
        let x = decimal / 2;
        // Step 2: Check remainder
        let remainder = decimal % 2;
        // Step 3: If we have a remainder put 1, else 0
        if (remainder==1){
            result="1"+result;
        }else{
            
            result="0"+result;
        }
        // Step 4: Take off the decimal, and repeat
        decimal=Math.floor(x);
    }
    return result;
}

console.log(convertDecimalToBinary(92));
