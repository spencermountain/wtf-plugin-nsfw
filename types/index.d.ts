import type wtf from 'wtf_wikipedia'

/** the broad category an article was flagged under */
export type NsfwReason =
  'Sexuality' | 'Drug-use' | 'Weapons' | 'Violence' | 'Profanity' | 'Obscenity'

/** a page-title match, like 'Star Wars (adult film)' */
export interface NsfwTitleMatch {
  reason: NsfwReason
  title: string
}
/** an image from wikipedia's bad-image list */
export interface NsfwImageMatch {
  reason: NsfwReason
  name: string
}
/** a template match, like {{sex positions}} */
export interface NsfwTemplateMatch {
  reason: NsfwReason
  name: string
}
/** a category match, like [[Category:Brothels]] */
export interface NsfwCategoryMatch {
  reason: NsfwReason
  cat: string
}

export interface NsfwDetail {
  title: NsfwTitleMatch[]
  image: NsfwImageMatch[]
  template: NsfwTemplateMatch[]
  category: NsfwCategoryMatch[]
}

export type NsfwResult =
  | { safe_for_work: true; reason: null; detail: NsfwDetail }
  | { safe_for_work: false; reason: NsfwReason; detail: NsfwDetail }

/** the method this plugin adds to every Document */
export interface NsfwMethods {
  /** flag objectionable or adult content, from categories, templates, titles and images */
  nsfw(options?: object): NsfwResult
}

/**
 * a wtf_wikipedia Document with `.nsfw()` attached.
 * wtf_wikipedia does not currently export its Document class by name, so the
 * module augmentation below cannot merge with it - cast to this type instead:
 *   const doc = wtf(text) as NsfwDocument
 */
export type NsfwDocument = wtf.Document & NsfwMethods

// takes effect automatically once wtf_wikipedia exports `Document` from its types
declare module 'wtf_wikipedia' {
  interface Document extends NsfwMethods {}
}

/** pass this to `wtf.extend()` to add `doc.nsfw()` */
declare const nsfwPlugin: (
  models: { Doc: { prototype: object } },
  templates?: object,
  lib?: typeof wtf
) => void
export default nsfwPlugin
