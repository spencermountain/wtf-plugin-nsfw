const mapping = require('./mapping')
// look for any known obscene images from wikipedia's
// https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list
const byImage = function (doc) {
  let images = doc.images()
  let found = []
  for (let i = 0; i < images.length; i++) {
    let file = images[i].file()
    file = file.toLowerCase().replace(/.*:/i, '').trim()
    if (mapping.hasOwnProperty(file)) {
      found.push({ reason: mapping[file], name: file })
    }
  }
  return found
}

module.exports = byImage
