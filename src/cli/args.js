const parseArgs = () => {
  console.log( process.argv.slice(2).reduce((acc,curr,index)=>{
    if (index%2===0) acc+=curr.slice(2)
    else acc+=` is ${curr}; `
    return acc
  },""))
};

parseArgs();
