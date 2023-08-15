import React, { Component } from 'react'
import Header from './Header';

// import something 'from' somewhere

export default class index extends Component {
  render() {
    return (
      <Header />
    )
  }
}

// constructor:
function Cat(name) {
  this.name = name;
  this.fluffy = true;
}

Cat.prototype.speak = function () {
  console.log(`${this.name} says meow`);
};

const bob = new Cat('bob');

bob.speak();

// class

class Dog {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  speak = () => console.log(`${this.name} says whoof`);

}

const billy = new Dog('billy');
billy.speak();

