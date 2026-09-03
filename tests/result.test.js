import test from 'tape'
import wtf from './_lib.js'

const REASONS = ['Sexuality', 'Drug-use', 'Weapons', 'Violence', 'Profanity', 'Obscenity']

test('safe result shape', function (t) {
  const res = wtf('Hello there.\n[[Category:Canadian film directors]]').nsfw()
  t.equal(res.safe_for_work, true)
  t.equal(res.reason, null)
  t.deepEqual(Object.keys(res.detail).sort(), ['category', 'image', 'template', 'title'], 'all four detectors reported')
  Object.keys(res.detail).forEach((k) => {
    t.deepEqual(res.detail[k], [], `detail.${k} is empty`)
  })
  t.end()
})

test('unsafe result shape', function (t) {
  const res = wtf('{{Terrorism}}\n[[Category:Inhalants]]').nsfw()
  t.equal(res.safe_for_work, false)
  t.ok(REASONS.includes(res.reason), 'reason is a known value')
  const hits = Object.values(res.detail).flat()
  t.ok(hits.some((h) => h.reason === res.reason), 'reason comes from a detail entry')
  t.equal(res.detail.template.length, 1, 'template hit')
  t.equal(res.detail.category.length, 1, 'category hit')
  t.end()
})

test('each detector reports under its own key', function (t) {
  const res = wtf('Hello.', { title: 'Foo (pimp)' }).nsfw()
  t.equal(res.detail.title.length, 1, 'title hit lands in detail.title')
  t.equal(res.detail.image.length, 0, 'detail.image is separate from detail.title')
  t.end()
})
