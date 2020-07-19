import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Домашняя работа для нашего четвертого занятия не будет исключением из правил. Первое задание как всегда глаголы, и как всегда проспрягать их во всех известных нам формах. Схема изменения их по временам, лицам и числам должна быть доведена до автоматизма – что от чего образуется. Так что не ленитесь и в свободное время тренируйтесь как на старых глаголах, так и на новых.

<table>
    <tr>
        <td>-MA инфинитив</td>
        <td>-DA инфинитив</td>
        <td>3 лицо ед.ч.</td>
        <td>Перевод</td>
        <td>Подсказки</td>
    </tr>
    <tr>
        <td>Abielluma</td>
        <td>Abielluda</td>
        <td>Abiellub</td>
        <td>Жениться, выходить замуж</td>
        <td>Abiellunud, abielluge</td>
    </tr>
    <tr>
        <td>Surema</td>
        <td>Surra</td>
        <td>Sureb</td>
        <td>Умирать</td>
        <td>Surnud, surge</td>
    </tr>
    <tr>
        <td>Sööma</td>
        <td>Süüa</td>
        <td>Sööb</td>
        <td>Кушать</td>
        <td>Söönud, sööge</td>
    </tr>
    <tr>
        <td>Jooma</td>
        <td>Juua</td>
        <td>Joob</td>
        <td>Пить</td>
        <td>Joonud, jooge</td>
    </tr>
    <tr>
        <td>Laulma</td>
        <td>Laulda</td>
        <td>Laulab</td>
        <td>Петь</td>
        <td>Laulnud, laulge</td>
    </tr>
    <tr>
        <td>Tantsima</td>
        <td>Tantsida</td>
        <td>Tantsib</td>
        <td>Танцевать</td>
        <td>Tantsinud, tantsige</td>
    </tr>
    <tr>
        <td>Vaatama</td>
        <td>Vaadata</td>
        <td>Vaatab</td>
        <td>Смотреть</td>
        <td>Vaadanud, vaadake</td>
    </tr>
    <tr>
        <td>Nägema</td>
        <td>Näha</td>
        <td>Näeb</td>
        <td>Видеть</td>
        <td>Näinud, nähke</td>
    </tr>
    <tr>
        <td>Kuulama</td>
        <td>Kuulata</td>
        <td>Kuulab</td>
        <td>Слушать</td>
        <td>Kuulanud, kuulake</td>
    </tr>
    <tr>
        <td>Kuulma</td>
        <td>Kuulda</td>
        <td>Kuuleb</td>
        <td>Слышать</td>
        <td>Kuulnud, kuulge</td>
    </tr>
</table>

### Harjutus 2

Ну что, пришло время и Вам самим чего-нибудь рассказать о себе. Предлагаю написать небольшое сочинение, рамки по количеству предложений не ставим. Как минимум Вы сможете представиться, рассказать о профессии, где живете, кем работаете. Что любите или нет. В общем, постарайтесь использовать новые глаголы максимально. Также можно рассказать о своей семье (дополнительная лексика по данной теме в тексте 3). Правда здесь вам как минимум понадобиться 2 местоимения – эти падежные формы мы пока не проходили
Minul (mul) – у меня
Meil – у нас

### Harjutus 3

Заполните графы в таблице согласно примеру. Тренируем все 3 падежа для каждого слова. В первой колонке использована начальная форма слова, для второй колонки нам понадобиться знание второго падежа, чтобы образовать множественное число, а вот в третьей уже пригодится и третий падеж с числительным. 


<table>
    <tr>
        <td>ПРИМЕР: See on väike tool.</td>
        <td>Need on ... väiksed toolid.</td>
        <td>Siin on kaks ... väikest tooli.</td>
    </tr>
    <tr>
        <td>See on suur laud.</td>
        <td>Need on ...</td>
        <td>Köögis on kolm ...</td>
    </tr>
    <tr>
        <td>See on minu kass.</td>
        <td>Need on ...</td>
        <td>Toas on neli ...</td>
    </tr>
    <tr>
        <td>See on ema arvuti.</td>
        <td>Need on ...</td>
        <td>Kabinetis on viis ...</td>
    </tr>
    <tr>
        <td>See on sinine raamat.</td>
        <td>Need on ...</td>
        <td>Raamatukogus on kuus ...</td>
    </tr>
    <tr>
        <td>See on valge pastakas.</td>
        <td>Need on ...</td>
        <td>Poes on seitse ...</td>
    </tr>
    <tr>
        <td>See on punane auto.</td>
        <td>Need on ...</td>
        <td>Tänaval on kaheksa ...</td>
    </tr>
    <tr>
        <td>See on roheline vihik.</td>
        <td>Need on ...</td>
        <td>Klassis on üheksa ...</td>
    </tr>
    <tr>
        <td>See on ilus müüja.</td>
        <td>Need on ...</td>
        <td>Turul on kümme ...</td>
    </tr>
    <tr>
        <td>See on huvitav pilt.</td>
        <td>Need on ...</td>
        <td>Muuseumis on üksteist (11) ...</td>
    </tr>
    <tr>
        <td>See on mugav tool.</td>
        <td>Need on ...</td>
        <td>Kinos on kaksteist (12) ...</td>
    </tr>
</table>

### Harjutus 4

Вставьте слова в скобках в падеж omastav.
1.Isa ostab mulle .......... (uus raamat). 2. Kas sa tead, .......... (kes) kott see siin on? 3. See on .......... (meie õpetaja) oma. 4. Mina kindlasti kirjutan vanaemale .......... (kiri). 5. .......... (Õpilane) õpikud ja vihikud on korras. 6. Siin on minu .......... (vend) auto. 7. Need on .......... (nemad) majad.  8. Vabandust, kuidas on .......... (sina) nimi ja perekonnanimi? 9. .......... (See naine) tütar on haige. 10. Direktor on võtnud  tööle .......... (uus töötaja). 

### Harjutus 5

Вставьте слова в скобках в падеж osastav.
1.Mitu .......... (inimene) on sinu peres? 2. Mul on üheksa .......... (sõber). 3. Vabal ajal ma kuulan .......... (muusika) või vaatan .......... (telekas). 4. Mina joon päeval natuke .......... (vesi), .......... (mahl) ja .......... (piim). 5. Praegu ei ole .......... (poeg) toas. Ta on koolis. 6. Ärge avage .......... (aken), väljas on külm! 7.  Tema õde on kümme .......... (aasta) vana. 8. Kinos on veel kaheksa .......... (vaba koht). 9. Minu vend oskab .......... (vana auto) remontida. 10. Kas sa loed  tavaliselt .......... (raamat) või .......... (ajaleht)?
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 5 })} source={source}/>)
