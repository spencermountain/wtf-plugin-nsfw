import test from 'tape'
import wtf from './_lib.js'

const tmpl = (name) => wtf(`{{${name}}}\nSome text.`).nsfw()

test('template detection', function (t) {
  t.equal(tmpl('Human sexuality').reason, 'Sexuality', 'exact mapping')
  t.equal(tmpl('Masturbation').reason, 'Sexuality', 'exact mapping, case-insensitive')
  t.equal(tmpl('Stimulants').reason, 'Drug-use', 'exact mapping')
  t.equal(tmpl('Terrorism').reason, 'Violence', 'pattern match')
  t.equal(tmpl('Sex positions').reason, 'Sexuality', 'sex pattern')

  const res = tmpl('Human sexuality')
  t.deepEqual(res.detail.template, [{ reason: 'Sexuality', name: 'human sexuality' }], 'detail shape')
  t.end()
})

test('template negatives', function (t) {
  t.equal(tmpl('Infobox person|name=Foo').safe_for_work, true, 'infobox')
  t.equal(tmpl('Citation needed').safe_for_work, true, 'unrelated template')
  t.equal(tmpl('Sussex').safe_for_work, true, 'no word-boundary sex match')
  t.end()
})
