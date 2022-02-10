/*Exercise 3:
Check if parseInt('9.8') is equal to 10
*/

let x = parseInt(`9.8`)
let y = 10
console.log(x===y)

>false 

let x = parseInt(parseFloat('9.8')) + 1
let y = 10
console.log(x===y)

>true
