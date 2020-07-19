import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Поставьте слово или словосочетание в скобках в нужный падеж.
.......... (see töökas noor kolleeg) on meeldiv koos töötada. 2. .......... (see mees) on toredad lapsed. 3. Me oleme palju .......... (oma tulevik) rääkinud. 4. Suvel pahkame tihti .......... (järve) ääres. 5. Läksime koos ..........(järgmine nurk). 6. Too palun mulle .......... (teine tuba) prillid, ma ei saa ise minna! 7. Lähen puhkusele .......... (kolm päeva). 8. Sügisel läheb mu tütar .......... (uus kool). 9. Olen juba täiesti .......... (terve) saanud. 10. Mina valdan viis .......... (võõrkeel), kuid ma ei oska veel .......... (hiina keel) ja tahan väga .......... (see) ära õppida. 11. Ilma .......... (pilet) teatrisse ei saa. 12. Korteris pole .......... (valgus), me ootame .......... (elektrik). 13. Minu poeg on kasvanud .......... (tubli noormees). 14. Me koolisime siia .......... (Jõgeva), aga meil on suur soov .......... (Saaremaa) elada. 15. Ema koob mulle sünnipäevaks .......... (must villane kampsun). 16.Ma jalutan .......... (rand) ja vaatan kui laevad lähevad .......... (meri). 17. Sügisel läheb vara .......... (pime). 18. Kevadel me alati istutame ........... (oma aed) mitu .......... (puu). 19. Ma olen .......... (raske töö) väsinud. 20. Laps kardab .......... (suur koer), seepärast ta mängib .......... (väike ilus kass). 21. Räägin .......... (sõber) oma murest, aga ta ei kuula ......... (minu jutt). 22. .......... (see kord) on meie loeng lõppenud. 23. .......... (isadepäev) on veel kaks nädalat aega. 24. Lõuna ajal on kasulik .......... (supp) süüa, kuid praegu ma võtan kohvikus .......... (üks suur praad) kartuliga. 25. Signe on .......... (neljas klass) juhataja.

### Harjutus 2. 
Употребите падеж omastav множественного числа. 
1. Lennukid lendavad .......... (pilv) vahel. 2. Kas teate Eesti .......... (küla) nimesid? 3. Mulle pakub huvi .......... (raske ülesanne) lahendamine. 4. .......... (tort) valik oli üsna suur. 5. Nad sõidavad homme .......... (tuttav) juurde. 6. Loen hea meelega eesti .......... (kirjanik) teoseid. 7. Ma pean kassa juures maksma .......... (kompvek), .......... (küpsis) ja .......... (roheline hernes) eest. 8. Valin .......... (mänguasi) riiulilt sobivat kingitust lapsele. 9. .......... (see mägi) lähedal on väikesed külad. 10. On oodata .......... (paljud hinnad) tõusu. 11. Vanemad muretsevad oma .......... (laps) pärast. 12. .......... (aken) pesemine võtab aega. 13. Otsin .......... (võti) hulgast õiget. 14. Mida te ostate nii .......... (suur summa) eest? 15. Ristmikul oli pikk.......... (auto) rida.
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 16 })} source={source}/>)
