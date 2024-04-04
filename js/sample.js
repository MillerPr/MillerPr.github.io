function howdy() {
  var firstName = prompt("Hello. What is your first name?");
  alert("Howdy " + firstName + "!");
}

//Greeting based on hour
function conditional(){
  var currentHour = new Date().getHours();
  if (currentHour < 12) {  // Evaluate a statement
    alert("Good morning!"); // True code block
  } else if (currentHour < 18) { // Secondary if-statement with statement to evaluate
    alert("Good day!"); // True code block
  } else {
    alert("Good evening!");  // Else code block
  }
}

//Simple for loop.
function simpleFor() {
  for (let i = 0; i < 5; i++) {
    console.log("The number is "+i)
  }
}

function letScope() {
  let x = 1;
  if(x===1){
    let x = 2;
    console.log("inside x = "+x);
  };
  console.log("outside x = "+x);
};

function varScope(){
  var x = 1;
  if(x===1){
    var x = 2;
    console.log("inside x = "+x);
  };
  console.log("outside x = "+x);
}

function parentFunction()
{
  let a = 1;
  function childFunction()
  {
    var b = a + 2;
    return b;
  }
  return childFunction();
}
