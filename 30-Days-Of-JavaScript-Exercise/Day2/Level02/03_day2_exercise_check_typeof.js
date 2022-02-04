/* Exercise 3:
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/

let x = `10`
let y = 10
console.log(x===y)

>false

let x = `10`  //string
let newx = +x  //now, number
let y = 10 //number
console.log(newx === y)

>true
