import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Напишите цифры словами:
1. Mina töötan 25 õpetajaga. .................... 2. Direktori kabinet on 17. korrusel. .................... 3. Praegu on 2015. aasta. .................... 4. Raamatukogus on üle 3500 raamatu. .................... 5. Ostan poest 450 grammi juustu ja 540 grammi vorsti. .................... 6. Seminar toimub ruumis number 702. .................... 7. 1. jaanuaril on uue aasta algus. .................... 8.Sellel kevadel ma lõpetan 12. klassi. .................... 9. Ta räägib alati oma 3 valgest kassist. .................... 10. Triinu töötab selles firmas alates 1996. aastast ja tema leping kehtib 2016. aastani. .................. 11. Kõike pole vaja korrata 100 korda. .................... 12. Toomas tõlgib need 10 rasket teksti 5 keelde. .................... 13. Ta on õnnelik nagu 7. taevas. .................... 14. See eksam on järgmise aasta  9. veebruaril. .................... 15.  Täna on 29. aprill ja me õnnitleme vanaema 68. sünnipäeval. ....................

### Harjutus 2.
Порядковые числительные в датай потренируем еще отдельно
Millal?
05. juulil 1982
12. jaanuaril 2019
27. oktoobril 2000
31. detsembril 1995
22. augustil 1973
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 10 })} source={source}/>)
