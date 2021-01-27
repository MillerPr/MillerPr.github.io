function evalNumber(){
  var inputValue = prompt("Enter any five-digit number without commas")
  if (isNaN(inputValue)||inputValue>99999||inputValue<10000||!Number.isInteger(inputValue)) {
    alert(inputValue + " is not a valid 5-digit number.")
  } else if (inputValue%2==0){
    alert(inputValue + " is an even number.")
  } else {
    alert(inputValue + " is an odd number.")
  }
}

function conditional(){
  alert("Use Inspect to see the console and inspect the code.");
  var currentHour = new Date().getHours();
  if (currentHour < 10) {
    alert("Good morning!");
  } else if (currentHour < 18) {
    alert("Good day!");
  } else {
    alert("Good evening!");
  }
}

function howdy(){
  var person = prompt("Please enter your name", "YOUR NAME HERE");
  alert("Howdy " + person);
}

function scopeValues() {
  let y = 1;
  var x = 2;
  alert("Use Inspect to see the console and inspect the code.")
  console.log("Check the sources to see this code.")
  console.log("Value of x: " + x);
  console.log("Value of y: " + y);
  console.log("Value of z: " + z + " does not change.");
}
