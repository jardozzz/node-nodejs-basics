import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import zlib from 'zlib'
const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    let p=path.resolve(__dirname,'files/fileToCompress.txt'),p1=path.resolve(__dirname,'files/archive.gz')
let gzip=zlib.createGunzip()
const input=fs.createReadStream(p1),output=fs.createWriteStream(p)
input.pipe(gzip).pipe(output)
};

await decompress();
