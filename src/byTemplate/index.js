import patterns from './patterns.js'
import mapping from './mapping.js'
import byPattern from '../_byPattern.js'

const byTemplate = function (doc) {
  const templates = doc.templates()
  const found = []
  for (let i = 0; i < templates.length; i++) {
    const title = templates[i].template
    if (mapping.hasOwnProperty(title)) {
      found.push({ reason: mapping[title], name: title })
    } else {
      // try regex-list on it
      const type = byPattern(title, patterns)
      if (type) {
        found.push({ reason: type, name: title })
      }
    }
  }
  return found
}

export default byTemplate
