import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1
Выберите из списка подходящие предлоги или послелоги.
1. Auto seisab maja………. . 2. Homme lähen ma arsti ………. . 3. Jõe .......... kasvavad ilusad lilled. 4. Kass jookseb voodi ………. välja. 5. .......... kööki on suur laud. 6. Suured veoautod sõidavad ......... maanteed. 7. Selle karbi .......... võib panna asju. 8. Ei tohi peegel ukse .......... panna! 9 . .......... libeda silla sõita pole kerge. 10. Kui istud kivi .......... , siis saab kaugele merele näha. 11. Puu .......... istub tundmatu lind. 12. Tema lapse foto on alati pildiraames laual töötelefoni .......... . 13. Kas te sõidate Leedu või Läti .......... . 14. Tähtsad dokumendid on laua .......... , mitte koti .......... . 15. Palun kirjutage selle lepingu ......... ja meie lõpetame koosoleku. 
Ees, ette, keset, juurde, mööda, ääres, üle, all. alla, alt, sees, sisse, kõrval, otsas, kaudu, peal, peale. 

### Harjutus 2
Найдите аналог русскому/английскому предлогу в эстонском языке и напишите предложения о местоположении кота и птицы.
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 9 })} source={source}/>)
