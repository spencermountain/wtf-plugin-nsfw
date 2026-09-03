import test from 'tape'
import wtf from './_lib.js'

const cat = (name) => wtf(`Some text.\n[[Category:${name}]]`).nsfw()

test('category detection', function (t) {
  t.equal(cat('Brothels').reason, 'Sexuality', 'pattern match')
  t.equal(cat('Inhalants').reason, 'Drug-use', 'exact mapping')
  t.equal(cat('English profanity').reason, 'Profanity', 'exact mapping')
  t.equal(cat('Bolt-action rifles').reason, 'Weapons', 'rifles pattern')
  t.equal(cat('Hand grenades').reason, 'Weapons', 'grenades pattern')
  t.equal(cat('Nazi propaganda films').reason, 'Profanity', 'propaganda films pattern')
  t.equal(cat('Strip_Clubs').reason, 'Sexuality', 'case and underscores normalised')

  const res = cat('Brothels')
  t.deepEqual(res.detail.category, [{ reason: 'Sexuality', cat: 'brothels' }], 'detail shape')
  t.end()
})

test('category allow-list', function (t) {
  // these would match a pattern, but are listed in okay.js
  t.equal(cat('Breast cancer survivors').safe_for_work, true, 'okay-list beats /breast/')
  t.equal(cat('Deaths from breast cancer').safe_for_work, true, 'okay-list beats /breast/')
  t.equal(cat('Explosives engineers').safe_for_work, true, 'okay-list beats /explosives/')
  t.equal(cat('Songs about nuclear war and weapons').safe_for_work, true, 'okay-list beats / weapons$/')
  t.equal(cat('Canadian film directors').safe_for_work, true, 'unrelated category')
  t.end()
})
