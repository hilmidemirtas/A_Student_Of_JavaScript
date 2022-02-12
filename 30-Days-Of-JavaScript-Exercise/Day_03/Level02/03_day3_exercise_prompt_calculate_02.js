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

//8
let x = parseInt(prompt('sayi giriniz'))
let y = x**2 + 6*x + 9
console.log(y)

//9
let hour = parseInt(prompt('Hour?'))
let per = parseInt(prompt('Per?'))
let weekly = hour * per
alert(weekly)

//10

let name = prompt('What is your name?')
let x = name.length 
x > 7
? alert(`Your name is greater than 7`)
: alert(`Your name is short than 7`)

//11

let firstName = prompt('What is your first name?')
let lastName = prompt('What is your first name?')
firstName.length > lastName.length
? alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: alert(`Your family name, ${lastName} is longer than your first name, ${firstName}`)

//12
let my = parseInt(prompt('How old am I?'))
let your = parseInt(prompt('How old are you?'))
my > your
? alert(`I am ${my - your} years older than you.`)
: alert(`You are ${your - my} years older than me`) 

//13 



