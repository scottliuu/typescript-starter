class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old!`;
  }
}

class Cat extends Animal {
  meow() {
    return `Meow!`;
  } 
}

const cat = new Cat('Tigro', 4);

console.log(cat.greet());
console.log(cat.meow());
