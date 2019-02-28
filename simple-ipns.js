const IPFS = require('ipfs')
const password = 'peer-pad-pinner-password' 
const node = new IPFS({ pass: password })

node.on('ready', async () => {
  // Ready to use!
  // See https://github.com/ipfs/js-ipfs#core-api
  const ipfs = node
  const promise = ipfs.dag.put({test: 2})
  promise.then(cid => {
    console.log('CID:', cid.toString())
    ipfs.name.publish(cid, { key: 'jim1' }, (err, name) => {
      if (err) throw err
      console.log('Result:', name)
    })
  })
})

