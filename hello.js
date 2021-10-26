process.stdin.on('data', (data)=>{
    const name = data.toString().trim().toUpperCase();
    if(name !== ""){
        process.stdout.write(`Hello ${name}!`);
    }else{
        process.stdout.write("Empty input...")
    }
})