import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url'
import os from 'os'
import { Worker, isMainThread, workerData,parentPort } from 'worker_threads'
const performCalculations = async () => {
  const start=10
    const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let workerPath=path.join(__dirname,'worker.js')
    let num=os.cpus().length,result=[]
    let threads=Array(num).fill(0)
   const workers= threads.map((element,index)=>{
    let  wk=new Worker(workerPath)
     wk.on('message',(data)=>{
result.push(data)
num-=1
if(num===0) console.log(result.sort((a,b)=>a.number-b.number).map(elem=>{delete elem.number
  return elem}))
wk.unref()

     })
      wk.on('error',()=>{
        num-=1
        result.push({result:null,number:index,status:'Error'})
        if(num===0) console.log(result.sort((a,b)=>a.number-b.number).map(elem=>{delete elem.number
          return elem}))

      })
wk.postMessage({n:start+index,number:index})

      return wk
    })
};

await performCalculations();
