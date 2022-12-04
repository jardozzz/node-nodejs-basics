import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
const list = async () => {
  try{
  const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  let p=path.resolve(__dirname,'files')
let list =await fs.readdir(p)
console.log(list)
}
catch(err){
  throw new Error("FS operation failed")
}
};

await list();
