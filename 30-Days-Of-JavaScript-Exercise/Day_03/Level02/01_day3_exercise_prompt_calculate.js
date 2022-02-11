/* Exercise 1:
Write a script that prompt the user to enter base and height
of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

*/

let a = prompt('Enter base')
let b = prompt('Enter height')
let area = (parseInt(a) * parseInt(b) * 0.5 )
alert(`The area is: ${area}`)
