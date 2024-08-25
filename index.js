// file write sync
/*const fs = require ('fs');
fs.writeFileSync('file.txt', 'hey,this is huma');
console.log('file write done');

//file write async
fs.writeFile('file.txt', 'hey,its me huma',function(err){
if(err){
    console.log('error occured', err);
}
console.log('file created successfuly');


});
console.log('after file written'); 

//read file sync
let data = fs.readFileSync('file.txt');
console.log('data of file is:', data.toString());

//read file async
fs.readFile('file.txt',function(err,data){

    if(err){
        console.log('error occured', err);
        return;
    }
    console.log('content of file is', data.toString());

}); */





// Import the built-in HTTP module
const http = require('http');
/

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
      
        res.statusCode = 200; 
        res.end('Server is live');
    } else {
        
        res.statusCode = 404; 
        res.end('404: Page not found');
    }
});

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});




