document.addEventListener('DOMContentLoaded', () => {
  // Get animal titles from HTML, assign click for number of animals found.
  // The animal title determines which sprite is played.

  var animalTitles = document.getElementsByClassName('animalTitle');
  console.log(animalTitles);
  for (let i = 1; i < animalTitles.length+1; i++){
    document.getElementById(`animal0${i}`).addEventListener('click', () => {
      playAnimal(animalTitles[i-1].innerHTML);
    })
  };
  // Add mouseover behavior to mark selected item.
  for (let i = 1; i < document.getElementsByClassName('img-thumbnail howlerImage').length+1; i++) {
    document.getElementById(`animal0${i}`).addEventListener('mouseover', mouseOverHandler)
    document.getElementById(`animal0${i}`).addEventListener('mouseout', mouseOutHandler)
  };
});

// In the context of an event, this refers to the element.
function mouseOverHandler() {
  this.style.border = '3px solid red';
}
function mouseOutHandler() {
  this.style.border = '0px';
}

function playAnimal(animal) {
  var sound = new Howl({
    src: [`media/${animal}.mp3`, `media/${animal}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animal);
}
