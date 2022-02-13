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
