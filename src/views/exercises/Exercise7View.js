import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Harjutus 1.
Для запоминания новых слов по названиям городов и стран, предлагаю следующее задание: составьте как можно больше предложений, используя известные Вам глаголы и новые слова из таблицы урока. 
Näide.
Eestlane elab Tallinnas. Lätlased räägivad läti keelt. Roma on Itaalia pealinn. И тому подобное. Чем разнообразнее будут Ваши предложения, тем лучше. Leedulane ei oska inglise keelt, kuid ta elab Londonis.
Harjutus 2.
Поставьте слова в скобках в нужный падеж места.
1. Kas te kolite varsti oma (uus maja) .......... . 2. Mina olen sündinud Eesti (Vabariik) .......... , Tartu (maakond) .......... , Ülenurme (vald) .......... , Soinaste (küla) .......... . 3. Mina armastan käia (näitus) .......... ja (kontsert) .......... . 4. Kirjuta need sõnad (roheline tahvel) .......... . 5. Sugulased saabuvad ka Läti .......... ja Venemaa .......... . 6. Suitsupääsukesed lendavad meile (soe maa) .......... , peamiselt (Aafrika) .......... . 7. Sinu õpik ei ole üldse (riiul) .......... , ta on hoopis (televiisor) .......... . 8. Tema töötab (öö) .......... ja magab (päev) .......... . 9. Lähme täna (loomaaed) .......... ja (mererand) .......... .  10. (See pilt) .......... olen ma viieaastane. 11. Võta palun taldrikud (kapp) ..........  ja lusikad pane tagasi (karp) .......... . 12. Minu korter asub (teine korrus) .......... . 13. Te võite nõu küsida (direktor) .......... või tema (asetäitja) .......... . Nad oskavad seda paremini teha. 14. Laupäeviti käib (требует падежа где!)  ema (turg) .......... ja töötab (aed) .......... . 15. Minu õe mees on (eriala) .......... elektrik.
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 7 })} source={source}/>)
