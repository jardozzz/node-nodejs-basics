import {parentPort} from 'worker_threads'
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const sendResult = () => {

   parentPort.on('message',(data)=>{
    if(data.number===11) throw new Error
    parentPort.postMessage({result:nthFibonacci(data.n),status:'resolved',number:data.number})
   })
};

sendResult();
