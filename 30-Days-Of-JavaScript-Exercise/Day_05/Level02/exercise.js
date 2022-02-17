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
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart["Tea"] = "Green Tea"
console.log(shoppingCart)

//4
     const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
if (countries.includes("Ethiopia")){
    console.log("Ethiopia".toUpperCase())
}
else {
    countries.push("Ethiopia")
    console.log(countries)
}
//5
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
if(webTechs.includes("Sass")) {
    console.log(`Sass is a CSS preprocess`) }
else {
    webTechs.push("Sass")
    console.log(webTechs)
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
