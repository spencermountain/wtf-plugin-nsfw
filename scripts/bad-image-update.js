import wtf from 'wtf_wikipedia'
import fs from 'fs'

const url = 'https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list'

wtf.fetch(url).then((doc) => {
  let images = []
  doc
    .lists()[0]
    .json()
    .forEach((item) => {
      let file = item.text.match(/\[\[.*?\]\]/)[0]
      file = file.replace('[[:File:', '')
      file = file.replace(']]', '')
      if (file) {
        images.push(file)
      }
    })
  let out =
    `// bad images from ${url}
  export default ` + JSON.stringify(images, null, 2)
  fs.writeFileSync('bad-image-list.js', out)
})
