import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files/fileToWrite.txt')
    let output=fs.createWriteStream(p)
    process.stdin.pipe(output)
};

await write();
