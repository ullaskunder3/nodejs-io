const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "hello.txt");
// @TODO Remove log 
// console.log(filePath);

fs.readFile(filePath, "utf8", (err, contents)=>{
    if(err){
        return console.log(err);
    }
    console.log("Writing the file content:", contents);

    const contentUpdating = contents.toUpperCase();

    fs.writeFile(filePath, contentUpdating, function(err){
        if(err) throw err;
        console.log("File is updated...");
    });
});