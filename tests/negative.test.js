const test = require('tape')
const wtf = require('./_lib')
const fs = require('fs')
const path = require('path')

test('negative test', function (t) {
  let arr = [
    '2008-British-motorcycle-Grand-Prix',
    'AACTA-Award-for-Outstanding-Achievement-in-Short-Film-Screen-Craft',
    'Alanine—oxo-acid-transaminase',
    'Alexander-Y-Type',
    'Allen-R.-Morris',
    'Alsea-(company)',
    'Altimont-Butler',
    'Antique-(band)',
    'Anwar_Kamal_Khan',
    'Arts_Club_of_Chicago',
    'africaans',
    'al_Haytham',
    'anarchism'
  ]
  arr.forEach((str) => {
    let abs = path.join(__dirname, `./cache/${str}.txt`)
    let txt = fs.readFileSync(abs).toString()
    let doc = wtf(txt)
    t.equal(doc.nsfw().safe_for_work, true, str)
  })
  t.end()
})
