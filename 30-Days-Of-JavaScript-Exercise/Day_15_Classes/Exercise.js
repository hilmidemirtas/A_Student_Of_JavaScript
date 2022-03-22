/* Exercises Level 1

1.Create an Animal class. The class will have name, age, color, legs properties and create different methods */

class Animal {
    constructor(name, age, color, legs) {
    console.log(this)
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
    }
}
    const animal = new Animal('horse','7','brown', '4')
    
    console.log("animal")
