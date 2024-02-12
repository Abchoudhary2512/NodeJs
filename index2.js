// const path = require("path")
// const filepath = "I:\Development\NodeJs\files\sample.txt"

// // //directory name
// // console.log(path.dirname(filepath));

// // //basename
// // console.log(path.basename(filepath));


// // //extension
// // console.log(path.extname(filepath));

// const fs = require("fs")
// // console.log(fs);

// //readfile - async

// fs.readFile(filepath,"utf-8" ,(err,data) => {
//     if (err) throw new Error("something went wrong");
//     console.log(data);
// })


// //sync
// try{
//     const data = fs.readFileSync(path.join(__dirname),"files","sample.txt");
//     console.log(data);
// }
// catch(err){
//      console.log(err);
// }

const fs = require('fs');
 
let data = "This is a file containing a collection of books.";
 
fs.writeFile("sample.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});