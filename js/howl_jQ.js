$(function(){
  var animalTitles = $('.animalTitle');

  // Creates an Object with element id and animal value.
  const animalObject = new Object();
  for(element of animalTitles) {
    //animal01:"cow"
    animalObject[element.nextElementSibling.id] = element.nextElementSibling.alt;
  }

  for (const e in animalObject){
    //for every animal01, 02, 03, 04
    //add event listener that passes the animal name to function.
    $(`#${e}`).on('click', function(){
      playAnimal(animalObject[e]);
    })
  }

  for (const property in animalObject){
    $('#' + property).hover(mouseOverHandler, mouseOutHandler)
  }

  //This jQuery uses .on({multiple events})
  for (const property in animalObject) {
    $('#' + property).on({
      'mouseover': function () { //handlerIn function
        $(this).css('border', '3px solid red')
      },
      'mouseout': function () { //handlerOut function
        $(this).css('border', '0px')
      }
    })
  };

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

