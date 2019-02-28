const IPFS = require('ipfs')
const node = new IPFS()

node.on('ready', async () => {
  // Ready to use!
  // See https://github.com/ipfs/js-ipfs#core-api
  const ipfs = node
  const cid = ipfs.dag.put({test: 2})
  console.log('Jim', cid)
  cid.then(result => { console.log('Jim2', result.toString(), result) })
})

