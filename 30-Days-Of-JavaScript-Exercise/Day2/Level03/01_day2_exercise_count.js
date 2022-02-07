/* Exercise 1:
'Love is the best thing in this world.
Some found their love and some are still looking for their love.
' Count the number of word love in this sentence.
*/

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let x = /love/gi;
console.log(string.match(x))

>(3) ['Love', 'love', 'love']
