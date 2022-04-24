//NOTE:
//run this file on cmd/terminal with node index.js

console.log("Hello World");

//enables local file system manipulation with node
const fileSystem = require("fs");

//copies a file (srcFile_name, destFile_name)
fileSystem.copyFileSync("index.js", "index2.js");