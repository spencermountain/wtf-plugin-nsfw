var wtf = require('wtf_wikipedia')
wtf.extend(require('./src'))

wtf.fetch('Jeffrey Dahmer').then(doc => {
  console.log(doc.sfw())
})
// let file = 'United-Kingdom'
// let str = require('fs')
//   .readFileSync(`./tests/cache/${file}.txt`)
//   .toString()

// let doc = wtf(str)
// console.log(JSON.stringify(doc.sfw(), null, 2))
