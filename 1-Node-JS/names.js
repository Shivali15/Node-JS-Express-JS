// local 
const secret="super secret"

// global : share
const john="hi! i m john"
const peter="hi! i m peter"




// export : is an object putting any thing in that we can access anywhere in module.js
module.exports={john,peter}
//key name as value of export object so seperate with comma (,)


// console.log(module)

// output:-

// Module {
//   id: '.',
//   path: 'C:\\Users\\HP\\Git\\Node-js-Express-js\\1-Node-JS',
//   exports: {},
//   filename: 'C:\\Users\\HP\\Git\\Node-js-Express-js\\1-Node-JS\\names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\HP\\Git\\Node-js-Express-js\\1-Node-JS\\node_modules',
//     'C:\\Users\\HP\\Git\\Node-js-Express-js\\node_modules',
//     'C:\\Users\\HP\\Git\\node_modules',
//     'C:\\Users\\HP\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ]
// }