import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files')
  let list =await fs.readdir(p)
  if(!list.includes('fileToRead.txt')){
    throw new Error("FS operation failed")
  }
  else {
    console.log(await fs.readFile(p+"/fileToRead.txt",'utf-8'))
  }
};

await read();
