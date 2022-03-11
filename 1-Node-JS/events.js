const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('respone',(name,id) =>{
    console.log(`data received user ${name} with ${id}`)
})
customEmitter.on('respone',() =>{
    console.log(`some other logic here`)
})
customEmitter.emit('respone','john',34)