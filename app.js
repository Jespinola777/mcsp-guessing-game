let input = prompt("guess a number")
let number = Number(input);

if (Number.isNaN(number)){
    alert("Give a valid number please")
} else {
    alert("Got a Number");
}
