/* Exercise 1:
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

let a = prompt('Enter base')
let b = prompt('Enter height')
let perimeter = (parseInt(a) * parseInt(b) * 0.5 )
alert(perimeter)
