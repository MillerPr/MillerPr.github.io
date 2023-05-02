// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Put all of your code inside the DOMContentLoaded event listener provided.

document.addEventListener('DOMContentLoaded', () => {
  // Use .getElementsByClassName() to get an HTMLCollection of all .animalTitle elements.

  // Create a new Object with properties and values like 'animal01: "Cow" '.
    // These values can be found in the HTMLCollection.

  // Use the Object to create event listeners for <img> elements that launch the provided howler script.
    // Write a single 'for...in' statement to add listeners to all the <img> elements.
    // .addEventListener('click', () => {CODE GOES HERE}
    // The animal title (e.g. 'Cow') determines which sprite is played.

  // Leverage the Object to add mouseover styling to the <img> elements.
    // You'll need to add listeners to the <img> elements.
    // Then you'll need to write functions to do the events.
    // On mouseover add this.style.border = '3px solid red';
    // On mouseout add this.style.border = '0px';
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

