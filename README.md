<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>a plugin for <a href="https://github.com/spencermountain/wtf_wikipedia/">wtf_wikipedia</a></div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/wtf-plugin-nsfw">
    <img src="https://img.shields.io/npm/v/wtf-plugin-nsfw.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/wtf-plugin-nsfw/builds/wtf-plugin-sfw.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/wtf-plugin-html/master/builds/wtf-plugin-nsfw.min.js" />
  </a>
   <hr/>
</div>

<div align="center">
  <code>npm install wtf-plugin-nsfw</code>
</div>

This plugin is a (work in progress) attempt to filter objectionable, or adult content, in various forms, in wikipedia.

Wikipedia has [frequently rejected](https://en.wikipedia.org/wiki/Wikipedia:Rating_system) any explicit rating system, or content flagging, due to fears that it will be misused, or generate dispute.

As a result, there is a large amount of graphic imagery, pornography, detailed violence, drug use, and other nsfw content, without any clear-cut way to identify it. [1](https://en.wikipedia.org/wiki/Wikipedia_talk:No_disclaimers_in_articles)

This library tries to flag an article as `nsfw`, according to some structured information, and some opinionated (but sensible) rules.

It looks in a number of different places:

- categories (like **'[[Category:Machine Guns]]'**)
- templates (like **{{Sex positions}}**)
- page titles (like **star wars (Adult Film)**)
- pages with images from Wikipedia's [bad image list](https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list)

```js
const wtf = require('wtf_wikipedia')
wtf.extend(require('wtf-plugin-sfw'))

let doc = await wtf.fetch('One-night stand')
let res = doc.nsfw()
//{
//  safe_for_work: false,
//  reason: 'Sexuality',
//  detail: {template: [{name:'human sexuality']}
//}

let doc = await wtf.fetch('Toronto Raptors')
let res = doc.sfw()
//{
//  safe_for_work: true,
//  reason:null
//  detail: {}
//}
```

The `reason` property may be one of **Sexuality|Drug-use|Weapons|Violence|Profanity**

### Notes:

In general, sexual content is flagged in a general way - without any judgement or consideration of morality or taste.
This could include content that most find harmless, like books with LGBT characters, or medical information about sexual body parts.

Explicit recreational drug information is flagged, along with some (often helpful) medical information.

Weapon content of all kinds is attempted to be flagged. This includes historical, and fictional weaponry.

Wars and military conflicts are kept, but an attempt is made to limit pages with grotesque violent acts. (particularly difficult)

This library is very limited right now, and is certainly not appropriate for any commercial or wide-spread usage.

You're free to use the information provided by this library however you wish. You may choose to establish your own rules.

This library is built for the english wikipedia, and other languages are not supported.

### Disclaimer

This script is not intended to be used as a sufficient content-filter for any content, in wikipedia or elsewhere.
Additional care needs to be taken, in addition to this script, to ensure content meets any content guidelines, or that it is safe for a general audiance.

The authors and contributors take no responsibility for the performance or accuracy of this script.

work-in-progress!

MIT
