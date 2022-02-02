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
