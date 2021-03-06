import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Составьте текст, описав убранство комнат своей квартиры. Распишите подробно, что где находится. Используйте послелоги на, под, около, сбоку и тд.. Когда закончите с домом, опишите район, где ваше жилище находится, какие здания рядом, или как добраться до важных мест города (через что пройти, и где повернуть).
Возьмем в рамках этого упражнения 2 новых глагола, оба переводятся на русский как поворачивать.
Pöörama, pöörata, pöörab и Keerama, keerata, keerab

### Harjutus 2

Употребите подходящий падеж (Saav, Rajav, Olev, Ilmaütlev или Kaasaütlev):
1. Kui laps .......... (suur) saab, jäävad vanemad .......... (vana). 2. Uue õppeaasta .......... (algus) on veel natuke aega. 3. Must kohv .......... (koor) tundub mulle lausa mõru. 4. Kas härra Tamm tuleb peole koos .......... (abikaasa) või ilma? 5. Minu ema sõidab suvilasse kas .......... (buss) või .......... (rong). 6. Kaubamaja on avatud kella .......... (üheksa). 7.Tõnu õde on praegu kohvikus .......... (ettekandja), aga edaspidi sooviks ta .......... (müüja) töötada. 8. Ilma .......... (tõsine huvi) ja .......... (tahtmine) ei saa ühtki keelt õppida. 9. Kui kaua sa juba .......... (sport) tegeled. 10. Õppimise kõrval töötab Triinu .......... (sanitar) keskhaiglas. 11. Baaris võtab ta endale võileiva .......... (viiner). 12. Kohtla-Järvelt .......... (Tartu) on umbes 130 kilomeetrit. 13. Tehke referaadid valmis .......... (järgmine nädal). 14. Elu ilma .......... (sõber) on nagu elu ilma ......... (päike). 15. Loodan, et elu muutub .......... (parem).
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 8 })} source={source}/>)
