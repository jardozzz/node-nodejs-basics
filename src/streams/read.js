import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { Stream } from 'stream';
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files/fileToRead.txt')
    const input=fs.createReadStream(p)
    const input1=new Stream.Readable(p)
   input.pipe(process.stdout)

};

await read();
