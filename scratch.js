var wtf = require('wtf_wikipedia')
wtf.extend(require('./src'))

wtf.fetch('The Matrix', 'en').then((doc) => {
  console.log(doc.nsfw().detail)
})
// let file = 'United-Kingdom'
// let str = require('fs')
//   .readFileSync(`./tests/cache/${file}.txt`)
//   .toString()

// let doc = wtf(str)
// console.log(JSON.stringify(doc.sfw(), null, 2))
