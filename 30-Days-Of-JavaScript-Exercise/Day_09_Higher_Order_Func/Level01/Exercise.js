//Level01 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1.Explain the difference between forEach, map, filter, and reduce.
//you can check documents

//2.Define a call function before you them in forEach, map, filter or reduce.

//3.Use forEach to console.log each country in the countries array.

>countries.forEach((element) => console.log(element))


//4.Use forEach to console.log each name in the names array.

>names.forEach((element) => console.log(element))

//5.Use forEach to console.log each number in the numbers array.

let sum = 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => console.log(num))
console.log(sum)


//6.Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
countries.forEach((element) => console.log(element.toUpperCase()))

//7.Use map to create an array of countries length from countries array.



//8.Use map to create a new array by changing each number to square in the numbers array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

//9.Use map to change to each name to uppercase in the names array



//10.Use map to map the products array to its corresponding prices.

//11.Use filter to filter out countries containing land.
