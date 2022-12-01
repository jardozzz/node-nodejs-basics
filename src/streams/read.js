import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files/fileToRead.txt')
    const input=fs.createReadStream(p)
   input1.pipe(process.stdout)

};

await read();
