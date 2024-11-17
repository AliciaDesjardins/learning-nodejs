const prompt = require("prompt-sync")({ sigint: true });
function encrypt(msg: string): string {
    let newMessage = "";
    for (let i = 0; i < msg.length; i++) {
        const char = msg.charCodeAt(i) // Get the ASCII code
        const isLowerCase = (char >= 97 && char <= 122);
        const isUpperCase = (char >=65 && char <= 90);
        if (isLowerCase || isUpperCase) {
            const asciiConvertion = isLowerCase?97:65;
            const alphaOrder = char - asciiConvertion; // ASCII code to letter number form 0 to 25
            const newAlphaOrder = 25 - alphaOrder; // Apply the secret code
            newMessage = newMessage + String.fromCharCode(newAlphaOrder + asciiConvertion); // Bring back the letter number to ASCII code
        }
        else {
            newMessage += msg[i];
        }
    }
    return newMessage;
}

function deencrypt(msg: string): string {
    return encrypt(msg);
}

const answer: string = prompt("What is your message:") ?? "";
const answerEncrypt = encrypt(answer);
console.log("Encrypt:" + answerEncrypt);
console.log("Decrypt:" + deencrypt(answerEncrypt));