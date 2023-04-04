/*
Various scripts for digital chalkboard and more.
Note: event listeners are at the botton of the file.
*/

//DC functions
function howdy(){
  var person = prompt("Please enter your name", "YOUR NAME HERE");
  var city = prompt("Where do you want to visit?");
  // alert("Howdy " + person + ". " + city+" sounds like a nice place to visit.")
  // alternate approach with backticks (i.e. template literals) with embedded expressions as substitutions.
  alert(`Howdy ${person}. ${city} sounds like a nice place to visit.`);
}

function lastItem() {
  var arrayName = ['Watermelon', 'Apple', 'Orange', 'Kiwi']
  var y = arrayName.slice();
  var selectedElement = document.getElementById("fruit");
  var x = arrayName.sort();
  selectedElement.innerText = `The original array is [${y}], and I sorted it alphabetically.
  The last item of the sorted array is ${x[x.length - 1]}.`;
}

// Sort four items input from the user.
// An array is an indexed list of values.
// How does the script know that inputArray is an array?
// An array comes with many special methods.
// Note use of template literals with embedded expression—requires backticks `string`.

//Simple Version
/* function sortItemsInput() {
  var inputArray = [], inputCat = ['fruit', 'animal', 'state', 'country'];
  inputCat.forEach((item) => {
    var newInput = prompt(`enter one ${item}`);
    inputArray.push(newInput);
  });
  document.getElementById('outputArray').innerText = `You entered ${inputArray.join(', ')}.
      I sorted them ${inputArray.sort().join(', ')}`;
}; */

// This version asks the user for how many items to input, and what category they are.
// This also validates the number.
function sortItemsInput() {
  var inputArray = [], inputCat = []
  var numItems = parseInt(prompt('How many items would you like to enter? 1-4.'));
  if (isNaN(numItems) || numItems > 4 || numItems < 1 || !(Number.isInteger(numItems))) {
    alert('Please enter a valid number 1-4.');
    sortItemsInput();
  } else {
   for (let index = 0; index < numItems; index++) {
    var catInput = prompt(`Which ${numItems} categories would you like to enter?`)
     inputCat.push(catInput);
   }
   inputCat.forEach((item) => {
     var newInput = prompt(`enter one ${item}`);
     inputArray.push(newInput);
   });
   document.getElementById('outputArray').innerText = `You entered ${inputArray.join(', ')}.
   I sorted them ${inputArray.sort().join(', ')}`;
  }
};

// This lays out the logic of the previous function w/o forEach.
function sortItemsInputManual() {
  let outputArray = document.getElementById("outputArray");
  var newFruit = prompt("enter a fruit"); //prompt asks for input
  var newAnimal = prompt("enter an animal"); //prompt asks for input
  var newState = prompt("enter a state"); //prompt asks for input
  var newCountry = prompt("enter a country"); //prompt asks for input

  var array = []
  array.push(newFruit.toLowerCase()); //.push method adds a value to an array
  array.push(newAnimal.toLowerCase()); //.push method adds a value to an array
  array.push(newState.toLowerCase()); //.push method adds a value to an array
  array.push(newCountry.toLowerCase()); //.push method adds a value to an array

  var x = array.sort(); //.sort method sorts values in an array
  // var y = x.length; //.length method accesses the length of an array
  console.log(x); //log the the sorted array
  console.log(array); //log the entire array
  outputArray.innerText = "The four items you typed are: " +
  newFruit + ", " +
  newAnimal + ", " +
  newState + ", " +
  newCountry +
  ". I lowered all the letters and sorted them alphabetically: " + x.join(', ');
}

//Video functions
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


function evalNumber(){
  var inputValue = parseInt(prompt("Enter any five-digit number without commas"));
  if (isNaN(inputValue)||inputValue>99999||inputValue<10000||!(Number.isInteger(inputValue))) {
    alert(inputValue + " is not a valid 5-digit number.")
  } else if (inputValue%2==0){
    alert(`${inputValue} is an even number.`)
  } else {
    alert(`${inputValue} is an odd number.`)
  };
};

// Ternary operator to check truthiness for evaluating a number looks like sentence grammar.
// Is STATEMENT true ? truthy action : falsy action
// truthy action can be just about anything
// Falsy includes false, null, NaN, 0, "", and undefined
// Falsy action can be another STATEMENT to evaluate with ?.
// Use this to assign conditional values to variables--very helpful.
// E.g.
/* var age = parseInt(prompt("How old are you?"));;;
var beverage = (age >= 21) ? "Wine" : "Grape Juice";
console.log(beverage); // "Wine" */
function evalNumberTernary() {
  var inputValue = parseInt(prompt("Enter any five-digit integer without commas"));;
  isNaN(inputValue) || inputValue > 99999 || inputValue < 10000 || !(Number.isInteger(inputValue)) ?
  alert(inputValue + " is not a valid 5-digit number.") :
  inputValue % 2 == 0 ?
  alert(`${inputValue} is an even number.`) :
  alert(`${inputValue} is an odd number.`)
};

// User ternary to construct a function with parameters and capture nulls.
// This is like saying: let myVar = function (myParam) below
// In this example, we are treating the myParam argument as an object to which we can assign properties.
// Function parameters (i.e. arguments) are an array of objects.
myVar = myParam => {
  let property = myParam ? myParam.property : 'NoGood'
  return `The property is ${property}`
};
// Here is the longer version
let myVarLong = function (myParam2){
  console.log(arguments[0]);
  let property2 = myParam2 ? myParam2.property2: 'no';
  return `The property is ${property2}`;
}

function changeTitle(){
  let selectedElement = document.getElementById("buttonGroup");
  console.log(selectedElement);
  selectedElement.innerText = "Buttons";
  // selectedElement.style.display = "none";
}

function scopeValues() {
  if (0==0) {
    var x = 0;
    var y = 1;
  } else {
    alert("Why is 0 not 0?");
  };

  const z = x;
  alert("Use Inspect to see the console and inspect the code.")
  console.log("Check the sources to see this code and study the scope of the declarations.")
  console.log(`Value of x as originally declared: ${x}`);
  console.log(`Value of y as originally declared:  ${y}`);
  var x = x+2;
  console.log(`Value of x + 2:  ${x}`);
  console.log(`Value of z:  ${z}  does not change.`);
};

function parentFunction() {
  let a = 1;
  function childFunction() {
    var b = a + 2;
    return b;
  };
  return childFunction();
}

//Recursive function from 2nd video
function functionSample(number){
  if (number===0) {
    console.log("Number is even.")
  } else if (number===1){
    console.log("Number is odd.")
  } else {
    number = number -2;
    return functionSample(number);
  }
}
//console.log(functionSample(36));

//Map from 2nd video
// window.onload replaces <body onload...>.
// no need for a named function like mapload() in this strategy.
window.onload = function (){
  //Define the lat lon coordinate
  var latLng = [41.789649, -87.599702];

  var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

  var map = L.map('map', {
    center: latLng,
    zoom: 16,
    layers: [streets]
  });

  var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
  };
  L.control.layers(baseLayers).addTo(map);
  L.marker(latLng).addTo(map)
  .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

  //Click event
  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at  ${e.latlng.toString()}`)
    .openOn(map);
  }
  map.on('click', onMapClick);
}

function searchMusic(){
  var artistName = document.getElementById('artistInput').value;
  var albumName = document.getElementById('albumInput').value;

  var url = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistName}&a=${albumName}`;
  //var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=wilco&a=schmilco";
  var albumDiv = document.getElementById('albumArt');

  fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        let jsonContent = data.album[0];
        console.log(jsonContent);
        albumDiv.src = jsonContent.strAlbumThumb;
        document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
        document.getElementById('albumGenre').innerText = jsonContent.strGenre;
        document.getElementById('albumDesc').innerText = jsonContent.strDescriptionEN;

      });
    }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'row');
      newDiv.setAttribute('id', 'div '+i);
      document.getElementById('addElements').appendChild(newDiv);
      newDiv.innerText = valueArray[i];
    };
  }

  function parseArray(array) {
    var newFruit = prompt("enter a fruit"); //prompt asks for input
    array.push(newFruit); //.push method adds a value to an array
    var x = array.sort(); //.sort method sorts values in an array
    var y = x.length; //.length method accesses the length of an array
    console.log(x[y-1]); //log the last item in the array
    console.log(array); //log the entire array
  }
  //var newArray = ["papaya", "apple", "orange", "banana"];

  //Digital chalkboard for Feb 16.
  var userArray = []
  function sortArray(){
    var userInput = document.getElementById('inputTerm').value;
    var userOutput = document.getElementById('outputRow');
    userArray.push(userInput)
    console.log(userArray);
    document.getElementById('tempList').innerHTML = 'Unsorted list: '+userArray.join(", ");
    document.getElementById('inputTerm').value = '';
    if (userArray.length == 4) {
      userArray.sort();
      for (i in userArray) {
        var newLI = document.createElement('li');
        newLI.innerText = userArray[i];
        userOutput.appendChild(newLI);
      }
    };
  }

  var longestVal = "";
  function longestValue(){
    var userInput = document.getElementById('inputTerm').value;
    if (userInput.length > longestVal.length) {
      longestVal = userInput;
    };
    document.getElementById('outputRow').innerText = longestVal;
  }

  // Event Listeners
  // document.addEventListener('EVENT', FUNCTION, OPTIONS)

  document.addEventListener('DOMContentLoaded', () => {

    const btn1 = document.getElementById("button_01");
    btn1.addEventListener('click', howdy);

    // Alternate shorter method
    // document.getElementById("button_01").addEventListener('click', howdy);

    const btn2 = document.querySelector('#button_02');
    btn2.addEventListener('click', lastItem);

    const btn3 = document.querySelector('#button_03');
    btn3.addEventListener('click', sortItemsInput);

    const btn4 = document.querySelector('#button_04');
    btn4.addEventListener('click', conditional);

    const btn5 = document.querySelector('#button_05');
    btn5.addEventListener('click', evalNumberTernary);

    const btn6 = document.querySelector('#button_06');
    btn6.addEventListener('click', changeTitle);

    const btn7 = document.querySelector('#button_07');
    btn7.addEventListener('click', scopeValues);

    // Below are two ways to invoke a function with options.
    // In the second case, we log the event (e) object to the console.
    // We don't need the (e) unless we need to access something about the target or event.
    // Insepct the console to see what is available on the event (e) object.
    const btn8 = document.querySelector('#button_08');
    //btn8.addEventListener('click', function(){alert('A nested function has access to variables in the parent function: 2 + 1 = ' + parentFunction())});
    btn8.addEventListener('click', () => {
      //console.log(e);
      alert('A nested function has access to variables in the parent function: 2 + 1 = ' + parentFunction());
    })
  })


function jose(){
  var array = [];
  var number = prompt("enter a number")
  array.push(number)
  array.sort
  for (i=0; i < array.length; i++){
    console.log(array[i]);
  }

}
