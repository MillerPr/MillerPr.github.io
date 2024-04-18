// Trivia function
// Check string against lower case
function trivia(){
  let userGuess = document.getElementById('triviaInput').value;
  console.log(userGuess.toLowerCase());
  let evaluation
  userGuess.toLowerCase().trim() === "paris" ? evaluation = "Correct!" : evaluation = "Incorrect."
  //Using RegEx
  // /^Paris$/i.test(userGuess) ? evaluation = "Correct!" : evaluation = "Incorrect."
  document.getElementById('responseDiv').innerText=`You guessed ${userGuess}. ${evaluation}`
  document.getElementById('triviaInput').value = ""
}

// Function to check odd or even
// Using ternary operator
// Test for edge cases
// Using backticks for template literals and string interpolation.
function evalNum() {
  let userNum = document.getElementById('numInput').value;
  console.log(userNum);
  let checkValue = Number(userNum);
  console.log(checkValue);
  let output = document.getElementById("evalResponseDiv");
  Number.isNaN(checkValue) || checkValue > 99999 || checkValue < 10000 || !(Number.isInteger(checkValue)) ?
  output.innerText = `${userNum} is not a valid 5-digit number.` :
  checkValue % 2 === 0 ? output.innerText = `${userNum} is an even number.` : output.innerText = `${userNum} is an odd number.`;
  document.getElementById('numInput').value = ""
}
