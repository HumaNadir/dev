const fs = require ('fs');
fs.writeFileSync('file.txt', 'hello world');
console.log('file write done');
fs.unlinkSync('file.txt');
//if trying to del file which does not exist
try {
    fs.unlinkSync('fil.txt');
} catch (error) {
    console.log("error occured", error);
} 
//for async

fs.unlink('file.txt', function(err){
if(err){

    console.log("error occured", err);
    return;
}
console.log("file deleted succesfuly");
}) 