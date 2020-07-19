import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1
Домашняя работа для нашего четвертого занятия не будет исключением из правил. Первое задание как всегда глаголы, и как всегда проспрягать их во всех известных нам формах. Схема изменения их по временам, лицам и числам должна быть доведена до автоматизма – что от чего образуется. Так что не ленитесь и в свободное время тренируйтесь как на старых глаголах, так и на новых.



### Harjutus 2

Ну что, пришло время и Вам самим чего-нибудь рассказать о себе. Предлагаю написать небольшое сочинение, рамки по количеству предложений не ставим. Как минимум Вы сможете представиться, рассказать о профессии, где живете, кем работаете. Что любите или нет. В общем, постарайтесь использовать новые глаголы максимально. Также можно рассказать о своей семье (дополнительная лексика по данной теме в тексте 3). Правда здесь вам как минимум понадобиться 2 местоимения – эти падежные формы мы пока не проходили
Minul (mul) – у меня
Meil – у нас

### Harjutus 3

Заполните графы в таблице согласно примеру. Тренируем все 3 падежа для каждого слова. В первой колонке использована начальная форма слова, для второй колонки нам понадобиться знание второго падежа, чтобы образовать множественное число, а вот в третьей уже пригодится и третий падеж с числительным. 




### Harjutus 4

Вставьте слова в скобках в падеж omastav.
1.Isa ostab mulle .......... (uus raamat). 2. Kas sa tead, .......... (kes) kott see siin on? 3. See on .......... (meie õpetaja) oma. 4. Mina kindlasti kirjutan vanaemale .......... (kiri). 5. .......... (Õpilane) õpikud ja vihikud on korras. 6. Siin on minu .......... (vend) auto. 7. Need on .......... (nemad) majad.  8. Vabandust, kuidas on .......... (sina) nimi ja perekonnanimi? 9. .......... (See naine) tütar on haige. 10. Direktor on võtnud  tööle .......... (uus töötaja). 

### Harjutus 5

Вставьте слова в скобках в падеж osastav.
1.Mitu .......... (inimene) on sinu peres? 2. Mul on üheksa .......... (sõber). 3. Vabal ajal ma kuulan .......... (muusika) või vaatan .......... (telekas). 4. Mina joon päeval natuke .......... (vesi), .......... (mahl) ja .......... (piim). 5. Praegu ei ole .......... (poeg) toas. Ta on koolis. 6. Ärge avage .......... (aken), väljas on külm! 7.  Tema õde on kümme .......... (aasta) vana. 8. Kinos on veel kaheksa .......... (vaba koht). 9. Minu vend oskab .......... (vana auto) remontida. 10. Kas sa loed  tavaliselt .......... (raamat) või .......... (ajaleht)?
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 5 })} source={source}/>)
