/* Exercise 2:
Write a script that prompt the user to enter side a, side b, and side c of the triangle
and calculate the perimeter of triangle (perimeter = a + b + c)
*/

let a = prompt('a of the triangle')
let b = prompt('b of the triangle')
let c = prompt('c of the triangle')
let triangle = (parseInt(a) + parseInt(b) + parseInt(c))
alert(`The triangle is: ${triangle}`)
