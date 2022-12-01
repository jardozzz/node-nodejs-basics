import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files'),p1=path.resolve(__dirname,'files_copy')
    const list1=await fs.readdir(__dirname)
    const shouldThrowErr=!list1.includes('files') || list1.includes('files_copy')
    if (shouldThrowErr) throw new Error("FS operation failed")
    else {
      await fs.mkdir(p1)
      let list=await fs.readdir(p)
    await list.forEach(elem=>fs.copyFile(path.join(p,elem),path.join(p1,elem)))
    }

};

copy();
