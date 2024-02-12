const promise = new Promise((resolve, reject) => {
  console.log("welcome to the promise");
  if (true) {
    resolve();
  } else {
    reject();
  }
});

//using .then and two functions are the inputs for the same (first one is for the resolve function and second one is rejection function)
promise.then(
  () => {console.log("success")},
  () => {console.log("fail!!!!")}
);
