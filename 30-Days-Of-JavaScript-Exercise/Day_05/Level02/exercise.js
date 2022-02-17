// Exercise Level 2:

//1

//needs documents---not now

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(".").join("").split(",").join("").split(" ")
console.log(words)
console.log(words.length)
 
//3.1
        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
       shoppingCart.unshift('Sugar')
       console.log(shoppingCart)
//3.2
        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
       shoppingCart.push('Sugar')
       console.log(shoppingCart)
//3.3
     let a = prompt('enter something')
       const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (a == 'Honey') {
    shoppingCart.pop()
    console.log(shoppingCart)
} 
else {
    console.log(shoppingCart)
}
      
//3.4
