const byTemplate = require('./byTemplate')
const byCategory = require('./byCategory')
const byTitle = require('./byTitle')
const byImage = require('./byImage')

const plugin = function (models) {
  // add a new method to main class
  models.Doc.prototype.nsfw = function (options) {
    let doc = this
    let detail = {}

    //look for 'john doe (pimp)', etc
    detail.title = byTitle(doc, options)
    // look for known obscene images
    detail.title = byImage(doc, options)
    //look for '{{terrorism}}'
    detail.template = byTemplate(doc, options)
    //look for 'Category: Porn websites', etc
    detail.category = byCategory(doc, options)

    let keys = Object.keys(detail)
    for (let i = 0; i < keys.length; i++) {
      if (detail[keys[i]].length > 0) {
        let reason = detail[keys[i]].find((o) => o.reason)
        return {
          safe_for_work: false,
          reason: reason,
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
module.exports = plugin
