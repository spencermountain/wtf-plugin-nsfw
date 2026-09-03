import test from 'tape'
import wtf from './_lib.js'

// wtf_wikipedia takes the page title as an option
const titled = (title) => wtf('Hello there.', { title })

test('title detection', function (t) {
  t.equal(titled('Foo (pimp)').nsfw().reason, 'Sexuality', 'mapped parenthetical')
  t.equal(titled('Foo (sex position)').nsfw().reason, 'Sexuality', 'mapped multi-word parenthetical')
  t.equal(titled('Foo (Sexual_Slang)').nsfw().reason, 'Sexuality', 'case and underscores normalised')
  t.equal(titled('Foo (sexual practice)').nsfw().reason, 'Sexuality', 'regex fallback')

  const res = titled('Foo (pimp)').nsfw()
  t.deepEqual(res.detail.title, [{ reason: 'Sexuality', title: 'pimp' }], 'detail shape')
  t.end()
})

test('title false-positives', function (t) {
  const safe = [
    'Colchester (Essex)',
    'Middlesex (county)',
    'Alsea (company)',
    'Tornado (film)',
    'Sex Pistols',
    'Wessex'
  ]
  safe.forEach((title) => {
    t.equal(titled(title).nsfw().safe_for_work, true, title)
  })
  t.end()
})
