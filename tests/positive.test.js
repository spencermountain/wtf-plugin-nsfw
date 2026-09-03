import test from 'tape'
import fs from 'fs'
import wtf from './_lib.js'

const read = (name) => fs.readFileSync(new URL(`./cache/${name}.txt`, import.meta.url), 'utf8')

test('positive test', function (t) {
  const arr = ['one-night-stand', 'fashionistas', 'rocco-siffredi']
  arr.forEach((str) => {
    const doc = wtf(read(str))
    t.equal(doc.nsfw().safe_for_work, false, str)
  })
  t.end()
})
