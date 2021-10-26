const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "hello.txt");
// @TODO Remove log 
// console.log(filePath);

const content = fs.readFileSync(filePath, "utf8");
console.log("Writing the file content:", content);

const contentUpdating = content.toUpperCase();

fs.writeFileSync(filePath, contentUpdating);
console.log("File is updated...");