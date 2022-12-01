import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  let p=path.resolve(__dirname,'files')
let list =await fs.readdir(p)
if(!list.includes('fileToRemove.txt')){
  throw new Error("FS operation failed")
}
else{
  fs.unlink(path.join(p,'fileToRemove.txt'))
}
};

await remove();
