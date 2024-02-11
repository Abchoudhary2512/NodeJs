const sum = () => {
  console.log(`the sum is ${2 + 3}`);
};
const mul = () => {
    console.log(`the multiply is ${2 * 3}`);
  };
  
const measuretime = () =>{
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.time("mul()");
    mul();
    console.timeEnd("mul()");

}  
measuretime();

