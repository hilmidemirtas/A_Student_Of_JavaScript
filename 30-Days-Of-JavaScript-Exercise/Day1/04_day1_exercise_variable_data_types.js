/* Create a variable.js file and declare variables and assign
string, boolean, undefined and null data types */ 

onsole.log (typeof 29); //number
console.log(typeof 'Hilmi'); //string
console.log(typeof true); //boomelan
console.log(typeof null); //object type
console.log(typeof undefined); //undefined

// just try example
let firstName = 'hilmi'
let lastName = 'demirtaş'
let country = 'Turkey'
let city = 'izmir'
let age = 29
let isMarried = false
console.log(firstName,  lastName, country, city, age, isMarried)

> hilmi demirtaş Turkey izmir 29 false


//here type of variable
console.log(typeof firstName,typeof  lastName,typeof country,typeof city, typeof age,typeof isMarried)
               >string           >string          >string      >string      >number       >boolean

// Variables can also be declaring in one line separated by comma
let name = 'hilmi',
job = 'Computer Programmer',
live = 'Turkey'
console.log(name, job, live);

>hilmi Computer Programmer Turkey
