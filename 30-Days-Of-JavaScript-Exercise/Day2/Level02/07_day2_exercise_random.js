/* Exercise 7:
Generate a random number between 0 and 100 inclusively.
*/

let r = Math.random() //create random numbers `0-0.9999`
let rt = Math.floor(r * 101) // convert to integer

console.log(rt) //result 

//or

let r = Math.floor(Math.random()*101)

console.log(r)
