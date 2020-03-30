const test = require('tape')
const wtf = require('./_lib')
const fs = require('fs')
const path = require('path')

test('positive test', function(t) {
  let arr = ['one-night-stand', 'fashionistas', 'rocco-siffredi']
  arr.forEach(str => {
    let abs = path.join(__dirname, `./cache/${str}.txt`)
    let txt = fs.readFileSync(abs).toString()
    let doc = wtf(txt)
    t.equal(doc.nsfw().safe_for_work, false, str)
  })
  t.end()
})
