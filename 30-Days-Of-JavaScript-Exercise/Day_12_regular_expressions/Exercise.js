// Level 01

/* Exercise 1. Calculate the total annual income of the person from the following text.
‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’ */
  const pattern = /\d+/g
  const txt = "Calculate the total annual income of the person from the following text. 
              He earns 4000 euro from salary per month, 
              10000 euro annual bonus, 5500 euro online courses per month."
  const matches = txt.match(pattern)
  let total = 0;

     for(i=0; i<matches.length; i++) {
       let a = parseInt(matches[i])
       total += a
   } 
  console.log(total)

/* Exercise 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles. */

  const pattern = /\d+/g
  const axisx = [-12, -4, -3, -1]
  const axisy= [4, 8,]
  
