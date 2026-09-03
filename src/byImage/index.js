import list from './mapping.js'

const bad = new Set(list.map((s) => s.toLowerCase()))

// look for any known obscene images from wikipedia's
// https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list
const byImage = function (doc) {
  const images = doc.images()
  const found = []
  for (let i = 0; i < images.length; i++) {
    let file = images[i].file()
    file = file.toLowerCase().replace(/.*:/, '').trim()
    if (bad.has(file)) {
      found.push({ reason: mapping[file], name: file })
    }
  }
  return found
}

export default byImage
