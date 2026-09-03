import byTemplate from './byTemplate/index.js'
import byCategory from './byCategory/index.js'
import byTitle from './byTitle/index.js'
import byImage from './byImage/index.js'

const plugin = function (models) {
  // add a new method to main class
  models.Doc.prototype.nsfw = function (options) {
    let doc = this
    let detail = {}

    //look for 'john doe (pimp)', etc
    detail.title = byTitle(doc, options)
    // look for known obscene images
    detail.image = byImage(doc, options)
    //look for '{{terrorism}}'
    detail.template = byTemplate(doc, options)
    //look for 'Category: Porn websites', etc
    detail.category = byCategory(doc, options)

    let keys = Object.keys(detail)
    for (let i = 0; i < keys.length; i++) {
      if (detail[keys[i]].length > 0) {
        let reason = detail[keys[i]].find((o) => o.reason) || {}
        return {
          safe_for_work: false,
          reason: reason.reason,
          detail: detail
        }
      }
    }
    //otherwise, it's safe...?
    return {
      safe_for_work: true,
      reason: null,
      detail: detail
    }
  }
}
export default plugin
