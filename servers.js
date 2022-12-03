var http =require('http'); // read buil-in module
http.createServer((req,res)=>{
    res.write("This line has been instantiated from the eli server...")
    res.end()
    }).listen(8000)