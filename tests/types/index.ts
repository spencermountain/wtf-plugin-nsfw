import wtf from 'wtf_wikipedia'
import nsfwPlugin, { NsfwDocument, NsfwResult, NsfwReason, NsfwDetail } from 'wtf-plugin-nsfw'

wtf.extend(nsfwPlugin)

// wtf_wikipedia doesn't export its Document class by name yet, so cast for now
const doc = wtf('[[Category:Brothels]]') as NsfwDocument
const res: NsfwResult = doc.nsfw()
const detail: NsfwDetail = res.detail
const cats: string[] = detail.category.map((c) => c.cat)
const names: string[] = [...detail.template, ...detail.image].map((o) => o.name)
const titles: string[] = detail.title.map((o) => o.title)

// the discriminated union narrows `reason`
if (res.safe_for_work === false) {
  const why: NsfwReason = res.reason
  console.log(why, cats, names, titles)
} else {
  const nothing: null = res.reason
  console.log(nothing)
}

// the plain Document api is still there
const text: string = doc.text()
console.log(text)

// fetched docs get the method too
wtf.fetch('One-night stand').then((d) => {
  if (d && !Array.isArray(d)) {
    console.log((d as NsfwDocument).nsfw().safe_for_work)
  }
})
