
class Animal {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
  }
}



class Dog extends Animal {
  constructor(props, type) {
    super(props)
    this.type = type;
  }

  speak = () => {
    console.log(`${this.name} barks`);
  }

  goodBoi = () => {
    console.log(`${this.name} is a good ${this.type}`)
  }
  info = () => {
    console.log(this.name, this.age, this.color, this.type);
  }
}

const spot = new Dog({
  name: 'spot',
  color: ['black', 'white'],
  age: 10
}, 'dalmatian');
spot.speak();
spot.goodBoi();
spot.info();

class Rabbit extends Animal {
  constructor(props, food) {
    super(props);
    this.food = food
  }

  jump = () => {
    console.log(`${this.name} is jumping`);
  }
  eat = () => {
    console.log(`${this.name} is eating ${this.food}`);
  }
}

const roger = new Rabbit(
  {
    name: 'roger',
    age: 5,
    color: 'white'
  }, 'carrots'
)
roger.jump();
roger.eat();