//13 
let birth = parseInt(prompt('Please Enter Your Birth Year: '))
const sss = new Date()
const years = sss.getFullYear()
let can = years - birth
let wait = 18 - can
can >= 18
 ? alert(`You are ${can}. You are old enough to drive`)
 : alert(`You are ${can}. You will be allowed to drive after ${wait} years.`)
