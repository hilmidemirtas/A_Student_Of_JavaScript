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
/* 3.Declare a function addNumbers and it takes two two parameters and it returns sum. */
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum 
}
console.log(addNumbers(10,20))

//Exercise 04
/* 4.An area of a rectangle is calculated as follows: area = length x width.
Write a function which calculates areaOfRectangle.*/
function areaOfReactangle(length, width) {
    let area = length * width
    return area

}
console.log(areaOfReactangle(5,4))

//Exercise 05
/*
  
