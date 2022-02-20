/* Exercise 1:
Declare a variable named challenge and
assign it to an initial value
'30 Days Of JavaScript'.
*/

let name = "with hilmi"
console.log = (`30 Days Of JavaScript ${name}`)

//result
'30 Days Of JavaScript with hilmi'



/*Exercise 2:
Print the string
on the browser console using console.log()
*/

let string ="string with console.log"
console.log(`string`)

//result

>string



/*Exercise 3:
Print the length of the string
on the browser console using console.log()
*/

let name = `hilmidemirtas`
console.log(name.length)

//result
>13
//another exercise about the length

let number = `0123456789`
console.log(number.length)

//result
>10

//length starts counting from zero. Don't forget it!



/* Exercise 4: 
Change all the string characters
to capital letters using
toUpperCase() method */

let name = `hilmi demirtas`
console.log(name.toUpperCase())

//results
>HILMI DEMIRTAS

//another
let name = `javascript`
console.log(name.toUpperCase())

>JAVASCRIPT



/* Exercise 5:
Change all the string characters
to lowercase letters using toLowerCase() method
*/

let name = `HILMI DEMIRTAS`
console.log(name.toLowerCase())

//result

>hilmi demirtas



/* Exercise 6:
Cut (slice) out the first word 
of the string using substr() or substring() method
*/

let lesson = `JavaScript`
console.log(lesson.substr(4,9))

//result

>Script

//another example

let lesson = `JavaScript`
console.log(lesson.substr(0,3))

//result

>Java

//or substring() method

let lesson = `JavaScript`
console.log(lesson.substring(4))

//result

>Script



/* Exercise 7:
Slice out the phrase
Days Of JavaScript from
30 Days Of JavaScript.
*/

let lessonName = `30 Days Of JavaScript`
console.log(lessonName.substr(3))

//result 
>Days Of JavaScript



/* Excercise 8:
Check if the string contains
a word Script using includes() method
*/

let repo = `A Student Of JavaScript`
console.log(repo.includes('Student'))

//result
true

//another example
let repo = `A Student Of JavaScript`
console.log(repo.includes('student'))

//result
false

//another example
let repo = `A Student Of JavaScript`
console.log(repo.includes('Of'))

//result
true



/* Exercise 9:
Split the string into an array using split() method
*/

let name = "hilmi demirtas"
console.log(name.split())

//result
>['hilmi demirtas']

//into an array

let name = "hilmi demirtas"
console.log(name.split(""))

//result
>(14) ['h', 'i', 'l', 'm', 'i', ' ', 'd', 'e', 'm', 'i', 'r', 't', 'a', 's']

let name = 'hilmi demirtas'
console.log(name.split(" "))

>(2) ['hilmi', 'demirtas']



/* Exercise 10:
Split the string 30 Days Of JavaScript,
at the space using split() method
*/

let name = "30 Days Of JavaScript"
console.log(name.split(' '))

//result
(4) ['30', 'Days', 'Of', 'JavaScript']

//another example
let mark = "hello! how are you? where are you from? how old are you?"
console.log(mark.split("?"))

//result
(4) ['hello! how are you', ' where are you from', ' how old are you', '']



/* Exercise 11:
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
split the string at the comma and change it to an array.
*/

let companyName = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(companyName.split(" "))

//result 
(7) ['Facebook,', 'Google,', 'Microsoft,', 'Apple,', 'IBM,', 'Oracle,', 'Amazon']



/* Exercise 12: 
Change 30 Days Of JavaScript to
30 Days Of Python using replace() method.
*/

let lessonName = "30 Days Of JavaScript"
console.log(lessonName.replace("JavaScript", "Python"))

//result
> 30 Days Of Python



/* Exercise 13:
What is character at index
15 in '30 Days Of JavaScript' string? Use charAt() method.
*/

let lesson = "30 Days Of JavaScript" 
console.log(lesson.charAt(15))

//result
> S



/* Exercise 14:
What is the character code of J in
'30 Days Of JavaScript' string using charCodeAt()
*/

let course = "30 Days Of JavaScript"
console.log(course.charAt(11))

//result
> J         //First we find where J is and we are sure now it is 11

let course = "30 Days Of JavaScript"
console.log(course.charCodeAt(11))

//result
>74



/* Exercise 15:
Use indexOf to determine the position 
of the first occurrence of a in 30 Days Of JavaScript
*/

let course = "30 Days Of JavaScript"
console.log(course.indexOf("a"))

//result

>4

//another exercise
let course = "30 Days Of JavaScript"
console.log(course.indexOf("J"))

//result
>11



/* Exercise 16:
Use lastIndexOf to determine the position of the last
occurrence of a in 30 Days Of JavaScript.
*/

let lesson = "30 Days Of JavaScript"
console.log(lesson.lastIndexOf("a"))

//result
>14



/* Exercise 17:
Use indexOf to find the position of the first
occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/

let word = "You cannot end a sentence with because because because is a conjunction"
console.log(word.indexOf("because"))

//result
>31 



/* Exercise 18:
Use lastIndexOf to find the position of the last occurrence
of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/

let word = "You cannot end a sentence with because because because is a conjunction"
console.log(word.lastIndexOf("because"))

//result
>47



/* Exercise 19:
Use search to find the position of the first occurrence
of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/

let exercise = "You cannot end a sentence with because because because is a conjunction"
console.log(exercise.search("because"))
//console.log(exercise.search(/because/gi)) -- same search, case insensitive

//result
>31



/* Exercise 20:
Use trim() to remove any trailing whitespace
at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
*/

let lesson = " 30 Days Of JavaScript "
console.log(lesson.trim())

//result 
>30 Days Of JavaScript



/* Exercise 21:
Use startsWith() method with the string
30 Days Of JavaScript and make the result true
*/

let name = "30 Days Of JavaScript"
console.log(name.startsWith("3"))

//result
>true



/* Exercise 22:
Use endsWith() method with the string
30 Days Of JavaScript and make the result true
*/

let book = "30 Days Of JavaScript"
console.log(book.endsWith("t"))

//result
>true



/* Exercise 23:
Use match() method to find all the a’s in 30 Days Of JavaScript
*/

let book = "30 Days Of JavaScript"
let a = /a/g
console.log(book.match(a))

//result
>(3) ['a', 'a', 'a']



/* Exercise 24:
Use concat() and merge '30 Days of' and
'JavaScript' to a single string, '30 Days Of JavaScript'
*/

let first = "30 Days Of"
console.log(first.concat(` JavaScript`))

//result
> 30 Days Of JavaScript



/* Exercise 25:
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

let name = ` 30 Days Of JavaScript`
console.log(name.repeat(2))

//result
>30 Days Of JavaScript 30 Days Of JavaScript


