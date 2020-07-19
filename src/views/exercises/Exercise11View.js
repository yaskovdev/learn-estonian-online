import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Ознакомьтесь с материалом по указании времени в разделе тексты (текст 4) и напишите словами время:


### Harjutus 2.
Выберите нужный предлог-послелог. Правильным будет только один вариант из трех:
1. Helistage kas .......... (enne, jooksul, ümber) või ......... (saadik, pärast, alates) lõunat.
2. Ära minu .......... (peale, järgi, pärast) muretse!
3. Selle professori loengud algavad .......... (suhtes, alates, alla) märtsist.
4. .......... (Koos, Ilma, Teel) heade õpikuteta on raske õppida.
5. Ma ostan need vihikud lapse .......... (jaoks, kaupa, ääres).
6. Toas on vett .......... (kaudu, alla, kuni) põlveni.
7. Õpilane puudub homme võistluste ..........(sees, tõttu, alates).
8. .......... (Peale, Üle, Enne) tema ei tea sellest keegi.
9. Kelle .......... (mööda, käes, teel) on raamat?
10. Vanemad teevad kõik oma lapse .......... (kestel, eel, heaks).
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 11 })} source={source}/>)
