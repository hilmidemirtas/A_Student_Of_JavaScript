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

