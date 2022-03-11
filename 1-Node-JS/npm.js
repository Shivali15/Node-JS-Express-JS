//npm-version
//npm -v

//local dependencies:- use it only in particular project
// npm i <packageName>

//global dependencies: use it in any project
// npm install -g <packageName>


//package.json-manifest file (store important info about project/package)
//manual approach (create package.json in the root ,create a properties etc)
// npm init (step by step,press enter to skip)
// npm init -y (everything default)

//npm i lodash
//npm i bootstrap

//npm i nodemon -D
// adding dev dependencies




const _=require('lodash')
const items=[1[2[3[4]]]]
const  newitems=_.flattenDeep(items)
console.log(newitems)