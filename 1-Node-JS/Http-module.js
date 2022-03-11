const http=require('http');

//two parameters incoming request and response which is sending back 
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home page')
    }
    if(req.url==='/about'){
        //blocking code
        for(let i=0;i<1000;i++){
          for(let j=0;j<1000;j++){
           console.log(`${i},${j}`) 
        }  
        }
        res.end('About page')

    }
        res.end('Error page')

res.write('hello')
})
server.listen(5000,()=>{
    console.log('server listen on port :5000.....')
})