// built-in modules in node js:
      /*    1. os
            2.path
            3.Fs
            4.HTTP
      */

//os module:
const os= require('os')

//info about  current info
const user=os.userInfo()
console.log(user) 

//method return system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`)


const currentOS={
    name:os.type(),
    release:os.release(),
    tottalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)


/* ------output:--------*/
//  name: 'Windows_NT',
//   release: '10.0.19044',
//   tottalmem: 4211781632,
//   freemem: 771096576



// path:
const path= require('path')
console.log(path.sep)

const filepath =path.join('/HP/','Git','Node-js-Express-js')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absolute =path.resolve(__dirname,'/HP/','Git','Node-js-Express-js')
console.log(absolute)


/*-----------  output-----------*/

// \
// \HP\Git\Node-js-Express-js
// Node-js-Express-js
// C:\HP\Git\Node-js-Express-js