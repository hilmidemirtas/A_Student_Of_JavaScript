//level 01

//Exercise 01
/* 1. Declare a function fullName and it print out your full name.*/

function fullName() { 
    let firstName = `hilmi`
    let lastName = ` demirtaş`
    let fName = firstName + lastName
    console.log(fName)
  }
fullName()



//Exercise 02
/* 2.Declare a function fullName and now it takes firstName,
 lastName as a parameter and it returns your full - name.*/
function fullName() {
  let firstName = `hilmi`
  let lastName = ` demirtaş`
  let myFullName = firstName + lastName
  return myFullName
}
console.log(fullName())



//Exercise 03
/* 3. Declare a function addNumbers and it takes two two parameters and it returns sum. */
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum 
}
console.log(addNumbers(10,20))

//Exercise 04
/* 4. An area of a rectangle is calculated as follows: area = length x width.
Write a function which calculates areaOfRectangle.*/
function areaOfReactangle(length, width) {
    let area = length * width
    return area

}
console.log(areaOfReactangle(5,4))

//Exercise 05
/* 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
Write a function which calculates perimeterOfRectangle.*/
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter

}
console.log(perimeterOfRectangle(5,4))

//Exercise 06
/* 6.A volume of a rectangular prism is calculated as follows: volume = length x width x height.
 Write a function which calculates volumeOfRectPrism. */
function volumeOfRectPrism(length, width, height) {
  return length * width * height
}
console.log(volumeOfRectPrism(2,3,4))

//Exercise 07
/*7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle */

function areaOfCircle(r) {
     area = Math.PI * r**2
    return area
}
console.log(areaOfCricle(10))



//Exercise 08
/*8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle */
function circumOfCircle(r) {
         circumference = 2 * Math.PI * r
return circumference
}
console.log(circumOfCircle(10))

//Exercise 09 
/*9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density. */
function densityOfSub(mass, volume) {
         let density = mass / volume
         return density
}
console.log(densityOfSub(5,6))
 

//Exercise 10
/*10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
Write a function which calculates a speed of a moving object, speed.*/

function speed(x,t) {
         let v = x / t
        return v
} 
console.log(speed(100,5))

//Exercise 11
/*11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.*/
function calWeight(mass,gravity) {
        let weight = mass * gravity
        return weight
}
console.log(calWeight(50,10))
