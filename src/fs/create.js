import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  let p=path.resolve(__dirname,'files')
let list =await fs.readdir(p)
if(list.includes('fresh.txt')){
  throw new Error("FS operation failed")
}
else {
  await fs.writeFile(p+"/fresh.txt","I am fresh and young")
}
};

await create();
