/* Exercise 1:
Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()
let a = (date >= 10 && hours >= 10 && minutes >= 10)
a
? alert(`${year}/${month}/${date} ${hours}:${minutes}`)
: alert(`Thank you`)


????????????????????????????????????????????????????????
