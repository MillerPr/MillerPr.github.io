// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Use .getElementsByClassName() to get an HTMLCollection of all .animalTitle elements.
// Create a new Object with properties and values like 'animal01: "Cow" '.
  // These values can be found in the HTMLCollection.
// Use the Object to create event listeners for <img> elements that launch the howler script.
  // Write a single 'for...in' statement to add listeners to all the <img> elements.
  // .addEventListener('click', () => {CODE GOES HERE}
  // The animal title determines which sprite is played.
// Leverage the Object to add mouseover styling to the <img> elements.
  // On mouseover add this.style.border = '3px solid red';
  // On mouseout add this.style.border = '0px';

document.addEventListener('DOMContentLoaded', () => {
  var animalTitles = document.getElementsByClassName('animalTitle');

  // Leverage an HTMLCollection to add eventListeners.

  // A for...of statement fails because it does not maintain closure for each iteration.
  /* for(element of animalTitles) {
    document.getElementById(element.nextElementSibling.id).addEventListener('click', () => {
      playAnimal(element.innerHTML);
    });
  }; */

  // Creates an Object with element id and animal value.
  const animalObject = new Object();
  for(element of animalTitles) {
    // Create properties like "animal01: 'Cow'"
    animalObject[element.nextElementSibling.id] = element.innerHTML
  }

  // Use an object because the documentation says,
  // Unlike most functions in JavaScript, objects are retained in memory
  // as long as a variable referencing them exists in memory.
  // This, and the fact that objects can have properties, and that
  // they can be passed around by reference, makes them likely candidates for sharing data among scopes.
  for (const property in animalObject){
    document.getElementById(property).addEventListener('click', () => {
      playAnimal(animalObject[property]);
    })
  }

  // It's a little clunky to run a for loop.
  /* for (let i = 1; i < animalTitles.length+1; i++){
    document.getElementById(`animal0${i}`).addEventListener('click', () => {
      playAnimal(animalTitles[i-1].innerHTML);
    });
  } */

  // Use the Object to add mouse event behavior to style the item.
  for (const property in animalObject){
    document.getElementById(property).addEventListener('mouseover', mouseOverHandler)
    document.getElementById(property).addEventListener('mouseout', mouseOutHandler)
  }

  // For loop is a clunky way to add mouseover behavior to style selected item.
  /* for (let i = 1; i < document.getElementsByClassName('img-thumbnail howlerImage').length+1; i++) {
    document.getElementById(`animal0${i}`).addEventListener('mouseover', mouseOverHandler)
    document.getElementById(`animal0${i}`).addEventListener('mouseout', mouseOutHandler)
  }; */

  // In the context of an event, this refers to the element.
  function mouseOverHandler() {
    this.style.border = '3px solid red';
  }
  function mouseOutHandler() {
    this.style.border = '0px';
  }
});

function playAnimal(animalSound) {
  var sound = new Howl({
    src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animalSound);
}

