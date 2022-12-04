
import * as fs from 'fs'
import { Transform } from 'stream';
const transform = async () => {
let input=process.stdin
let output=process.stdout
let trans=new Transform({
transform(chunk,code,callback){
  callback(null,chunk.toString().split("").reverse().join("")+"\n")
}
})
input.pipe(trans).pipe(output)
};

await transform();
