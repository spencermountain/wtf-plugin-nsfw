import test from 'tape'
import wtf from './_lib.js'

// entries from https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list
const BAD = 'Penis anatomy.jpg'
const BAD_UPPER = 'Anatomy2.JPG'
const BAD_PNG = 'Stormfrontlogo.png'
const BAD_UNICODE = '음경의 외부모습.jpg'

test('image detection', function (t) {
  let res = wtf(`[[File:${BAD}|thumb|caption]]\nSome text.`).nsfw()
  t.equal(res.safe_for_work, false, 'inline file link')
  t.equal(res.reason, 'Obscenity', 'reason')
  t.deepEqual(res.detail.image, [{ reason: 'Obscenity', name: BAD.toLowerCase() }], 'detail shape')

  res = wtf(`[[File:${BAD.replace(/ /g, '_')}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'underscores instead of spaces')

  res = wtf(`[[Image:${BAD}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'Image: prefix')

  res = wtf(`[[File:${BAD.toUpperCase()}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'case-insensitive')

  res = wtf(`[[File:${BAD_UPPER.toLowerCase()}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'list entry with uppercase extension')

  res = wtf(`[[File:${BAD_PNG}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'png file')

  res = wtf(`[[File:${BAD_UNICODE}]]`).nsfw()
  t.equal(res.safe_for_work, false, 'non-latin file name')

  res = wtf(`{{Infobox person\n| name = Foo\n| image = ${BAD}\n}}\nFoo is a person.`).nsfw()
  t.equal(res.safe_for_work, false, 'infobox image')

  res = wtf(`<gallery>\nFile:${BAD}|caption\n</gallery>`).nsfw()
  t.equal(res.safe_for_work, false, 'gallery image')

  res = wtf(`[[File:${BAD}]]\n[[File:${BAD_PNG}]]`).nsfw()
  t.equal(res.detail.image.length, 2, 'every bad image is reported')
  t.end()
})

test('image negatives', function (t) {
  t.equal(wtf('[[File:Toronto skyline.jpg|thumb]]').nsfw().safe_for_work, true, 'unknown image')
  t.equal(wtf('{{Infobox city\n| image = Toronto skyline.jpg\n}}').nsfw().safe_for_work, true, 'unknown infobox image')
  t.equal(wtf(`[[File:Not ${BAD}]]`).nsfw().safe_for_work, true, 'no substring matching')
  t.end()
})
