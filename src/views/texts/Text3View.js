import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Перед тем как приступить к тексту 3 давайте познакомимся с новой лексикой и продолжим расширять свой словарный запас. На этот раз я выбрала тему семьи и родственников.

Семья - Pere/Perekond. 

Для слова семья есть два  варианта перевода на эстонский язык – pere, perekond. Разница между ними можно сказать только в длине слова. Хотя всегда окончание -kond в слове указывает на группу людей, сплочение вокруг чего-то. В данном случае сплоченность семьи.

Члены семьи – Pereliikmed:

<table>
    <tr>
        <td>Папа</td>
        <td>Isa</td>
    </tr>
    <tr>
        <td>Мама</td>
        <td>Ema</td>
    </tr>
    <tr>
        <td>Сын</td>
        <td>Poeg</td>
    </tr>
    <tr>
        <td>Дочь</td>
        <td>Tütar</td>
    </tr>
    <tr>
        <td>Родитель</td>
        <td>Vanem, lapsevanem</td>
    </tr>
    <tr>
        <td>Родители</td>
        <td>Vanemad, lapsevanemad</td>
    </tr>
    <tr>
        <td>Ребенок</td>
        <td>Laps</td>
    </tr>
    <tr>
        <td>Супруга, жена</td>
        <td>Abikaasa (naine)</td>
    </tr>
    <tr>
        <td>Супруг, муж</td>
        <td>Abikaasa (mees)</td>
    </tr>
    <tr>
        <td>Брат</td>
        <td>Vend</td>
    </tr>
    <tr>
        <td>Сестра</td>
        <td>Õde</td>
    </tr>
    <tr>
        <td>Дядя</td>
        <td>Onu</td>
    </tr>
    <tr>
        <td>Тетя</td>
        <td>Tädi</td>
    </tr>
    <tr>
        <td>Племянник (сын брат, сын сестры)</td>
        <td>Vennapoeg, õepoeg</td>
    </tr>
    <tr>
        <td>Племянница (дочь брата, дочь сестры)</td>
        <td>Vennatütar, õetütar</td>
    </tr>
    <tr>
        <td>Бабушка</td>
        <td>Vanaema</td>
    </tr>
    <tr>
        <td>Дедушка</td>
        <td>Vanaisa</td>
    </tr>
</table>

Родственники по замужеству/женитьбе - sugulased abielu kaudu: 
Помним, что в эстонском языке отсутствует понятие рода, поэтому слово abielu можем перевести и как замужество, и как женитьба, и вообще брак в принципе.
Sugulane/Sugulased – родственник/родственники.

<table>
    <tr>
        <td>Свекровь, тёща</td>
        <td>Ämm, meheema, naiseema</td>
    </tr>
    <tr>
        <td>Свекр, тесть</td>
        <td>Äi, meheisa, naiseisa</td>
    </tr>
    <tr>
        <td>Зять, муж дочки</td>
        <td>Väimees, tütremees</td>
    </tr>
    <tr>
        <td>Невестка, жена сына</td>
        <td>Minia, pojanaine</td>
    </tr>
</table>

В рамке выше наглядно представлен самый распространенный способ образования новых слов в эстонском языке – словносложение! Возьмем к примеру слово зять. Конечно эстонцы придумали свое слово – väimees. Но ведь можно дословно перевести, откуда этот человек пришел в семью, кто кому принадлежит. Да, для образования этого нового слова путем сложения двух используется второй падеж omastav – укажем с начала кому принадлежит, потом кто.

Lapselaps – ребенок ребенка = внук, внучка
Tütretütar – дочка дочки = внучка
Tütrepoeg – сын дочки = внук      

Первое, чему человек учится в рамках курса иностранного языка, это говорить о себе. И если мы взяли уже тему семьи, то можно и указать слова, связанные с семейным положением.

Семейное положение – perekonnaseis:

<table>
    <tr>
        <td>Неженатый, холостой, незамужняя</td>
        <td>Vallaline</td>
    </tr>
    <tr>
        <td>Обручен/обручена</td>
        <td>Kihlatud</td>
    </tr>
    <tr>
        <td>В браке</td>
        <td>Abielus</td>
    </tr>
    <tr>
        <td>Проживаем раздельно (врозь)</td>
        <td>Lahus</td>
    </tr>
    <tr>
        <td>Разведен/разведена</td>
        <td>Lahutatud</td>
    </tr>
    <tr>
        <td>Вдовец/вдова</td>
        <td>Lesk</td>
    </tr>
</table>

Ну а теперь приступим к тексту. Lugege ja tõlkige:

Minu pere
Minu nimi on Reelika. Ma olen kolmkümmend üks aastat vana. Mul on üsna suur pere. Minu abikaasa on kolmkümmend neli aastat vana ja tema nimi on Rivo. Meil on kaks last, Riina ja Rein. Riina käib juba koolis, aga Rein on veel väike ja käib lasteaias. Me elame kesklinnas, väikeses korteris, aga koos meiega elab ka armas koer Rokki. Minu mehe vanemad elavad ka lähedal ja tulevad tihti külla. Meile meeldib koos mere ääres jalutada ja pühapäeviti hommikusööki teha. 
Minu tädi Rita käis hiljuti Austraalias ja sel pühapäeval ta tuleb meie juurde ka ja näitab pilte. Minu täditütar elab nüüd seal koos oma uue perega. Austraalia asub väga kaugel, aga ma loodan, et varsti me saame ka sinna sõita ja kõik oma silmaga näha.

Tõlkima, tõlkida, tõlgib - переводить
Lähedal – близко, недалеко 
Käis (käima, käia, käib) – ходить, бывать. Использовано в форме lihtminevik
Näitama, näidata, näitab - показывать
`

export default translate()(props => <MarkdownPage title={props.t('text', { number: 3 })} source={source}/>)
