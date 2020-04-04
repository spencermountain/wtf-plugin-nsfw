/* wtf-plugin-nsfw 0.0.1  MIT */
var patterns = {
  Sexuality: [/\bsex\b/i],
  Weapons: [/semi-automatic/i],
  Violence: [/terrorist attacks/i, /terrorism/i]
};

var mapping = {
  // https://en.wikipedia.org/wiki/Category:Sex_and_sexuality_templates
  // (March 2020)
  'animal sexual behavior': 'Sexuality',
  bdsm: 'Sexuality',
  'birth control methods': 'Sexuality',
  'sexual ethics': 'Sexuality',
  'gender and sexual identities': 'Sexuality',
  'gender studies': 'Sexuality',
  'hormonal contraceptives': 'Sexuality',
  'human sexuality': 'Sexuality',
  'human sexuality/sandbox': 'Sexuality',
  'in defensum castitatis': 'Sexuality',
  incest: 'Sexuality',
  intersex: 'Sexuality',
  'intersex sidebar': 'Sexuality',
  'sex and the law': 'Sexuality',
  'sex manuals': 'Sexuality',
  masturbation: 'Sexuality',
  mindgeek: 'Sexuality',
  nudity: 'Sexuality',
  'sexual orientation': 'Sexuality',
  paraphilias: 'Sexuality',
  pedophilia: 'Sexuality',
  'sex positions': 'Sexuality',
  'post-orgasmic diseases': 'Sexuality',
  prostitution: 'Sexuality',
  'prostitution in canada': 'Sexuality',
  'prostitution in china': 'Sexuality',
  'prostitution in france': 'Sexuality',
  'prostitution in germany': 'Sexuality',
  'prostitution in india': 'Sexuality',
  'prostitution in japan': 'Sexuality',
  'prostitution in new zealand': 'Sexuality',
  'prostitution in sweden': 'Sexuality',
  'prostitution in thailand': 'Sexuality',
  'prostitution in the netherlands': 'Sexuality',
  "prostitution in the people's republic of china": 'Sexuality',
  'prostitution in the united kingdom': 'Sexuality',
  'prostitution in the united states': 'Sexuality',
  rape: 'Sexuality',
  'rape in india': 'Sexuality',
  'rape in the united states': 'Sexuality',
  rapefooter: 'Sexuality',
  sex: 'Sexuality',
  'sex (biology)': 'Sexuality',
  'sex (biology)/sandbox': 'Sexuality',
  'sex sidebar': 'Sexuality',
  'sex/sandbox': 'Sexuality',
  'sexual abuse': 'Sexuality',
  'sexual fetishism': 'Sexuality',
  'sexual revolution': 'Sexuality',
  'sidebar prostitution in france': 'Sexuality',
  'sidebar prostitution in the united kingdom': 'Sexuality',
  'adolescent sexuality by country': 'Sexuality',
  'sexual slang': 'Sexuality',
  'sexuality by country': 'Sexuality',
  'sexual urban legends': 'Sexuality',
  'wikipedia talk:wikiproject sexology and sexuality/talkheader': 'Sexuality',
  zoophilia: 'Sexuality',
  //
  'hentai-stub': 'Sexuality',
  'lgbt-sex-book-stub': 'Sexuality',
  'porn-book-stub': 'Sexuality',
  'porn-stub': 'Sexuality',
  'sex-book-stub': 'Sexuality',
  'sex-crime-stub': 'Sexuality',
  'sex-documentary-film-stub': 'Sexuality',
  'sex-stub': 'Sexuality',
  'sexuality-journal-stub': 'Sexuality',
  //
  '1890s-lgbt-novel-stub': 'Sexuality',
  '1900s-lgbt-novel-stub': 'Sexuality',
  '1920s-lgbt-novel-stub': 'Sexuality',
  '1930s-lgbt-novel-stub': 'Sexuality',
  '1940s-lgbt-novel-stub': 'Sexuality',
  '1950s-lgbt-novel-stub': 'Sexuality',
  '1960s-lgbt-novel-stub': 'Sexuality',
  '1970s-lgbt-novel-stub': 'Sexuality',
  '1980s-lgbt-novel-stub': 'Sexuality',
  '1990s-lgbt-novel-stub': 'Sexuality',
  '2000s-lgbt-novel-stub': 'Sexuality',
  '2010s-lgbt-novel-stub': 'Sexuality',
  'lgbt-activist-stub': 'Sexuality',
  'lgbt-bio-stub': 'Sexuality',
  'lgbt-book-stub': 'Sexuality',
  'lgbt-documentary-film-stub': 'Sexuality',
  'lgbt-drama-film-stub': 'Sexuality',
  'lgbt-film-stub': 'Sexuality',
  'lgbt-law-stub': 'Sexuality',
  'lgbt-mag-stub': 'Sexuality',
  'lgbt-newspaper-stub': 'Sexuality',
  'lgbt-novel-stub': 'Sexuality',
  'lgbt-org-stub': 'Sexuality',
  //
  'assisted reproductive technology': 'Sexuality',
  condoms: 'Sexuality',
  'female diseases of the pelvis and genitals': 'Sexuality',
  'human reproductive health': 'Sexuality',
  'human reproductive physiology': 'Sexuality',
  'male diseases of the pelvis and genitals': 'Sexuality',
  pregnancy: 'Sexuality',
  'std and sti': 'Sexuality',
  "women's health": 'Sexuality',
  'armalite ar-10 derivatives': 'Weapons',
  '4mmcaliber': 'Weapons',
  '7.62×39derivatives': 'Weapons',
  '30-30': 'Weapons',
  '30remington': 'Weapons',
  '32wslderivatives': 'Weapons',
  '.38 caliber': 'Weapons',
  '38scderivatives': 'Weapons',
  '222remderivatives': 'Weapons',
  '250-3000': 'Weapons',
  '284winchester': 'Weapons',
  '765borderivatives': 'Weapons',
  'advanced combat rifle prototypes': 'Weapons',
  aietc: 'Weapons',
  'antique firearms': 'Weapons',
  'api blowback firearms': 'Weapons',
  'armalite ar-16 derivatives': 'Weapons',
  'barrett firearms': 'Weapons',
  'beretta firearms': 'Weapons',
  'blow forward firearms': 'Weapons',
  'browning m1917 derivatives': 'Weapons',
  'bullpup firearms': 'Weapons',
  'caseless firearms': 'Weapons',
  'česká zbrojovka uherský brod': 'Weapons',
  "colt's manufacturing company": 'Weapons',
  'delayed blowback firearms': 'Weapons',
  'early firearms': 'Weapons',
  famae: 'Weapons',
  'fb firearms': 'Weapons',
  'firearm accessories mounting standards': 'Weapons',
  'fn herstal firearms': 'Weapons',
  'general purpose machine guns': 'Weapons',
  handloading: 'Weapons',
  'hk firearms': 'Weapons',
  imbel: 'Weapons',
  'imi iwi smallarms': 'Weapons',
  'improvised firearms': 'Weapons',
  'john browning': 'Weapons',
  'kalashnikov rifle': 'Weapons',
  'kel-tec firearms': 'Weapons',
  'komodo armament weapons': 'Weapons',
  'mauser firearms': 'Weapons',
  milkor: 'Weapons',
  'modern gatling guns': 'Weapons',
  'mossberg firearms': 'Weapons',
  'multiple barrel firearms': 'Weapons',
  'norwegian service rifles': 'Weapons',
  'personal defense weapons': 'Weapons',
  pindad: 'Weapons',
  'remington firearms': 'Weapons',
  'rpc fort weapons': 'Weapons',
  'ruger firearms': 'Weapons',
  savagefirearms: 'Weapons',
  'sig sauer firearms': 'Weapons',
  'smith & wesson': 'Weapons',
  'springfield armory firearms': 'Weapons',
  'sterling armaments company ltd': 'Weapons',
  'steyr mannlicher': 'Weapons',
  'swiss arms': 'Weapons',
  taurus: 'Weapons',
  'tbilisi aircraft manufacturing': 'Weapons',
  'walther firearms': 'Weapons',
  'weatherby cartridges firearms': 'Weapons',
  'winchester cartridges firearms': 'Weapons',
  'zastava firearms': 'Weapons',
  'ancient mechanical artillery and hand-held missile weapons': 'Weapons',
  'anti-tank rifles': 'Weapons',
  'artillery of the middle ages': 'Weapons',
  'bct subsystems': 'Weapons',
  britishempireweapons: 'Weapons',
  cannons: 'Weapons',
  'current french infantry weapons': 'Weapons',
  'current indian infantry weapons': 'Weapons',
  'usn early guided weapons': 'Weapons',
  'fcs subsystems': 'Weapons',
  'filipino weapons': 'Weapons',
  'history of the tank': 'Weapons',
  'imfdb name': 'Weapons',
  'imfdb title': 'Weapons',
  'indonesian weapons': 'Weapons',
  'japanese (samurai) weapons, armour and equipment': 'Weapons',
  'japanese swords': 'Weapons',
  'malaysian weapons': 'Weapons',
  'weapons of mass destruction': 'Weapons',
  'medieval armor components': 'Weapons',
  'medieval mechanical artillery and hand-held missile weapons': 'Weapons',
  'modern us infantry weapons': 'Weapons',
  modernausinfweaponsnav: 'Weapons',
  modernfininfweaponsnav: 'Weapons',
  modernukinfweaponsnav: 'Weapons',
  'notable swords': 'Weapons',
  'nuclear weapons tests of the united states': 'Weapons',
  'pole weapons': 'Weapons',
  'project kingfisher': 'Weapons',
  'royal navy torpedoes': 'Weapons',
  scud: 'Weapons',
  'station ix devices': 'Weapons',
  stryker: 'Weapons',
  'swords by region': 'Weapons',
  'us navy torpedoes': 'Weapons',
  'turkish army aircraft': 'Weapons',
  'turkish army infantry weapons': 'Weapons',
  'turkish army vehicles': 'Weapons',
  'types of armour': 'Weapons',
  'us military research rockets': 'Weapons',
  'us military rockets': 'Weapons',
  'usaf space vehicles': 'Weapons',
  valmetfirearmsnav: 'Weapons',
  'victorian era british naval weapons': 'Weapons',
  victorianerabritishweapons: 'Weapons',
  weapons: 'Weapons',
  'wwi tanks': 'Weapons',
  'missile navboxes': 'Weapons',
  'missile types': 'Weapons',
  'standard family of missiles': 'Weapons',
  'chinese missiles': 'Weapons',
  'dprk missiles': 'Weapons',
  'french nuclear missiles': 'Weapons',
  'gorgon missiles': 'Weapons',
  'indian missiles': 'Weapons',
  'indonesian missiles': 'Weapons',
  'iran missiles': 'Weapons',
  'missiles of pakistan': 'Weapons',
  'russian and soviet military designation sequences': 'Weapons',
  'russian and soviet missiles': 'Weapons',
  'russian and soviet surface-to-surface missiles': 'Weapons',
  'uk missiles': 'Weapons',
  'us army missiles': 'Weapons',
  'us missiles': 'Weapons',
  'usaf early missiles': 'Weapons',
  'usaf missiles': 'Weapons',
  'usn missiles': 'Weapons',
  'usn research missiles': 'Weapons',
  'v-weapons': 'Weapons',
  wwiiprototypeafvs: 'Weapons',
  'wwii us ships': 'Weapons',
  wwiiamericanafvs: 'Weapons',
  wwiiusguns: 'Weapons',
  wwiiusinfweaponsnav: 'Weapons',
  wwiiusnavalweapons: 'Weapons',
  'wwii australian ships': 'Weapons',
  'equipment of the belgian army in world war ii': 'Weapons',
  'ww1and2 british grenades': 'Weapons',
  'ww2 brit comm infantry guns': 'Weapons',
  'wwii british ships': 'Weapons',
  wwiibritishafvs: 'Weapons',
  wwiibritishaircraftweapons: 'Weapons',
  wwiibritishcommguns: 'Weapons',
  wwiibritishcommnavalweapons: 'Weapons',
  wwiibritishsoftveh: 'Weapons',
  wwiichineseheavyweapons: 'Weapons',
  wwiichineseinfantryweapons: 'Weapons',
  modernusinfweaponsnav: 'Weapons',
  'wwii danish ships': 'Weapons',
  'wwii dutch ships': 'Weapons',
  'wwii finnish ships': 'Weapons',
  wwiifininfweaponsnav: 'Weapons',
  wwiifrenchguns: 'Weapons',
  coldwarfrenchafvs: 'Weapons',
  'wwii french ships': 'Weapons',
  wwiifrenchafvs: 'Weapons',
  wwiifrenchinfweapons: 'Weapons',
  wwiifrenchsoftveh: 'Weapons',
  wwiifrenchnavalweapons: 'Weapons',
  'german artillery of world war ii': 'Weapons',
  'mines of nazi germany during world war ii': 'Weapons',
  'ww2 german aerial weapons': 'Weapons',
  'wwii german ships': 'Weapons',
  wwiigermanafvs: 'Weapons',
  wwiigermaninfweapons: 'Weapons',
  'wwii greek ships': 'Weapons',
  'wwii italian ships': 'Weapons',
  wwiiitalianafvs: 'Weapons',
  wwiiitalianinfweapons: 'Weapons',
  wwiiitalianguns: 'Weapons',
  'imperial japanese army artillery': 'Weapons',
  'wwii japanese auxiliary ships': 'Weapons',
  'wwii japanese ships': 'Weapons',
  wwiijapanesenavalweapons: 'Weapons',
  'japanese wwii infantry weapons': 'Weapons',
  wwiijapaneseafvs: 'Weapons',
  wwiipolishafvs: 'Weapons',
  wwiipolishinfweapons: 'Weapons',
  'wwii polish ships': 'Weapons',
  'wwii romanian ships': 'Weapons',
  wwiiromanianafvs: 'Weapons',
  sovartygpw: 'Weapons',
  'soviet infantry weapons of world war ii': 'Weapons',
  'wwii soviet ships': 'Weapons',
  wwiisovaerosani: 'Weapons',
  wwiisovarttractors: 'Weapons',
  wwiisovexperimental: 'Weapons',
  wwiisovietafvs: 'Weapons',
  wwiisovietarmouredcars: 'Weapons',
  wwiisovietselfproparty: 'Weapons',
  wwiisovtanks: 'Weapons',
  'wwii swedish ships': 'Weapons',
  coldwarswedishafvs: 'Weapons',
  'weapons made in sweden 1914–1945': 'Weapons',
  'weapons of czechoslovakia': 'Weapons',
  'weapons of hungary': 'Weapons',
  wwiihungarianafvs: 'Weapons',
  wwiiswedishafvs: 'Weapons',
  'wwii yugoslav ships': 'Weapons',
  'austro-hungarian artillery of world war i': 'Weapons',
  'wwiaus-huninfweaponsequipment': 'Weapons',
  'austro-hungarian navy classes': 'Weapons',
  greatwarbritishnavalweapons: 'Weapons',
  'wwi british afvs': 'Weapons',
  'wwi british empire guns': 'Weapons',
  'wwi british empire small arms': 'Weapons',
  'wwi british ships': 'Weapons',
  wwifrenchguns: 'Weapons',
  wwifrenchinfweaponsnav: 'Weapons',
  'wwi french afvs': 'Weapons',
  'amphitrite-class submarine': 'Weapons',
  'bellone-class submarine': 'Weapons',
  'circé-class submarine (1907)': 'Weapons',
  'clorinde-class submarine': 'Weapons',
  'diane-class submarine (1916)': 'Weapons',
  'émeraude-class submarine (1906)': 'Weapons',
  'gustave zédé-class submarine': 'Weapons',
  'wwi french ships': 'Weapons',
  'wwi german ships': 'Weapons',
  wwigermanartillery: 'Weapons',
  wwigermaninfweaponsnav: 'Weapons',
  'wwi greek ships': 'Weapons',
  wwiitalianinfweapons: 'Weapons',
  'wwi italian ships': 'Weapons',
  wwiitalianguns: 'Weapons',
  'wwi japanese ships': 'Weapons',
  'wwi ottoman ships': 'Weapons',
  wwiottomaninfweaponsnav: 'Weapons',
  wwirussianarms: 'Weapons',
  'wwi russian ships': 'Weapons',
  'us wwi vehicles': 'Weapons',
  'wwi us ships': 'Weapons',
  wwiusguns: 'Weapons',
  wwiusinfweaponsnav: 'Weapons',
  'world war i aircraft of the central powers': 'Weapons',
  wwiusnavalweapons: 'Weapons',
  'list of terrorist incidents': 'Violence',
  massacres: 'Violence',
  //
  'drug use': 'Drug-use',
  euphoriants: 'Drug-use',
  stimulants: 'Drug-use'
};

var byPattern = function byPattern(str, patterns) {
  var types = Object.keys(patterns);

  for (var i = 0; i < types.length; i++) {
    var key = types[i];

    for (var o = 0; o < patterns[key].length; o++) {
      var reg = patterns[key][o];

      if (reg.test(str) === true) {
        return key;
      }
    }
  }

  return null;
};

var _byPattern = byPattern;

var byTemplate = function byTemplate(doc) {
  var templates = doc.templates();
  var found = [];

  for (var i = 0; i < templates.length; i++) {
    var title = templates[i].template;

    if (mapping.hasOwnProperty(title)) {
      found.push({
        reason: mapping[title],
        name: title
      });
    } else {
      // try regex-list on it
      var type = _byPattern(title, patterns);

      if (type) {
        found.push({
          reason: type,
          name: title
        });
      }
    }
  }

  return found;
};

var byTemplate_1 = byTemplate;

var patterns$1 = {
  Profanity: [/(profanity|obscenity)/, /propaganda films‎/, /nazi/],
  Weapons: [/semi-automatic/, /rilfes/, /firearms/, /pistols/, /shotguns/, /granades/, /knives/, /weapons and ammunition/, / weapons$/, /chemical weapon/, /explosives/, /flamethrowers/],
  Violence: [/suicide/, /bombing/, /bombers/, /tactics/, /serial killers/, /murder in ./, /necrophiles/, /terrorist incidents/, /cannibals/, /bombing/, /mass shootings/, /stabbing attacks/, /arson attacks/, /lynching/, /drone strikes/, /assassinations/, /hostage taking/],
  Sexuality: [/bdsm/, /fetish/, /incest/, /breast/, /nipple/, /penis/, /scrotum/, /nude sculptures/, /naturis[mt]/, /genital/, /masturbation/, /ejaculation/, /orgasm/, /erotica/, /strip clubs/, /camming/, /sex toys/, /pornographic/, /pornography/, /erotic/, /bdsm/, /human reproduction/, /sex/, /sexuality/, /rape/, /sexual abuse/, /dominatrices/, /brothels/, /red-light districts/, /courtesans/, /rapists/, /prostitutes/, /prostitution/, /sex workers/, /nudity/, /erotic dancers/]
};

var mapping$1 = {
  'bdsm in films': 'Sexuality',
  sexuality: 'Sexuality',
  'sexual slang': 'Profanity',
  'english profanity': 'Profanity',
  'off-color humor': 'Profanity',
  euphemisms: 'Profanity',
  'shock sites': 'Profanity',
  'adult humour titles': 'Profanity',
  'hokum blues songs': 'Profanity',
  'holocaust terminology': 'Profanity',
  'cultural depictions of muhammad': 'Profanity',
  'nazi terminology': 'Profanity',
  'nazi propaganda': 'Profanity',
  'nazi propaganda organizations': 'Profanity',
  'nazi symbolism': 'Profanity',
  'fascist symbols': 'Profanity',
  'symbols of nazi germany': 'Profanity',
  // https://en.wikipedia.org/wiki/Category:Sexuality
  'sexuality by culture': 'Sexuality',
  'human sexuality': 'Sexuality',
  'animal sexuality': 'Sexuality',
  'plant sexuality': 'Sexuality',
  'historians of sexuality': 'Sexuality',
  mating: 'Sexuality',
  promiscuity: 'Sexuality',
  'sexual reproduction': 'Sexuality',
  'sexual acts': 'Sexuality',
  'sexuality by region': 'Sexuality',
  'sexuality stubs': 'Sexuality',
  'casual sex': 'Sexuality',
  'group sex': 'Sexuality',
  prostitution: 'Sexuality',
  'casual sex in fiction': 'Sexuality',
  'free sex': 'Sexuality',
  'gay bathhouses': 'Sexuality',
  'sex positivism': 'Sexuality',
  'sexual addiction': 'Sexuality',
  'sexual revolution': 'Sexuality',
  'songs about casual sex': 'Sexuality',
  'swinging (sexual practice)': 'Sexuality',
  'free sex activists': 'Sexuality',
  bukkake: 'Sexuality',
  'sex gangs': 'Sexuality',
  'child prostitution': 'Sexuality',
  'corrective rape': 'Sexuality',
  'forced prostitution': 'Sexuality',
  'sexual slavery': 'Sexuality',
  'wartime sexual violence': 'Sexuality',
  'wartime sexual violence in world war ii': 'Sexuality',
  'abu ghraib torture and prisoner abuse': 'Sexuality',
  '1980 murders of u.s. missionaries in el salvador': 'Sexuality',
  'genocidal rape': 'Sexuality',
  'comfort gays': 'Sexuality',
  'comfort women': 'Sexuality',
  'nanjing massacre': 'Sexuality',
  'forced prostitution in the united states': 'Sexuality',
  'victims of forced prostitution': 'Sexuality',
  brothels: 'Sexuality',
  'magdalene asylums': 'Sexuality',
  pimps: 'Sexuality',
  prostitutes: 'Sexuality',
  'prostitution by gender': 'Sexuality',
  'red-light districts': 'Sexuality',
  'sex industry researchers': 'Sexuality',
  "sex workers' rights": 'Sexuality',
  'works about prostitution': 'Sexuality',
  'american pimps': 'Sexuality',
  'argentine pimps': 'Sexuality',
  'british pimps': 'Sexuality',
  'cuban pimps': 'Sexuality',
  'french pimps': 'Sexuality',
  'german pimps': 'Sexuality',
  'mexican pimps': 'Sexuality',
  'south african pimps': 'Sexuality',
  'spanish pimps': 'Sexuality',
  'swedish pimps': 'Sexuality',
  'brothel owners and madams': 'Sexuality',
  'prostitutes by nationality': 'Sexuality',
  'prostitutes by type': 'Sexuality',
  'cultural depictions of prostitutes': 'Sexuality',
  'fictional prostitutes': 'Sexuality',
  'prostitutes by gender': 'Sexuality',
  'songs about prostitutes': 'Sexuality',
  'female prostitutes by nationality': 'Sexuality',
  'male prostitutes by nationality': 'Sexuality',
  'dominatrices by nationality': 'Sexuality',
  'erotic dancers by nationality': 'Sexuality',
  'pornographic film actors by nationality': 'Sexuality',
  'bdsm terminology': 'Sexuality',
  'sexual roleplay': 'Sexuality',
  'sexual roles': 'Sexuality',
  'sexual fantasies': 'Sexuality',
  gynaecology: 'Sexuality',
  'gynaecologic disorders': 'Sexuality',
  'sexual anatomy': 'Sexuality',
  'sex organs': 'Sexuality',
  clitoris: 'Sexuality',
  penis: 'Sexuality',
  ejaculation: 'Sexuality',
  'animal penises': 'Sexuality',
  'penis disorders': 'Sexuality',
  'penile erection': 'Sexuality',
  'mammal penis': 'Sexuality',
  'human male reproductive system': 'Sexuality',
  'human penis': 'Sexuality',
  'human penis anatomy': 'Sexuality',
  'human female reproductive system': 'Sexuality',
  vagina: 'Sexuality',
  hymen: 'Sexuality',
  'vagina and vulva in art': 'Sexuality',
  circumcision: 'Sexuality',
  fellatio: 'Sexuality',
  'clothing-optional events': 'Sexuality',
  'naked cycling events': 'Sexuality',
  nudity: 'Sexuality',
  'nude art': 'Sexuality',
  'nude recreation': 'Sexuality',
  'nudity in film': 'Sexuality',
  'nudity in television': 'Sexuality',
  streaking: 'Sexuality',
  'erotic dance': 'Sexuality',
  'erotic events': 'Sexuality',
  'erotic parties': 'Sexuality',
  vibrators: 'Sexuality',
  masturbation: 'Sexuality',
  seduction: 'Sexuality',
  'seduction community': 'Sexuality',
  'intimate relationships': 'Sexuality',
  'free love': 'Sexuality',
  'sex industry': 'Sexuality',
  'sexuality and age': 'Sexuality',
  'sex festivals': 'Sexuality',
  'sex scandals': 'Sexuality',
  'sex abuse': 'Sexuality',
  'sex ethics': 'Sexuality',
  'webcam models': 'Sexuality',
  'sex robots': 'Sexuality',
  'machine sex': 'Sexuality',
  'bdsm equipment': 'Sexuality',
  'pornographic works': 'Sexuality',
  sexting: 'Sexuality',
  teledildonics: 'Sexuality',
  //
  axes: 'Weapons',
  bayonets: 'Weapons',
  daggers: 'Weapons',
  'deaths by blade weapons': 'Weapons',
  guillotine: 'Weapons',
  knives: 'Weapons',
  'medieval blade weapons': 'Weapons',
  'military knives': 'Weapons',
  'single-edged swords': 'Weapons',
  spears: 'Weapons',
  swords: 'Weapons',
  'lists of swords': 'Weapons',
  'swords by region': 'Weapons',
  'coats of arms with swords': 'Weapons',
  'fictional swords': 'Weapons',
  'mythological swords': 'Weapons',
  'sword swallowers': 'Weapons',
  'swords by period': 'Weapons',
  swordsmanship: 'Weapons',
  bombs: 'Weapons',
  grenades: 'Weapons',
  missiles: 'Weapons',
  'car bombs': 'Violence',
  'nuclear explosives': 'Violence',
  'explosives projectives': 'Violence',
  'improvised explosive devices': 'Violence',
  'terrorist incidents involving knife attacks': 'Violence',
  'knife attacks': 'Violence',
  'execution methods': 'Violence',
  infanticide: 'Violence',
  execution: 'Violence',
  'child murder': 'Violence',
  'spree shootings': 'Violence',
  'school shootings': 'Violence',
  'targeted killing': 'Violence',
  alcohol: 'Drug-use',
  amphetamine: 'Drug-use',
  ayahuasca: 'Drug-use',
  cannabis: 'Drug-use',
  coca: 'Drug-use',
  cocaine: 'Drug-use',
  ghb: 'Drug-use',
  heroin: 'Drug-use',
  iboga: 'Drug-use',
  'lysergic acid diethylamide': 'Drug-use',
  methamphetamine: 'Drug-use',
  methylphenidate: 'Drug-use',
  morphine: 'Drug-use',
  opium: 'Drug-use',
  tobacco: 'Drug-use',
  'psychedelics, dissociatives and deliriants': 'Drug-use',
  'works about drugs': 'Drug-use',
  'biological sources of psychoactive drugs': 'Drug-use',
  'chemical classes of psychoactive drugs': 'Drug-use',
  'combinations of psychoactive drugs': 'Drug-use',
  'designer drugs': 'Drug-use',
  'drug classes defined by psychological effects': 'Drug-use',
  'drugs and the military': 'Drug-use',
  'drugs by psychological effects': 'Drug-use',
  'effects of psychoactive drugs': 'Drug-use',
  'individual psychoactive drugs': 'Drug-use',
  inhalants: 'Drug-use',
  'psychoactive drugs by mechanism of action': 'Drug-use',
  'psychedelic drug research': 'Drug-use',
  'social aspects of psychoactive drugs': 'Drug-use',
  'psychoactive drug stubs': 'Drug-use'
};

var byCategory = function byCategory(doc) {
  var found = [];
  var cats = doc.categories(); // clean them up a bit

  cats = cats.map(function (cat) {
    cat = cat.toLowerCase();
    cat = cat.replace(/^(category|categorie|kategori): ?/i, '');
    cat = cat.replace(/_/g, ' ');
    return cat.trim();
  }); // loop through each

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i]; // try our 1-to-1 mapping

    if (mapping$1.hasOwnProperty(cat)) {
      found.push({
        reason: mapping$1[cat],
        cat: cat
      });
      continue;
    } // loop through our patterns


    var match = _byPattern(cat, patterns$1);

    if (match) {
      found.push({
        reason: match,
        cat: cat
      });
    }
  }

  return found;
};

var byCategory_1 = byCategory;

var patterns$2 = {
  Sexuality: [/ \(.*?sex.*?\)$/]
};

var patterns$3 = patterns$2;
var paren = /\((.*)\)$/;

var byTitle = function byTitle(doc) {
  var title = doc.title();

  if (!title) {
    return [];
  } //look at parentheses like 'Tornado (film)'


  var m = title.match(paren);

  if (!m) {
    return [];
  }

  var inside = m[1] || '';
  inside = inside.toLowerCase();
  inside = inside.replace(/_/g, ' ');
  inside = inside.trim(); //look at known parentheses

  if (patterns$2.hasOwnProperty(inside)) {
    return [{
      reason: patterns$2[inside],
      title: inside
    }];
  } // look at regex


  var match = _byPattern(title, patterns$3);

  if (match) {
    return [{
      reason: match,
      title: title
    }];
  }

  return [];
};

var byTitle_1 = byTitle;

// bad images from https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list
var mapping$2 = ['00 Ball torture.jpg', '001-full-erect.jpg', '001-full-erect (cropped).jpg', '2005 walking penis.jpg', '3some 006.jpg', '3some 011.jpg', '3some 012 Second Life.jpg', '3some 013 Second Life.jpg', '4825Maduya, Carmona, Cavite Landmarks 02.jpg', '64 year old 3.JPG', '64 year old man with erection and cock cage, cock ring and testicle band.jpg', '7-21 goed.jpg', 'A 64 year old 4.JPG', 'A 64 year old 7.JPG', 'A 77 Jahre alt Foto-a0009a.jpg', 'A flaccid penis with foreskin retracted.jpg', 'A Foreskin Retraction Series.JPG', 'A non-retracted and retracted foreskin, male age 29.jpg', 'A short foreskin.jpg', 'A Tergo Close-up.jpg', 'A vulva.jpeg', 'Aa male anus.jpg', 'Abu Ghraib 49.jpg', 'AdultPhimosis.jpg', 'Agenesia_de_vagina2.png', 'Agenor fait un levage.ogv', 'Amateur pornography.jpg', 'Ampallang cropped.jpg', 'Ampallang2.jpg', 'Amy with dildo.jpg', 'An Erection Development.JPG', 'AN-active-1A.jpg', 'AN-prepairing-2.jpg', 'AN-riding-2.jpg', 'Anal.jpg', 'Anal Berlin.JPG', 'Anal bleaching.jpg', 'Anal fingering.JPG', 'Anal fissure 1.jpg', 'Anal fisting being performed on a male.jpg', 'Anal gland abscess.JPG', 'Anal inside.jpg', 'Anal intercourse 4.jpg', 'Anal sex.JPG', 'Anal sex male on female.jpg', 'Anal sex01.JPG', 'Anal sex02.JPG', 'Anal sex03.JPG', 'Anal toy.jpg', 'Anal2.jpg', 'Analsex2.jpg', 'Anarcho-swastika.svg', 'Anat09IMG 0045.jpg', 'And the second glass must be filled.jpg', 'Anillos pene.jpg', 'Animated ejaculation.gif', 'Ano.jpg', 'Anus.jpg', 'Anus 2.jpg', 'Anus m.jpg', 'Anus mann005.jpg', 'Anus masculin.jpg', 'Anus of male.jpg', 'APA Piercing !.jpg', 'Apadravya & Pubic Surface Genital Piercings.jpg', 'Asian hairy vagina labia.jpg', 'Asian penis erected.jpg', 'Asshole hat.jpg', 'AUTOAMPUTATE1.JPG', 'Autofellatio B-W.jpg', 'Autofellatio5.jpg', 'Autofellatio6.jpg', 'Autofist sous la douche.JPG', 'Azvag.jpg', 'Bajs.jpg', 'BallStretcher.jpg', 'Balzak.jpg', 'Barbara Clit.jpg', 'Bbefore after.jpg', 'Beads Inserted.jpg', 'BearApplePoop.JPG', 'Beautyvagina.JPG', 'Before triple-p injection.jpg', 'Beheaded dick-in-mouth.jpg', 'Benglis - Artforum.jpg', 'Birgit041.JPG', 'Birgit26.jpg', 'Black and white photopgraph of a fellatio.jpg', 'Black genitalia.jpg', 'Black genitalia 2.jpg', 'Blowjob.jpg', 'Blowjob.svg', 'Bondage AS furniture.jpg', 'Bos taurus taurus turd.jpg', 'BPXD_Side2.jpg', 'Breast.jpg', 'Brigitte sex doll 2011-04-02 18-09-35 116.jpg', 'Buchenwald Corpses 07511.jpg', 'Buchenwald Ohrdruf Corpses 11666B.jpg', 'Buchenwald-J-Rouard-10.jpg', 'Buchenwald-J-Rouard-11.jpg', 'Buchenwald-J-Rouard-12.jpg', 'Buchenwald-J-Rouard-13.jpg', 'Buchenwald-J-Rouard-14.jpg', 'Buchenwald-J-Rouard-15.jpg', 'Buchenwald-J-Rouard-16.jpg', 'Buchenwald-J-Rouard-17.jpg', 'Buchenwald-J-Rouard-18.jpg', 'Buchenwald-J-Rouard-19.jpg', 'Buchenwald-J-Rouard-20.jpg', 'Burned dead body in RABIA Massacre.jpg', 'Butt.jpg', 'Butt plug insertion.jpg', 'Buttocks after caning.jpg', 'Buttocks male.jpg', 'Buttplug_1.jpg', 'Camara Natural 055.jpg', 'CannibalHolocaustimpale.jpg', 'Carolyn 02.jpg', 'Caucasian man masturbating.jpg', 'CFNM at Nudes a Poppin.jpg', 'Chancres on the penile shaft due to a primary syphilitic infection caused by Treponema pallidum 6803 lores.jpg', 'Chastity cage.jpg', 'Cho Seung-hui 3.jpg', 'Christina and Nefertiti piercing.jpg', 'Christina pierc.jpg', 'Christina Piercing 01.jpg', 'Christina-piercing.jpg', 'Christinas.jpg', 'Chrome steel donut cockring.JPG', 'Circpn - circumcised penis.jpg', 'Circumcised and uncircumcised penis.jpg', 'Circumcised highres closeup.jpg', 'Circumcised human penis in profile.jpg', 'Circumcised penis - Flacid and Erect - High Res.jpg', 'Circumcised penis - Flacid and Erect - High Res2.jpg', 'Circumcised penis edit.jpg', 'Circumcised penis labelled.jpg', 'Circumcision surgery.jpg', 'Circumsised penis - Flacid and Erect - High Res.jpg', 'Clean intermittent self-catheterization3.JPG', 'Cleaning a disgusting toilet (6648588843).jpg', 'Clit hood piercing2.jpg', 'Clitoris.jpg', 'Clitoris-Vivero-Becker.jpg', 'Clitoris-Vivero-Becker-purp-temp.jpg', 'Closeup of female breast.jpg', 'Cockring 3.JPG', 'Cockringbeforeafter.jpg', 'Coital Play.png', 'Coitus.jpg', 'Coitus 2.jpg', 'Coitus20091.JPG', 'Coitus20092.JPG', 'Cold penis.JPG', 'Color Flash.gif', 'Condom after ejaculation.jpg', 'Condom sex.png', 'Condom use.gif', 'CondomUsage.JPG', 'CondomUse.jpg', 'Corprsxz.jpg', 'Couple 69 oral sex position on bed.jpg', 'Couple_69_sex_position_on_bed.jpg', 'Creampie 2.JPG', 'Creampie drawing 1.svg', 'Creampie drawing 1-2.png', 'Creampie photograph 1.jpg', 'Creepy, creepy baby jesus 4888401232.jpg', 'Cropped Penis des Menschen.jpg', 'Croppv.jpg', 'Cucumber anal insertion.jpg', 'Cumfac 01.png', 'Cumfac-01.svg', 'Cunnilingus.JPG', 'Cunnilingus00.jpg', 'Cunnilingus01.jpg', 'Curved penis.jpg', 'Curved Penis.jpg', 'Curved Penis demonstrating left curvature.jpg', 'Dead rat blood.JPG', 'Defecating buffalo Sri Lanka.jpg', 'Defecating horse.jpg', 'Demi Delia 1.JPG', 'Demonstration of ejaculation.gif', 'Diaper Contents after user.jpg', 'Die Hoden Infusion.JPG', 'Different degrees of pubic hair coverage.JPG', 'Dildo anal.JPG', 'Dildo and penis insertion.JPG', 'Dildo blau DSCF7417.jpg', 'Dildo insertion.JPG', 'Dildo2.jpg', 'Dildos o Consoladores Nena.jpg', 'Dirty toilet.JPG', 'Divine in Heaven T-shirt.jpg', 'Dog feces.jpg', 'Doggy style.jpg', 'Doggy style position.jpg', 'Doigtage.jpg', 'Doublepen.png', 'DoublePenetration.svg', 'Dr. Placik Breast Augmentation .jpg', 'Dry Gangrene with dead toes and visible bone.JPG', 'Dydoe.jpg', 'Dydoes.jpg', 'Ed logo.png', 'Eddie spurt.gif', 'Édouard-Henri Avril (29).jpg', 'Eichel sperma.jpg', 'Eichel3.jpg', 'Eja 01.jpg', 'Ejaculate animated 1.gif', 'Ejaculation.JPG', 'Ejaculation.ogg', 'Ejaculation (270 fps slow motion).gif', 'Ejaculation educational ani.gif', 'Ejaculation educational ani short.gif', 'Ejaculation Educational Demonstration.OGG', 'Ejaculation Educational Demonstration Animated.GIF', 'Ejaculation Educational Demonstration Still Frame.jpg', 'Ejaculation educational seq 4.png', 'Ejaculation educational seq 6.png', 'Ejaculation MANU 3.jpg', 'Ejaculation of penis.jpg', 'Ejaculation semen.png', 'Ejaculation_of_an_19_year_old_caucasian_with_foreskin.JPG', 'Erect human penis.jpg', 'Erect penis.JPG', 'Erect penis (Human male, Asian) by Srek 2.JPG', 'Erect penis and scrotum.jpg', 'Erect penis measurement.png', 'Erect penis shaved.JPG', 'Erect penis shaved pubic hair.JPG', 'Erect penis uncut.jpg', 'Erect penis uncut.jpg', 'Erect Penis with C-Ring.jpg', "Erect penis with Fordyce's spots.jpg", 'Erect phimosis.jpg', 'Erected penis.jpg', 'Erectile tissue of penis.JPG', 'Erection Development.jpg', 'Erection Development V2.jpg', 'Erection Homme.jpg', 'Erection Homme2.jpg', 'Erection partial.jpg', 'Erepeg1.JPG', 'Erigierter Penis ohne Vorhaut.JPG', 'ErosPyramide20090221 352.jpg', 'ErosPyramide20090221 379.jpg', 'ErosPyramide20110218 0264 Timmy Sweet.jpg', 'ErosPyramide20110218 0530 Christina Bella.jpg', 'Estim penis.jpg', 'ESTROCULO.jpg', 'Eveready Harton in Buried Treasure.ogv', 'Excited woman - view from back.jpg', 'Exemple de pénétration vaginale.gif', 'External Genital Organs (Female).jpg', 'F 005.JPG', 'Facial.jpg', 'Facial Cumshot.jpg', 'Facial00.JPG', 'Favorite sitter.jpg', 'Fecal incontinence.jpg', 'Feces.jpg', 'Felicia Fox 6.jpg', 'Felicia Fox 6 (cropped).jpg', 'Fellatio.png', 'Fellatio gay.jpg', 'Fellatio mammary000.JPG', 'Fellatio mammary001.JPG', 'Fellatio with semen line drawing.jpg', 'Fellatio_1.jpg', 'Fellatio_2.jpg', 'Fellatio_3.jpg', 'Fellatio-auto.jpg', 'Fellatio06.JPG', 'Fellatio07.JPG', 'Fellation from 2006.JPG', 'Fellation Tracy and Rick-1.jpg', 'Fellation Tracy and Rick-2.jpg', 'Fellation Tracy and Rick-3.jpg', 'Female and male anus.jpg', 'Female buttock.jpg', 'Female buttocks 2.jpg', 'Female dildo masturbation.jpg', 'Female genital and nipple clamps.jpg', 'Female Genital Organs (frontal view) detailed macro.jpg', 'Female genitalia inner.JPG', 'Female performing fellatio.gif', 'Female sexual arousal.JPG', 'Female Smegma.jpg', 'Female vagina.jpg', 'Femdom at Eros Pyramide.png', 'Fimosis.jpg', 'Fingering 2.jpg', 'Firstplane.jpg', 'Fisting close-up.jpg', 'Flaccid and erect human penis.jpg', 'Flaccid and erect penis.jpg', 'Flaccid human penis (Latino), with pubic hair.jpg', 'Flaccid_penis.JPG', 'Flaccid-erect.jpg', 'Flacid and erects.jpg', 'Flacid Penis.jpg', 'Flag of Hezbollah.svg', 'Flushvul numbered.jpg', 'Flushvul zh-tw label.gif', 'Foley1.JPG', 'Foot Amputation.JPG', 'Footjob раком.png', 'Forced Orgasm on-stage.png', 'Fordyce.jpg', 'Foreskin CloseupV2.jpg', 'Foreskin2.jpg', 'Foreskinintact.jpg', 'Foto076.jpg', 'Four fingers.jpg', 'Foxie color.jpg', 'Frau beim pinkeln.jpg', 'Frenulotomie.JPG', 'Frenulum of prepuce of penis.jpg', 'Frenulumpiercing.jpg', 'From behind.jpg', 'Fuck off Wikipedia.jpg', 'Fuck you.JPG', 'Full erection.jpg', 'Futanari.png', 'Game Pad.jpg', 'Gay.jpg', 'Gay oral sex.JPG', 'Gay sex.jpg', 'Gay Sex 17.jpg', 'Gay sex with semen.jpg', 'Gaysex 11.jpg', 'Genital Diversity.jpg', 'Genital herpes.jpg', 'Girl with butt plug.jpg', 'Givingthefinger.jpg', 'Glans Penis.jpg', 'Glans Penis by David Shankbone.jpg', 'Glans Penis Close-Up2.JPG', 'Glans tongue stimulation001.JPG', 'Gloeden, Wilhelm von (1856-1931) - n. 0941 - da - Amore e arte, p. 70.jpg', 'Gloryhole.jpg', 'GloryHole.jpg', 'Golden Shower.jpg', 'Grosse und kleine Schamlippen.jpg', 'Gushing detail.jpg', 'Gynecomastia 001.jpg', 'Hafada piercing.jpg', 'HairedHumanScrotum.png', 'Hairy vulva.jpg', 'Hanging testicles.JPG', 'Having Sex missionary.jpg', 'Heavy male pubic hair spread to thighs.jpg', 'Hemorrhoid with skin tags02.jpg', 'Hentai - yuuree.jpg', 'Hentai - yuuree-redraw.jpg', 'Het meisje Greetje in het Tehuis Annette zit op het potje, Bestanddeelnr 252-0396.jpg', 'Hippie Hollow.jpg', 'Hirsuties papillaris coronae glandis.jpg', 'Hoden eines Menschen.JPG', 'Hoden-Epilation.jpg', 'Hodenringe.JPG', 'Hodensack.jpg', 'Hodensack infusion.jpeg', 'Hodensack2.JPG', 'Hood-piercing.jpg', 'HQ SAM CFE.jpg', 'HQ SAM CFE2.jpg', 'HQ SAM E.jpg', 'HQ SAM E2.jpg', 'HQ SAM F.jpg', 'HQ SAM F en.jpg', 'HQ SAM F es.jpg', 'HQ SAM F fr.jpg', 'HQ SAM F it.jpg', 'HQ SAM F ml.jpg', 'HQ SAM F ro.jpg', 'HQ SAM F2.jpg', 'HQ SAM F2 ml.jpg', 'HQ SAM FPH.jpg', 'HQ SAM FPH2.jpg', 'HQ SAM FPH3.jpg', 'HQ SAM FPHC.jpg', 'HQ SAM FS.jpg', 'HQ SAM GP.jpg', 'HQ SAM GPC.jpg', 'HQ SAM GPF.jpg', 'HQ SAM P1.jpg', 'HQ SAM P2.jpg', 'HQ SAM SA.jpg', 'HQ SAM SAS.jpg', 'HQ SAM SAS2.jpg', 'HQ SAM SASu.jpg', 'HQ SAM SE.jpg', 'HQ SAM SE2.jpg', 'HQ SAM ST.jpg', 'HQ SAM ST2.jpg', 'Human buttocks.jpg', 'Human Feces.jpg', 'Human Feces (cropped).jpg', 'Human feces containing barium sulfate suspension.jpg', 'Human feces in toilet.jpg', 'Human male ejaculation.gif', 'Human Man Stool.jpg', 'Human Penis.png', 'Human penis erection.jpg', 'Human penis flaccid.jpg', 'Human penis flaccid and erect.jpg', 'Human penis with labels.jpg', 'Human penis, white, circumcised, 8in.jpg', 'Human penis07.jpg', 'Human Scrotum.JPG', 'Human semen in petri dish2.jpg', 'Human Vagina.jpg', 'Human vulva.jpg', 'HumanVulva-NewText-PhiloViv.jpg', 'HumanVulva-NoText-PhiloVivero.jpg', 'HumanVulva-PolishText-PhiloVivero.png', 'Hypospadias 001.jpg', 'Hypospadias erect.jpg', 'Hypospadias erect frontview.jpg', 'Hypospadias flaccid frontview.jpg', 'Hypospadias3.jpg', 'Ich 1.JPG', 'Ich 4.jpg', 'Ich 5.jpg', 'Ich 6.jpg', 'Ich 7.jpg', 'Illu repdt male erect.jpg', 'Illustration of anal sex.jpg', 'IMAG1262.jpg', 'Image of frenulum.jpg', 'Inari on the set.jpg', 'Inflammation of the glans penis and the preputial mucosa.jpg', 'Infusion des Hodensacks.JPG', 'Insert 3.jpg', 'Inserting tampon into the vagina.jpg', 'Intercourse Woman on Top.jpg', 'Internet Troll - Worded.jpg', 'Interracial Swinging.jpg', 'Intimpiercing Frau aeussere.jpg', 'Intimpiercing Frau innere.jpg', 'Intimpiercing Frau Klit vorhaut.jpg', 'JAM Liner Inc. 1520.jpg', 'Japanese Crucifixion.jpg', 'Jello biafra mooning.jpg', 'Jenni Blaze 385.jpg', 'Jenni Blaze 390.jpg', 'Jenni Lee Bound on Table.jpg', 'Jhgfjg 002.jpg', 'Jillvagina2.png', 'Jimmy Wales by Pricasso.jpg', 'JJ and TJ about to have sex.jpg', "Jon's 4skin.JPG", 'JuanCarlosArnizSanz.jpg', 'Kitzler, Bild2.jpg', 'Klbiboyring.jpg', 'Kneeling sex position.gif', 'Koitus.jpg', 'Kory Luke Jockpussy.jpg', 'Kot2.jpg', 'KZ_Buchenwald_1945_-_004.jpg', "L'atelier faiminette.ogv", "L'heure du th\xE9.ogv", "La coiffeuse.ogv", "La fess\xE9e \xE0 l'\xE9cole.ogv", "La voyeuse.ogv", 'Labelled bw flaccid penis.jpg', 'Labelled flaccid penis.jpg', 'Labia - back view.jpg', 'Labia separated exposing vaginal opening.jpg', 'Labialips.jpg', 'Labioplasty and Clitoral Hood Reduction.jpg', 'Labret phallic coddling.jpg', 'Landing Strip.jpg', 'LaVergerrayCherie-birth.jpg', 'Lingchi (cropped).jpg', 'Lizas Labiaplastie.jpg', 'Lobo marcando su territorio-2.jpg', 'Looking up at a standing naked woman.jpg', 'Low hanging testicles.jpg', 'Lynching-1889.jpg', 'Lynching-of-woman-1911.jpg', 'Lynching2.jpg', 'M 44 anus 22.jpg', 'Machete of the Suicide Girls, beneath a palm tree.jpg', 'Mahe Titof Inkorrekt(e)s.jpg', 'Male Anal Fingering Demonstration.gif', 'Male anus 2.JPG', 'Male Anus not spread.jpg', 'Male Anus spread.jpg', 'Male brazilian.jpg', 'Male circumcised masturbation.jpg', 'Male ejaculation..png', 'Male erect penis.jpg', 'Male fellatio.jpg', 'Male genitalia.jpg', 'Male genitalia reworked.jpg', 'Male genitals.jpg', 'Male Human Anatomy Without Labels.jpg', 'Male human anus close-up.jpg', 'Male human buttocks.jpg', 'Male masturbation.gif', 'Male perineum.jpg', 'Male pubic hair.jpg', 'Male Pubic Hair.JPG', 'Male pubic hair caucsn.jpg', 'Male pubic hair with erect penis.jpg', 'Male torso undressed.jpg', "Male's anus.JPG", "Male's buttocks and anus.jpg", "Male's scrotum.jpg", 'MalePenis.jpg', 'Mamintb.PNG', 'Mammary intercourse00.JPG', 'Man buttocks.jpg', "Man's pubic hair.jpg", 'Marinas Vagina.jpg', 'Massages.ogv', 'Mastectomie 02.jpg', 'Masturbacja kobiety..jpg', 'Masturbating male, ejaculating.jpg', 'Masturbating man2.JPG', 'Masturbating with a vibrator.jpg', 'Masturbation.gif', 'Masturbation.ogg', 'Masturbation techniques - Circumcision experience (Beschneidungs-Erfahrung).gif', 'Masturbation Techniques - Oberschenkel-Schlagen 640x480.gif', 'Masturbation Techniques - swinging cock (animated).gif', 'Masturbation Techniques - the backhand method (animated).gif', 'Masturbation Techniques - the basic Thumb-Forefinger (animated).gif', 'Masturbation Techniques - the campfire method (animated).gif', 'Masturbation Techniques - the cock swinging method (animated).gif', 'Masturbation Techniques - the Forefinger-Banging (animated).gif', 'Masturbation Techniques - Vogelkralle 640x480.gif', 'Masturbation Techniques - Zwischen Oberschenkel Massage 640x480.gif', 'Masturbation, Vivi Berens.jpg', 'Mbrazilian.jpg', 'Me Locked and Plugged.jpg', 'Meatotomy.JPG', 'Meatotomy 1.jpg', 'Meatotomy 2.jpg', 'Meatotomy 3.jpg', 'Meatotomy 4.jpg', 'Meatotomy 5.jpg', 'Micropenis.jpg', 'Middle finger gesture.jpg', 'Middle finger salute.jpg', 'Middle finger2.jpg', 'Miss Butterfly.ogv', 'Model in bondage.jpg', 'Mooning butt.jpg', 'Mooning butts.jpg', 'Mousquetaire au restaurant part 1.ogv', 'Mousquetaire au restaurant part 2.ogv', 'Mr. Abbot Bitt at Convent.ogv', 'Mummification-pvc-tape-lorelei.jpg', 'My penis .jpg', 'My smegma.JPG', 'Nackter.jpg', 'Nationalsocialistisk front.svg', 'Nazi Swastika.svg', 'Nazi swastika clean.svg', 'Necrotizing fasciitis left leg.JPEG', 'Nekrose avk01.jpg', 'No Love Deep Web artwork.png', 'Nude Gas Mask Girl 1 by Mjranum Stock.jpg', 'Nude woman with niqab.jpg', 'Nudist Man with Vibrator Butt Plug Inserted.jpg', 'Numbered flaccid penis.jpg', 'Odrahb.gif', 'Oetangs.jpg', 'Oggetto in vagina.JPG', 'On lips000.JPG', 'Open vagina.jpg', 'Orgasm.jpg', 'Orgy2.jpg', 'Origin-of-the-World.jpg', 'OstrichDischarge.jpg', 'PA und Frenulum.jpg', 'Pacman plug 2.jpg', 'Pacman plug 3.jpg', 'PAlock.jpg', 'Papio hamadryas-adult penis-Lisbon 07.JPG', 'Parrot rgb3.gif', 'Paul Stanley looking sober.jpg', 'Pearly-penile-papules-glans.jpg', 'Pedobear.png', 'Peeing.jpg', 'Pegging cropped.jpg', 'Pene parado.jpg', 'Penetración.JPG', "Penetration 'from behind'.jpg", 'Penile Itcrs 1.jpg', 'Penile vaginal.JPG', 'Penile vaginal intercourse.JPG', 'Penile vaginal sexual act.....JPG', 'Penile vaginal sexual act....JPG', 'Penile vaginal sexual act...JPG', 'Penile vaginal sexual act..JPG‎', 'Penile vaginal sexual act.JPG', 'Penile-Clitoral Structure.JPG', 'Penile-vaginal sexual act.JPG', 'Penis.jpeg', 'Penis .jpg', 'Penis 2.jpg', 'Penis anatomy.jpg', 'Penis asiatischer Elefant.JPG', 'Penis des Menschen.jpg', 'Penis enlarger.jpg', 'Penis erection (6 pictures).jpg', 'Penis erection forskin.jpg', 'Penis erection glans 1.jpg', 'Penis erigé.jpg', 'Penis Flaccid.jpg', 'Penis flaccid penis erected.jpg', 'Penis glans foreskin.jpg', 'Penis in a glory hole.jpg', 'Penis in Condom.jpg', 'Penis in used Condom.jpg', 'Penis Insertion 1.JPG', 'Penis Insertion 4.JPG', 'Penis Insertion Ended.JPG', 'Penis insertion in vagina.JPG', 'Penis labeled eng.jpg', 'Penis length 205 mm.JPG', 'Penis ohne Vorhaut.JPG', 'Penis pump in use.JPG', 'Penis size.jpg', 'Penis syphilis.png', 'Penis with Labels.jpg', 'Penisfraktur 01.jpg', 'Penisfrenulum.jpg', 'Penisincockring.jpg', 'Penissize2.JPG', 'PerianalHematoma.jpg', 'Perineal raphe in female.jpg', 'Permanently retracted foreskin.jpg', 'Petit anus.jpg', 'Peyronie disease.jpg', "Peyronie's disease.jpg", 'Phimosis.jpg', 'Phimosis Penis.jpg', 'Phimosis pre-ejaculate.JPG', 'Picture of an erect penis curved to the left due to an injury.jpg', 'Pierced.JPG', 'Piercing of the Corpora.jpg', 'Piles 3rd deg and mariscs 01.jpg', 'Pissing in a glass.jpg', 'Poilspubiens.jpg', 'Pole dancer 02.jpg', 'Pole dancer 03.jpg', 'Pole dancer 04.jpg', 'Pol pot.jpg', 'Pol POt.jpg', 'Pol_pot_picture.jpg', 'Post-vasectomy.jpg', 'Pre cum.JPG', 'Pre-Injection.jpg', 'Precum.JPG', 'Pregnant vulva belly.jpg', 'Prepairing.jpg', 'Prepucio contraído.jpg', 'Prima e dopo.jpg', 'Prince Albert piercing.jpg', 'Prince Albert Piercing.jpg', 'Prostatastimulation anal.jpg', 'Průjem.JPG', 'Pubic hair.jpg', 'Pubic hair male 1247.JPG', 'Pubic hair of female and male.jpg', 'Public female urination.JPG', 'Pullcondom.jpg', 'Pullcondom2.jpg', 'Pump Cock.jpg', 'Puppensex 1.jpg', 'Puppensex 2.jpg', 'Puppensex 3.jpg', 'Push. It. In. - Flickr - stnu.jpg', 'QN Faggot.jpg', 'Rachel Starr and Fan.jpg', 'Raphe perinealis in 21-year-old female.jpg', 'Realistic dildo 01.jpg', 'Rectal prolaps.jpg', 'RecurrentbreastCA1.gif', 'Red feces.png', 'Red white and blue cockrings.JPG', 'RelaxedPenis.JPG', 'Retracted testicles.jpg', 'RopeMarks at BoundCon 2008.jpg', 'Rusty trombone simple.jpg', 'Rusty trombone simple.svg', 'S6300057.JPG', 'SAM 0418.jpg', 'Santorum with clear lube.jpg', 'Scheide.jpg', 'Schwangerschaftsstreifen.JPG', 'Scrotal epidermoid cysts.jpg', 'Scrotal infusion.jpg', 'Scrotal saline infusion (inflation) - 054.JPG', 'Scrotum.jpg', 'Scrotum piercing.jpg', 'Scrotum warm and cold.jpg', 'Scrotum warm-cold.jpg', 'Scrotum2.jpg', 'Self Fisting.jpg', 'Selles anormales.jpg', 'Semen in condom (Sperma im Kondom)-01.jpg', 'Semen in vagina.JPG', 'Semen2.jpg', 'Semfac01.png', 'SemfacUpdate01.png', 'Sex 1.jpg', 'Sex 10.jpg', 'Sex 11.jpg', 'Sex 12.jpg', 'Sex 2.jpg', 'Sex 3.jpg', 'Sex 4.jpg', 'Sex 5.jpg', 'Sex 6.jpg', 'Sex 7.jpg', 'Sex 8.jpg', 'Sex 9.jpg', 'Sex intercourse.jpg', 'Sex pictures.jpg', 'Sex-Masturbation-Toys Penis-Pump (Sex-Masturbations-Spielzeug-Hilfsmittel Penis-Pumpe).jpg', 'Sexual Intercourse.JPG', 'Sexual intercourse 3.jpg', 'Sexual intercourse 5.JPG', 'Sexual intercourse in humans.JPG', 'Sexual intercourse in humans 2.JPG', 'Sexual intercourse in humans 3.JPG', 'Sexual intercourse in humans 4.JPG', 'Sexual intercourse in humans 7.JPG', 'Sexual intercourse with vaginal lubricative fluid.jpg', 'Sexuality pearl necklace small.png', 'Sexy dancer 02.jpg', 'Sexy dancer 03.jpg', 'Sexy dancer 04.jpg', 'Shaved Vagina.jpg', 'Shavedtesticles.jpg', 'Shirtless man whipping two nude women.jpg', 'Show Butt.jpg', 'Shuster Nights of Horror-18.jpg', 'Sissy in schoolgirl uniform gets anally fisted.jpg', 'Sixty-nine.jpg', 'Sluch.jpg', 'Smegma Penis01.jpg', 'Smegma Penis02.jpg', 'Smegma Penis02.mirrored.jpg', 'SOA-Condylomata-acuminata-around-anus.jpg', 'SOA-Condylomata-acuminata-female.jpg', 'SOA-Condylomata-acuminata-man.jpg', 'SOA-gonorroe-male.jpg', 'SOA-Herpes-genitalis-female.jpg', 'SOA-Herpes-genitalis-male.jpg', 'SOA-non specific Urethritis-male.jpg', 'Sodomie.jpg', "Sodomie masculine \xE0 l'aide d'un concombre ins\xE9r\xE9 dans le rectum.jpg", 'Southern Decadence 2002 in the French Quarter of New Orleans 08.jpg', 'Specola 21.jpg', 'Speculum exam in candidal vulvovaginitis.jpg', 'Sperm.jpg', 'Sperma v kondome2.jpg', 'Sperme.jpg', 'Spreading.jpg', 'Squamous cell carcinoma of anal rim 01.jpg', 'Stage I.JPG', 'Stage II.JPG', 'Stormfrontlogo.png', 'Strap-on pegging.jpg', 'Strap-on pegging 2.jpg', 'Streaker Hong Kong 1994.jpg', 'Sucking male.jpg', 'Swastika.png', 'Swastika nazi.svg', 'Swinging_Woman.jpg', 'Tapered glans ring.jpg', 'Taric Alani Cum shot.jpg', 'Taric Alani Self sucker.jpg', 'Testicle_and_epididymis.JPG', 'Testicles.jpg', 'Testiclesinscrotum.jpg', 'Testicular and scrotal masturbation.JPG', 'Testicular size.jpg', 'The Taint by David Shankbone.jpg', 'ThomasShippAbramSmith.jpg', 'Threesome (one man and two women).jpg', 'Threesome gay sex.jpg', 'Tissue necrosis following bite from Bothrops asper PLoS Medicine.jpg', 'Torso male.jpg', 'Triangle piercing vulva.jpg', 'Tubal pregnancy, gross pathology 01ee049 lores.jpg', 'TwilaB 0814.jpg', 'TwilaB 1388.jpg', 'Two men having gay sex 1.JPG', 'Two men having gay sex 3.JPG', 'Two men having gay sex 4.JPG', 'Two men having gay sex 6.JPG', 'Two nude women in a hollow tree trunk, Bagby Hot Springs, Oregon - 20070829.jpg', 'Two people having sex in a bed.png', 'Two people having sex in a bed (color).jpg', 'Tyler Faith 2.jpg', 'TypicalHumanPenisScale.jpg', 'UC-smile.jpg', 'Uncircpn.jpg', 'UnLabelled flaccid penis.jpg', 'Unshaved vagina.jpg', 'UR UF.jpg', 'UR UF2.jpg', 'Urethal Plug.jpg', 'Urethra ( Urinary Meatus) with Tube Inserted.jpeg', 'Urethral sounding.jpg', 'Urine.jpg', 'Vagina.jpg', 'Vagina 2.jpg', 'Vagina and penis.png', 'Vagina collage 07.jpg', 'Vagina collage 12.jpg', 'Vagina fingering.JPG', 'Vagína se spermatem.jpg', 'Vagina,Anus,Pereneum-Detail-2.jpg', 'Vagina,Anus,Pereneum-Detail-3.jpg', 'Vaginabr03.JPG', 'Vaginal intercourse medical 1.JPG', 'Vaginal opening - english description.jpg', 'Vaginal opening description.jpg', 'Vaginal penetration.jpg', 'Vaginal penetration with anal stimulation.jpg', 'Vaginal syphilis (disturbing image).jpg', 'Vaginoplasty.JPG', 'Vajaja.jpg', 'Varikozele.jpg', 'Varikozele1.jpg', 'Ventral and Dorsal View of Penis.jpg', 'Vertical hood.jpg', 'Video of Ejaculation.GIF', 'Virgin Killer.jpg', 'Vulva 01.jpg', 'Vulva 02.jpg', 'Vulva 03.jpg', 'Vulva 04.jpg', 'Vulva 05.jpg', 'Vulva and pubic hair.jpg', 'Vulva labeled no tags.jpg', 'Vulva with tiny labia minora.jpg', 'Vulva1.jpg', 'Vulva2beschr.jpg', 'WC Mosina Pozegowo.JPG', 'Weibliche brust en.jpg', 'Wife creampie at new years eve party 01.JPG', 'Wiki-analoral.png', 'Wiki-analsex.png', 'Wiki-bukkake-2.png', 'Wiki-cowgirl.png', 'Wiki-cumshot.png', 'Wiki-cumshot.svg', 'Wiki-cunnilingus.png', 'Wiki-doublepen.png', 'Wiki-dthroat.png', 'Wiki-facial.png', 'Wiki-fellatio.png', 'Wiki-fellatio.svg', 'Wiki-fellatio02.png', 'Wiki-fingering.png', 'Wiki-fisting.png', 'Wiki-frot1.png', 'Wiki-gangbang.svg', 'Wiki-gokkun.png', 'Wiki-mam-intcs.png', 'Wiki-mam-intcs-simple.png', 'Wiki-missionary.png', 'Wiki-oral-scrotum.png', 'Wiki-pee02.jpg', 'Wiki-pegging.png', 'Wiki-POV-pornography.png', 'Wiki-sball.png', 'Wiki-sixtynine.png', 'Wikibukkake.png', 'Wikibukkake new.png', 'Woman get licked to orgasm.jpg', 'Woman in small cage.jpg', 'Woman naked Buttocks.jpg', 'Woman on top.jpg', 'Woman with pubic hair and wedding ring.jpg', 'Young-woman-urinating.jpg', 'Zoo 3 Shoot.jpg', 'Женский анус.jpeg', '음경의 외부모습.jpg', '男性器の尿道口 解説.jpg'].reduce(function (h, str) {
  h[str.toLowerCase()] = 'Obscenity';
  return h;
}, {});

// https://en.wikipedia.org/wiki/MediaWiki:Bad_image_list

var byImage = function byImage(doc) {
  var images = doc.images();
  var found = [];

  for (var i = 0; i < images.length; i++) {
    var file = images[i].file();
    file = file.toLowerCase().replace(/.*:/i, '').trim();

    if (mapping$2.hasOwnProperty(file)) {
      found.push({
        reason: mapping$2[file],
        name: file
      });
    }
  }

  return found;
};

var byImage_1 = byImage;

var plugin = function plugin(models) {
  // add a new method to main class
  models.Doc.prototype.nsfw = function (options) {
    var doc = this;
    var detail = {}; //look for 'john doe (pimp)', etc

    detail.title = byTitle_1(doc); // look for known obscene images

    detail.title = byImage_1(doc); //look for '{{terrorism}}'

    detail.template = byTemplate_1(doc); //look for 'Category: Porn websites', etc

    detail.category = byCategory_1(doc);
    var keys = Object.keys(detail);

    for (var i = 0; i < keys.length; i++) {
      if (detail[keys[i]].length > 0) {
        var reason = detail[keys[i]].find(function (o) {
          return o.reason;
        });
        return {
          safe_for_work: false,
          reason: reason,
          detail: detail
        };
      }
    } //otherwise, it's safe...?


    return {
      safe_for_work: true,
      reason: null,
      detail: detail
    };
  };
};

var src = plugin;

export default src;
