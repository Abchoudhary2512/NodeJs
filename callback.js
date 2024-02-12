console.log("start");
function asyncst(cb) {
    console.log("running");
    setTimeout(cb,0);

}
asyncst(()=>{
    if(err) {
        throw err;
    }
    else{
        console.log("data",data);
    }

})
console.log("end");
const name = "amjay"