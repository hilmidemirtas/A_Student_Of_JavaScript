/* Exercises Level 1

1.Create an Animal class. The class will have name, age, color, legs properties and create different methods */

class Animal {
    constructor(name, age, color, legs) {
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
    }
}
    const horse = new Animal('horse','7','brown', '4')
    
    console.log(horse)
//Result

