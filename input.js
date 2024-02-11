const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question(`how are you??`,(name)=>{
    console.log(`i am ${name}` );
    rl.close();
});