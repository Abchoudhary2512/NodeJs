//error object

const error = new Error("Something went wrong");

//we have to throw this error
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object")

const {CustomeError} = require("./CustomError");
// throw new CustomeError("This is a custom error");


//handle exception using try and catch
// try{
//     doSomething()
// }
// catch(e){
//     console.log("Error occured");
//     console.log(e);
// }

function doSomething(){
    const data = fetch("localhost:3000/api")
    // console.log("khdfksd")
}

// process.on("uncaughtException",(err)=>{
//     console.log("uncaught exception is found");
//     process.exit();
// })

doSomething();

//exception with promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
  