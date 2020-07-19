import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1
Вставьте недостающее по смыслу прилагательное.
Toomas on pikem kui Priit. Priit on .......  kui Toomas.
Õunad on odavamad kui pirnid. Pirnid on .......  kui õunad.
Auto on kiirem kui jalgratas. Jalgratas on .......  kui auto.
Kass on väiksem kui koer. Koer on .......  kui kass.
Kala on parem kui kana. Kana on .......  kui kala.

### Harjutus 2
Переведите на эстонский язык.
1. Японский язык сложный, а китайский еще сложнее. 2. Учитель не всегда умнее ученика. 3. Моя сумка красивее, чем твоя. 4. Эльва меньше, чем Пярну. 5. Я хочу жить в большей комнате, чем сейчас. 6. Анни самый счастливый человек в мире. 7. Говорим о самых важных вещах. 8. Эти серые грибы есть нельзя, они самые ядовитые в лесу! 9. Сок вкуснее молока, но не полезнее. 10. Медведь сильнее человека, но самое сильное животное это лев.

### Harjutus 3
Слова ниже стоят в короткой форме превосходной степени. Укажите, какие будут их начальные формы. 
Truim, pahim, parim, pühim, kuivim, vapraim, puhtaim, suurim, halvim, mustim
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 13 })} source={source}/>)
