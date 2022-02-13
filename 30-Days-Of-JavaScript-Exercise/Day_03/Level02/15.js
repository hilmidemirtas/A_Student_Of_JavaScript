/* Exercise 15:
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/


//i
let ask = prompt(`Do you want to see the what time it is?: `)
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()

ask = `Yes`
? alert(`${year}/${month}/${} ${hours}:${minutes}`)
: alert(`Thank you`)
