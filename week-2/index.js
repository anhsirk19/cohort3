// const fs = require('fs');

// function cleanFile(filePath, cb){
//     fs.readFile(filePath, "utf-8", function(err, data){
//         data = data.trim();
//         fs.writeFile(filePath, data, function(){
//             cb();
//         });
//     })
// }



// function onDone() {
// 	console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone)

// const fs = require('fs');

// function cleanFile(path){
//     return new Promise(function (res){
//         fs.readFile(path, "utf-8", function(err, data){
//                 data = data.trim();
//                 fs.writeFile(path, data, function(){
//                 res();
//             });
//         })
//     })
// }

// async function main() {
//     await cleanFile("a.txt")
//     console.log("Done cleaning file");
// }
 
// main();
// console.log("async");