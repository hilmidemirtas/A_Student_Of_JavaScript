//level01
//Exercise
//1.i
for(let i = 0; i <= 10; i++){
  console.log(i)
}
//1.ii
let i = 0;

while(i<=10) {
    console.log(i)
    i++
}
//1.iii
let i = 0
do {
    console.log(i)
    i++
}
    while(i <= 10)
      
      
//2
     
       for(i=10; i >=1; i--) {
         console.log(i)
     }

      

       let i = 10
      while(i >= 0) {
          console.log(i)
          i--; }

let i = 10
    do {
        console.log(i)
        i--
    }
    while(i>=0)

//3

let n = parseInt(prompt("enter a number"))
    for(i=0; i <= n; i++ ) {
        console.log(i)
    }               
//4

let a = ""
   const b = ['#']
   for(i = 0; i <= 7; i++) {
     a += b
    
       console.log(a)
   }
//5
for (i = 0; i <=10; i++) {
    console.log(`${i} x ${i} = ${i*i}`)
}

//6
for (i=0; i <= 10; i++) {
    console.log(`${i} ${i**2} ${i**3}`) }

//7
for (i=0; i<=100; i++) {
if ( i % 2 == 1) {
    continue
}
    console.log(i)
}

//8
for (i=0; i<=100; i++) {
if ( i % 2 == 0) {
    continue
}
    console.log(i)
}

//9

    for (i=2;i<=100;i++) {
        let prime = true 
        for(a = 2; a <= i;a++ ){
            if(i % a === 0 && a !==i){
                prime = false
            }
        }
        if(prime) {
            console.log(i)
        }
    }

//10

let sum = 0
for(i = 0; i <= 100; i++) {
    sum += i
}
console.log(`the sum of all numbers from 0 to 100 is ${sum}`)

//11

let sumE = 0
let sumO = 0

// You could technically start at 1 here
for (let i = 0; i <= 100; i++) {
  // Just add the numbers without using arrays
  if (i % 2 == 0) {
    sumE += i
  } else {
    sumO += i
  }
}

console.log(sumE, sumO)

//12
