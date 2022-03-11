const {readFileSync,writeFileSync} =require('fs')
console.log('start')
const first =readFileSync('../context/first.txt','utf8')
const second =readFileSync('../context/second.txt','utf8')

writeFileSync(
    './context/result-sync.txt',
    `here is the result: ${first},${second}`,
   { flag:'a'}
)
console.log('done with this task ')
console.log('starting next one ')