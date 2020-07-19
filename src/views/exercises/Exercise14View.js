import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Выберите правильную форму инфинитива.
Väikesed lapsed armastavad eriti televiisorit (vaatama, vaadata). 2. Tulge minuga kohvi (jooma, juua). 3. Ema hakkab lauda (katma, katta), aga tal on vaja veel täna pesu (pesema, pesta). 4. Minu kõht on tühi, ma tahan (sööma, süüa). 5. Me läheme kell 10 (magama, magada). 6. Üliõpilased peavad palju raamatukogus (istuma, istuda) ning raamatuid (lugema, lugeda). 7. Halb on (elama, elada) üksi. 8. Kas sa saad mulle (laenama, laenata) 100 eurot. 9. Meil on tarvis poes (käima, käia). 10. Praegu ma lähen (ujuma, ujuda), ja pärast ma jään kaldale (päevitama, päevitada). 11. Alates sügisest asun ma Tartu Ülikooli (õppima, õppida). 12. Välismaalastel pole kerge eesti keelt selgeks (saama, saada). 13. Vabandust, ma täiesti unustasin seda (tegema, teha). 14. Kuhu sõidab Peeter suvel (puhkama, puhata)? 15. Anna ei oska veel hästi (rääkima, rääkida), aga ta tahab juba koolis (õppima, õppida).

### Harjutus 2.
Употребите правильную форму ma-инфинитива: -ma, -mas, -mast,- maks, -mata.
Minu tütar käib .......... (iluuisutama). 2. Ma ei taha ühtegi päeva .......... (õppima) jätta. 3. Mis kell me .......... (jalutama) tagasi tuleme? 4. Kõik lähevad baari õhtul .......... (tantsima) ja .......... (laulma). 5. Teiega pole võimalik ilma .......... (vaidlema) vestelda. 6. Poeg on praegu hambaid .......... (pesema), ta ei lähe magama hambaid .......... (pesema). 7. Kes on juba .......... (pildistama) käinud? 8.Aitäh, aga ma tulen juba .......... (sööma). 9. .......... (Näitama) oma nõusolekut, tõstavad kõik käed. 10. Talvel võib minna lumesõda .......... (mängima) ja lumememme .......... (tegema).
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 14 })} source={source}/>)
