let userName = prompt("Please enter your Name.")
let playAgain = true
while(playAgain){
let sNum = Math.floor(Math.random() * 10) + 1;
let input = prompt(`${userName}, guess a number between 1 and 10`)
let numOfGuess = [];
if(!isNaN(input)){
numOfGuess.push(input);
}
let number = Number(input);
let counter = 1;

while(number !== sNum){
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

if (number === sNum){
    alert(`Congrats ${userName}, you are Correct! You got it in ${counter} guess, your previous guess were ${numOfGuess}!`)
}
playAgain = prompt('Do you want to play again? If so, type \'yes\'.')
if(playAgain == 'yes'){
    playAgain = true
}else{
    alert('Thanks for playing!')
    playAgain = false
}
}


 
