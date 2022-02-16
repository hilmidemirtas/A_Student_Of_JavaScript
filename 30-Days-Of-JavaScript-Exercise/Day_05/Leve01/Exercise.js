//1
const firstArr = Array()
console.log(firstArr)
//or
const firstArra = []
console.log(firstArr)

//2

const number = [1, 2, 3, 4, 5]
console.log(number)

//3
const number = [1, 2, 3, 4, 5]
console.log(number.length) 

//4
      const mixedDataTypes = [28, 'hilmi',true, { name : 'hilmi'}, ['june', 'july', 'august']]
      console.log(mixedDataTypes)

//5-10
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
      console.log(itCompanies)
      console.log(itCompanies.length)
      console.log(itCompanies[0])
      console.log(itCompanies[3])
      console.log(itCompanies[6])
      console.log(itCompanies.toString())


//11
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.toString().toUpperCase())

//12
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let a = itCompanies.pop()
let b = itCompanies.push('and')
let c = itCompanies.push(a)
console.log(`${itCompanies} are big IT companies`)

//13

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let a = itCompanies.toString()
let b = (prompt('enter a company'))
if (a.match(b)) {
    alert(`${b}`) }
else {
    alert(`${b} is not in`)
}
console.log(b)

//14
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        let itCompaniesNew = new Array()
        if ((itCompanies[0].match(/o/gi)).length > 1)
        {
          itCompaniesNew.push(itCompanies[0])
        }
??????????????????????????????????????

//15

     let alphabet = "asdfghjklşiqwertyuıopğüzxcvbnmöç"
      console.log(alphabet.split("").sort()
                  
 //16
     let alphabet = "asdfghjklşiqwertyuıopğüzxcvbnmöç"
      console.log(alphabet.split("").sort().reverse())

//17
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies.slice(0,3))

//18

const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))

//19
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies.slice((itCompanies.length+1)/2 -1, (itCompanies.length+1)/2))

//20
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies.shift())
console.log(itCompanies)

//21
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies.slice((itCompanies.length+1)/2 -1, (itCompanies.length+1)/2))
????????

//22
