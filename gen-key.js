const fs = require('fs')
const IPFS = require('ipfs')
const password = 'peer-pad-pinner-password' 
const node = new IPFS({ pass: password })

const name = process.argv[2]
if (!name) {
  console.error('Need key name')
  process.exit(1)
}

node.on('ready', async () => {
  // Ready to use!
  // See https://github.com/ipfs/js-ipfs#core-api
  const ipfs = node

  ipfs.key.gen(name, { type: 'rsa', size: 2048 }, (err, key) => {
    if (err) throw err
    ipfs.key.export(name, password, (err, pem) => {
      if (err) throw err
      const filename = `${name}.pem`  
      fs.writeFileSync(filename, pem)  
      console.log('Key exported to:', filename)
      process.exit(0)
    })
  })
})

