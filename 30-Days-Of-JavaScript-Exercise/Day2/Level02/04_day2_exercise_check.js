/*Exercise 4:
Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
*/

//part 1
let x = `9.8`
let y = parseFloat(x)
let z = 10
console.log(y === z)

>false

//part 2
let x = `9.8`
let y = parseFloat(x)
let y2 = Math.round(y)
let z = 10
console.log(y2===z)

>true
