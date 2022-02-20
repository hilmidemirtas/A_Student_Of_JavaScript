/* Exercise 1:
Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

let words = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(words)

//result
>The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.



/* Exercise 2:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/

let words = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`
console.log(words)

//result
>"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."



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



/* Exercise 5:
Check if 'on' is found in both python and jargon
*/

let name = `python`
let word = `jargon`

console.log(name.includes(`on`))

console.log(word.includes(`on`))

>true

>true



/* Exercise 6:
I hope this course is not full of jargon. Check if jargon is in the sentence.
*/

let name = `I hope this course is not full of jargon. Check if jargon is in the sentence.`
console.log(name.includes(`jargon`))

>true



/* Exercise 7:
Generate a random number between 0 and 100 inclusively.
*/

let r = Math.random() //create random numbers `0-0.9999`
let rt = Math.floor(r * 101) // convert to integer

console.log(rt) //result 

//or

let r = Math.floor(Math.random()*101)

console.log(r)



/* Exercise 8:
Generate a random number between 50 and 100 inclusively.
*/

let x = Math.floor((Math.random() * 51) + 50)
console.log(x)


//or with function

?



/*Exercise 9:
Generate a random number between 0 and 255 inclusively
*/


let x = Math.floor((Math.random() * 256) + 0)
console.log(x)



/* Exercise 10:
Access the 'JavaScript' string characters using a random number.
*/

let name = "javascript"
console.log(name.charAt(Math.floor(Math.random()* (name.length + 1))))



/* Exercise 11:
Use console.log() and escape characters to print the following pattern.
*/

let numbers = `1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`
console.log(numbers)

//result

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125



/* Exercise 12:
Use substr to slice out the phrase because because because
from the following sentence:'You cannot end a sentence with
because because because is a conjunction'
*/

let string = `You cannot end a sentence with
because because because is a conjunction
`
console.log(string.search("because"))

>31

let string = `You cannot end a sentence with
because because because is a conjunction
`
console.log(string(string.substr(31,24)))

>because because because

??????????????????????????????????????????????????????????????????????????????????????????????????????
