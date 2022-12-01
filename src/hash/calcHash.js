import crypto, { createHash } from 'crypto'
import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

const calculateHash = async () => {
  const hash=createHash('sha256')
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files/fileToCalculateHashFor.txt')
    const input=fs.createReadStream(p)
    input.on('readable',()=>{
     let chunk=input.read()
      chunk? hash.update(chunk):console.log(hash.digest('hex'))
    })
};

await calculateHash();
