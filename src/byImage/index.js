import hashes from './mapping.js'
import hash from './hash.js'

// the list uses spaces, but wtf_wikipedia returns file names with underscores
const normalize = (str) => str.toLowerCase().replace(/_/g, ' ').trim()

const bad = new Set(hashes.split(' '))

// look for any known obscene images from wikipedia's
// https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list
const byImage = function (doc) {
  const images = doc.images()
  const found = []
  for (let i = 0; i < images.length; i++) {
    let file = images[i].file()
    file = normalize(file.replace(/^[^:]*:/, ''))
    if (bad.has(hash(file))) {
      found.push({ reason: 'Obscenity', name: file })
    }
  }
  return found
}

export default byImage
