//common js : every file has module (by default)
//module : module is encapsulated code

//require method :
const names= require('./names.js');
const sayHi= require('./util.js');
// console.log(names)
require('./add')




// sayHi('suzan')
// sayHi(names.john)
// sayHi(names.peter)


// ouput of:- node module.js
// export: { john: 'hi! i m john', peter: 'hi! i m peter' }