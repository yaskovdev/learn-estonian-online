import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Составьте текст, описав убранство комнат своей квартиры. Распишите подробно, что где находится. Используйте послелоги на, под, около, сбоку и т.д.
 Когда закончите с домом, опишите район, где ваше жилище находится, какие здания рядом, или как добраться до важных мест города (через что пройти,
  и где повернуть).

Возьмем в рамках этого упражнения 2 новых глагола, оба переводятся на русский как поворачивать.

Pöörama, pöörata, pöörab и Keerama, keerata, keerab

### Harjutus 2

Употребите подходящий падеж (Saav, Rajav, Olev, Ilmaütlev или Kaasaütlev):

1. Kui laps .......... (suur) saab, jäävad vanemad .......... (vana).
2. Uue õppeaasta .......... (algus) on veel natuke aega. 
3. Must kohv .......... (koor) tundub mulle lausa mõru.
4. Kas härra Tamm tuleb peole koos .......... (abikaasa) või ilma? 
5. Minu ema sõidab suvilasse kas .......... (buss) või .......... (rong).
6. Kaubamaja on avatud kella .......... (üheksa). 
7.Tõnu õde on praegu kohvikus .......... (ettekandja), aga edaspidi sooviks ta .......... (müüja) töötada.
8. Ilma .......... (tõsine huvi) ja .......... (tahtmine) ei saa ühtki keelt õppida. 9. Kui kaua sa juba .......... (sport) tegeled.
10. Õppimise kõrval töötab Triinu .......... (sanitar) keskhaiglas.
11. Baaris võtab ta endale võileiva .......... (viiner).
12. Kohtla-Järvelt .......... (Tartu) on umbes 130 kilomeetrit.
13. Tehke referaadid valmis .......... (järgmine nädal).
14. Elu ilma .......... (sõber) on nagu elu ilma ......... (päike).
15. Loodan, et elu muutub .......... (parem).

### Harjutus 3

Выберите из списка подходящие предлоги или послелоги.

1. Auto seisab maja………. . 
2. Homme lähen ma arsti ………. . 
3. Jõe .......... kasvavad ilusad lilled. 
4. Kass jookseb voodi ………. välja. 
5. .......... kööki on suur laud. 
6. Suured veoautod sõidavad ......... maanteed. 
7. Selle karbi .......... võib panna asju. 
8. Ei tohi peegel ukse .......... panna! 
9 . .......... libeda silla sõita pole kerge. 
10. Kui istud kivi .......... , siis saab kaugele merele näha. 
11. Puu .......... istub tundmatu lind. 
12. Tema lapse foto on alati pildiraames laual töötelefoni .......... .
13. Kas te sõidate Leedu või Läti .......... .
14. Tähtsad dokumendid on laua .......... , mitte koti .......... . 15. Palun kirjutage selle lepingu ......... ja meie lõpetame koosoleku. 

__Ees, ette, keset, juurde, mööda, ääres, üle, all. alla, alt, sees, sisse, kõrval, otsas, kaudu, peal, peale.__
`

export default translate('translations')(props => <MarkdownPage title={props.t('task', { number: 6 })} source={source}/>)
