import wtf from 'wtf_wikipedia'

let plugin
if (process.env.TESTENV === 'prod') {
  console.log('🧢  -  testing production')
  plugin = (await import('../builds/wtf-plugin-nsfw.mjs')).default
} else {
  plugin = (await import('../src/index.js')).default
}
wtf.extend(plugin)

export default wtf
