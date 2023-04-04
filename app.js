let userName = prompt("Please enter your Name.");
let playAgain = true;
let history = {};
if(userName == null){
    alert('Bye, thanks for not playing')
    playAgain = false
}

while(playAgain === true){ //play again loop
let sNum = Math.floor(Math.random() * 10) + 1;
let input = prompt(`${userName}, guess a number between 1 and 10`);
if(input == null){
    alert('Bye, thanks for not playing')
    break;
}
let numOfGuess = [];
if(!isNaN(input)){
numOfGuess.push(input);
}
let number = Number(input);
let counter = 1;

while(number !== sNum){
    if(number == null || number === 0){
        alert('Bye, thanks for not playing');
        break;
    }
if (Number.isNaN(number)){
    alert("Give a valid number please");
    number = Number(prompt("Guess again"));
    numOfGuess.push(number);
    counter++;
    }
if (number < sNum){
    number = Number(prompt('Guess Higher'));
    numOfGuess.push(number);
    counter++;
}else if (number > sNum){
    number = Number(prompt('Guess Lower'));
    numOfGuess.push(number);
    counter++;
    }
}
if(number == null || number === 0){
    break;
}
//feature 7
if (history[userName] !== undefined) {
    let numGuesses = numOfGuess.length; 
    let previousGuesses = history[userName].length;
        if (number === sNum && previousGuesses > numGuesses){
        let scoreBeat = previousGuesses - numGuesses;
    alert(`That's Correct ${userName}, you beat your previous score by ${scoreBeat}. `);
    }
    else if (number === sNum && numGuesses < previousGuesses){
        let scoreBeat = numGuesses - previousGuesses;
        alert(`That's Correct ${userName}, you got ${scoreBeat} better last time.`);
    } else { 
        alert(`That's Correct ${userName}, you got the same score!`);
}
} else {
alert(`Congrats ${userName}, you are Correct! You got it in ${counter} guess, your previous guesses were ${numOfGuess}!`);
}

if (number == null) {
    break;
}

history[userName];
history[userName] = numOfGuess;


playAgain = prompt('Do you want to play again?')
if(playAgain.toLowerCase() == 'yes'){
    playAgain = true
}else{
    alert('Thanks for playing!')
    playAgain = false
}
}


 
