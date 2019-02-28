const IPFS = require('ipfs')
const node = new IPFS()

node.on('ready', async () => {
  // Ready to use!
  // See https://github.com/ipfs/js-ipfs#core-api
  const ipfs = node
  const address = '/ipns/Qmc64hrvygNSYwuQrbtjB6qoo7Dfc71tS1yVJxyVZWVsnV'
  console.log('Jim1')
  ipfs.name.resolve(address, (err, name) => {
    console.log('Jim2')
    if (err) throw err
    console.log('Result:', name)
  })
})

