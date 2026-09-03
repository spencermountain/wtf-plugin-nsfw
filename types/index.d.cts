// CommonJS type declarations for the `require()` entrypoint (builds/wtf-plugin-nsfw.cjs),
// which sets `module.exports = plugin`. The real declarations, including the
// wtf_wikipedia augmentation, live in index.d.ts - this file re-exposes them with `export =`.
type Esm = typeof import('./index.js', { with: { 'resolution-mode': 'import' } })

declare const nsfwPlugin: Esm['default']

declare namespace nsfwPlugin {
  export type NsfwReason = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwReason
  export type NsfwTitleMatch = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwTitleMatch
  export type NsfwImageMatch = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwImageMatch
  export type NsfwTemplateMatch = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwTemplateMatch
  export type NsfwCategoryMatch = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwCategoryMatch
  export type NsfwDetail = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwDetail
  export type NsfwResult = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwResult
  export type NsfwMethods = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwMethods
  export type NsfwDocument = import('./index.js', { with: { 'resolution-mode': 'import' } }).NsfwDocument
}

export = nsfwPlugin
