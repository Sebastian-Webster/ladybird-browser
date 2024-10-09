const crypto = require('crypto');

const master = []

for (let i = 0; i < 10; i++) {
    master.push(crypto.randomBytes(2**31 - 1))
}

console.log('done')
setTimeout(() => {}, 10000000)