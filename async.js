console.log("Start the operation");

function milli(milliseconds){
    
    const data = new Date().getTime();
    console.log("operation running");
    while(new Date().getTime() < data + milliseconds ){
        console.log("in progress");
    }
    console.log("operation done");

}
milli(1000);

console.log("do something else");