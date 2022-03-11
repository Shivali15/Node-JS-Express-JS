// Gobals :No window !!!

//__dirname - path to current directory
//__filename - file name of JS code
// require()- function to use modules (common JS)
// module -info about current module (file)
// process - info about env (environment) where the progarm is being executed


console.log(__dirname)
console.log(__filename)
// output:
// C:\Users\HP\Git\Node-js-Express-js\1-Node-JS
// C:\Users\HP\Git\Node-js-Express-js\1-Node-JS\Gobals.js

setInterval(()=>{
    console.log("hello world!")
},4)
// setinterval () passing with  1 callback function which console log infinitly 
setTimeout(()=>{
    console.log("hii!")
},1)



