import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Выберите  глагол из списка, и поставьте его в правильной форме.
Käima Minema Tulema Sõitma
Mina .......... suvel meres ujumas, aga sügisel .......... ujulasse. 2. Kas sa .......... bussiga koos meiega täna või homme üksi? 3. Nad .......... homme meile külla kuigi ma ei taha neid enam näha. 4. Ta .......... veel kord seda filmi vaatama. 5. Mina .......... turul väga harva, kuid sel pühapäeval ma .......... sinna kartuleid ostma. 6. Isa .......... hommikuti tööle trammiga, aga õhtuti ta .......... koju tagasi jalgsi. 7. Lapsed .......... õpetaja juurde sünnipäeva puhul lilli kinkima. 8. Me .......... laupäeval maale puhkama. 9. Meie lapsed .......... samas koolis. 10. Miks sa ei .......... meiega kontserdile?

### Harjutus 2.
Употребите глаголы в настоящем времени сослагательного наклонения (полная форма!).
Ma ………. (lugema) hea meelega seda raamatut. 2. Tütar .......... (mängima) klaverit paremini, kui ta .......... (harjutama) iga päev. 3. Ma .......... (helistama) ülemusele, kui ma .......... (teadma) tema telefoninumbrit. 4. Mis .......... (juhtuma), kui ta ei .......... (vastama) küsimusele? 5. Õpetaja .......... (tahtma), et me .......... (kirjutama) kontrolltööd hästi. 6. Kui ma .......... (olema) rikas, .......... (ostma) endale suure maja. 7. Koer niisama ei .......... haukuma, vist keegi võõras on aias! 8. .......... (Olema) tore, kui kõik inimesed maailmas alati .......... (naeratama). 9. Ma ei .......... (minema) kinno, kui mu sõber ei .......... (olema) mulle piletit ostnud. 10. Mulle meeldib see laul. Ma .......... (minema) sinuga praegu tantsima.
### Harjutus 3.
Переходные и непереходные глаголы Выберите правильный глагол в предложениях.
1. See mahl (ei sisalda/ei sisaldu) säilitusaineid. 2. Meie ühiskond  (arendab/areneb) kiiresti. 3. Koolilapsed (koguvad/kogunevad)  raha loomade varjupaigale. 4. Helkuri on vaja oma käekoti külge (rippuda/riputada). 5. Kaupluste hinnad (tõstavad/tõusevad) väga kiiresti. 6. Õpetaja ei tohi ise vastuses (kahelda/kahtlustada). 7. Õpilastele meeldib peast (arvutada/arvestada). 8 Kas te olete varem (kohtunud/kohanud). 9. Töötamine koos (ühineb/ühendab) inimesi. 10. Ahjus (küpseb/küpsetab) maitsev rabarberikook. 
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 15 })} source={source}/>)
