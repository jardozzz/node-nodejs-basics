import process from 'process'
const parseEnv = () => {
  process.env.RSS_123qrqwe="qwer"
    const str="RSS_"
   let q= Object.keys(process.env).filter(elem=>elem.includes(str))
q.forEach(elem=>{
  console.log(`${elem}=${process.env[elem]}`)
})
};

parseEnv();
