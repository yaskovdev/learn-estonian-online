import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Harjutus 1.
Подчеркните прилагательные в предложениях и переведите.
1. On kasulik suhelda aruka inimesega. 2. Ta alati ostab poest kollaseid banaane ja rohelisi pirne. 3. See on üsna asjalik ettekanne. 4. Kinkime noorele spetsialistile viis pikka punast tulpi. 5. Mina olen suurelt kaardilt leidnud kuumalise nimega linna. 6. Tallinnas on suured ja pikad tänavad. 7. Rikka üliõpilase uhke auto seisab ülikooli ees. 8. Tal on heledad sirged juuksed, pikergune nägu ja suured sinised silmad. 9. Vaata kui naljakas mees seisab meie taga, tal on nii imelik habe! 10. Taavi on kõhn, aga tal on sportlik figuur. 

Harjutus 2.
Добавьте в предложение прилагательное. Слова нельзя повторять.
1.Minu vend on ......... õpilane. 2. Täna on .......... ilm. 3. Mulle meeldivad .......... inimesed. 4. Eesti on .......... riik, ja eestlased on .......... rahvas. 5. See töö on väga .......... . 6. Mägedes on alati nii .......... õhk. 7. Minu kass on .......... . 8. Naisel on seljas .......... pluus. 9. Sügisel on puudel .......... , .......... ja .......... lehed. 10. Mina olen .......... inimene, kuna mul on palju sõpru.

Harjutus 3.
Поставьте слова и словосочетания в правильный падеж.
1. Triinu on .......... (keskmise) kasvu .......... (noor) naine. 2. Palun osta mulle .......... (Vene juust) ja .......... (Eesti piim)! 3. Tore on kohata .......... (meeldiv) inimest. 4. Kirjutan kuupäeva .......... (Araabia) numbritega. 5. Mina õpin koolis .......... (prantsuse keel), aga soovin veel õppida .......... (saksa keel). 6.Nad on .......... (pikk) tööpäevast väsinud. 7. Ajakirjanik unistab .......... (uus) raamatust. 8. Leningradi loomaaias võib näha ......... (amuuri tiiger) ja .......... (siberi karu). 9. Mees ostab ühe .......... (punane) roosi oma ......... (kallis) naisele. 10. Ma tunnen hästi seda .......... (kõhnavõitu tüdruk).
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 12 })} source={source}/>)
