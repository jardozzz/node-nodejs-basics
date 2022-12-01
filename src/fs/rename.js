import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files')
  let list =await fs.readdir(p)
  if(!list.includes('wrongFilename.txt') || list.includes('properFilename.md') ){
    throw new Error("FS operation failed")
  }
  else {
    fs.rename(path.join(p,'/wrongFilename.txt'),path.join(p,'/properFilename.md'))
  }
};

await rename();
