import cp from 'child_process'
import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'

const spawnChildProcess = async (args) => {
if (!(args instanceof Array)){
  throw new Error('You should provide arguments in array,not this crap')
}
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const childPath=path.resolve(__dirname,'./files/script.js')
  const child=cp.fork(childPath,args)

};

spawnChildProcess([1,2,3,4,5,6,7,8]);
