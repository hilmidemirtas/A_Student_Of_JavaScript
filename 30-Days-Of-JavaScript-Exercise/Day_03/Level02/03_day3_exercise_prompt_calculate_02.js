//3
let length = prompt(`What is the length?`)
let width = prompt(`What is the width?`)
let perimeter = 2 *(parseInt(length)+parseInt(width))
alert(`Perimeter is: ${perimeter}`)

//4
let radius = prompt(`What is the radius?`)
const pi = 3.14
let area = (parseInt(radius)**2 * pi)
let circle = (parseInt(radius)*2*pi)
alert(`Area is: ${area}`)
alert(`Circle is: ${circle}`)

//5

let x = prompt('What is the x?')
let slope = (2*parseInt(x) - 2)
alert(slope)
?????????????

//6
let x1 = parseInt(prompt('What is the x1?'))
let y1 = parseInt(prompt('What is the y1?'))
let x2 = parseInt(prompt('What is the x2?'))
let y2 = parseInt(prompt('What is the y2?'))
let slope = (y2-y1/x2-x1)
alert('slope is : ' + slope)

//7
let x = prompt('What is the x?')
let slope1 = (2*parseInt(x) - 2)

let x1 = parseInt(prompt('What is the x1?'))
let y1 = parseInt(prompt('What is the y1?'))
let x2 = parseInt(prompt('What is the x2?'))
let y2 = parseInt(prompt('What is the y2?'))
let slope2 = (y2-y1/x2-x1)

let s1 = (2*slope1 - 2) 
let s2 = (2*slope2 - 2) 

alert(s1 + " , " + s2)


