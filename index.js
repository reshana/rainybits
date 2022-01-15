const fs = require('fs')
const regex = /^(\bEmail|Address|Phone|Mobile|Contact no|Name\b).*/i


fs.readFile('resume.txt', 'utf8', (err, data)=> {
  if(err){
    console.log(err)
  }
  arr = data.split('\r\n')
  for(i=0; i< arr.length; i++){
    if(regex.test(arr[i])){
console.log(arr[i])
    }
  }
})
