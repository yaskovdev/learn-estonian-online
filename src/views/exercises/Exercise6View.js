import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const placeholder = '....................'

const source = `
### Harjutus 1

Составьте текст, описав убранство комнат своей квартиры. Распишите подробно, что где находится. Используйте послелоги на, под, около, сбоку и т.д.
 Когда закончите с домом, опишите район, где ваше жилище находится, какие здания рядом, или как добраться до важных мест города (через что пройти,
  и где повернуть).

Возьмем в рамках этого упражнения 2 новых глагола, оба переводятся на русский как поворачивать.

Pöörama, pöörata, pöörab и Keerama, keerata, keerab

### Harjutus 2

Употребите подходящий падеж (Saav, Rajav, Olev, Ilmaütlev или Kaasaütlev):

1. Kui laps ${placeholder} (suur) saab, jäävad vanemad ${placeholder} (vana).
2. Uue õppeaasta ${placeholder} (algus) on veel natuke aega. 
3. Must kohv ${placeholder} (koor) tundub mulle lausa mõru.
4. Kas härra Tamm tuleb peole koos ${placeholder} (abikaasa) või ilma? 
5. Minu ema sõidab suvilasse kas ${placeholder} (buss) või ${placeholder} (rong).
6. Kaubamaja on avatud kella ${placeholder} (üheksa). 
7. Tõnu õde on praegu kohvikus ${placeholder} (ettekandja), aga edaspidi sooviks ta ${placeholder} (müüja) töötada.
8. Ilma ${placeholder} (tõsine huvi) ja ${placeholder} (tahtmine) ei saa ühtki keelt õppida.
9. Kui kaua sa juba ${placeholder} (sport) tegeled.
10. Õppimise kõrval töötab Triinu ${placeholder} (sanitar) keskhaiglas.
11. Baaris võtab ta endale võileiva ${placeholder} (viiner).
12. Kohtla-Järvelt ${placeholder} (Tartu) on umbes 130 kilomeetrit.
13. Tehke referaadid valmis ${placeholder} (järgmine nädal).
14. Elu ilma ${placeholder} (sõber) on nagu elu ilma ${placeholder} (päike).
15. Loodan, et elu muutub ${placeholder} (parem).

### Harjutus 3

Выберите из списка подходящие предлоги или послелоги:

1. Auto seisab maja ${placeholder} . 
2. Homme lähen ma arsti ${placeholder} . 
3. Jõe ${placeholder} kasvavad ilusad lilled. 
4. Kass jookseb voodi ${placeholder} välja. 
5. ${placeholder} kööki on suur laud. 
6. Suured veoautod sõidavad ${placeholder} maanteed. 
7. Selle karbi ${placeholder} võib panna asju. 
8. Ei tohi peegel ukse ${placeholder} panna! 
9. ${placeholder} libeda silla sõita pole kerge. 
10. Kui istud kivi ${placeholder} , siis saab kaugele merele näha. 
11. Puu ${placeholder} istub tundmatu lind. 
12. Tema lapse foto on alati pildiraames laual töötelefoni ${placeholder} .
13. Kas te sõidate Leedu või Läti ${placeholder} .
14. Tähtsad dokumendid on laua ${placeholder} , mitte koti ${placeholder} .
15. Palun kirjutage selle lepingu ${placeholder} ja meie lõpetame koosoleku. 

__Ees, ette, keset, juurde, mööda, ääres, üle, all. alla, alt, sees, sisse, kõrval, otsas, kaudu, peal, peale.__
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 6 })} source={source}/>)
