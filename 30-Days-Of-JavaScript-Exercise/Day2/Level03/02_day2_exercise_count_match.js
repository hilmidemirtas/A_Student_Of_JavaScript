/*Exercise 2:
Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/
let string = 'You cannot end a sentence with because because because is a conjunction';
let x = /because/gi;
console.log(string.match(x))

>(3) ['because', 'because', 'because']
