/* Exercise 23:
Use match() method to find all the a’s in 30 Days Of JavaScript
*/

let book = "30 Days Of JavaScript"
let a = /a/g
console.log(book.match(a))

//result
>(3) ['a', 'a', 'a']
