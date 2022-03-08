// superclass
class housePet {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }
  eat() {
    console.log(`A pet eats some kind of petfood.`)
  }
}

// extended class
class dog extends housePet {
  constructor(name, food){
    super(name, food);
    this.sound = 'bark';
  }
  speak() {console.log(`${this.name} makes a ${this.sound} sound.`);}
  eat() {super.eat();console.log(`${this.name} eats ${this.food}`);}
}

let spot = new dog('spot', 'kibble');


