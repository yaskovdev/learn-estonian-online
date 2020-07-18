import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Прилагательные. Omadussõnad

Продолжаем знакомиться со склоняемыми частями речи. На этот раз у нас на повестке дня прилагательные. Как в русском языке, так и во многих других языках, в том числе и в эстонском, имя прилагательное – это такая часть речи, которая обозначает качество или свойство (omadus, отсюда и название) чего-либо, кого-либо. Отвечает прилагательное на вопросы – какой? какая? какое?  А по-эстонски эти вопросы будут звучать как – milline? missugune? Мы уже помним из темы местоимений, что для «он» и «она» есть только одно эстонское «tema», категории рода в языке нет. Мужской ли, женский или средний род у прилагательного  - это будет понятно из контекста. Возьмем для примера прилагательное «ilus» – красивый:
Ilus tüdruk – красивая девочка
Ilus päike – красивое солнце
Ilus noormees – красивый молодой человек
В предложениях прилагательное можно употребить в двух случаях. Во-первых, оно может быть использовано вместе с существительным. В таком случае прилагательное должно стоять перед словом, к которому оно относится. При этом, почти всегда оно будет согласовано с этим самым существительным в падеже и числе, т.е. все слова словосочетания будут использованы в одном и том же падеже и числе.
Vana mees räägib noorele inimesele huvitava loo. Старый человек рассказывает молодому человеку интересную историю.
Vanad mehed räägivad noortele inimestele huvivad lood. Пожилые люди рассказывают молодым людям интересные истории.
Второй случай использования прилагательных, это вместе с глаголом olema, когда оно характеризует то, о чем или о ком идет речь в предложении. 
See tüdruk on väike. Эта девочка маленькая.
В русском языке это предложение остается безглагольным, а вот в эстонском варианте глагол «быть» - olema опускать ни в коем случае нельзя.

Склонение прилагательных.
Имя прилагательное склоняется по общему правилу падежей. Если оно стоит в предложении перед существительным, то почти всегда согласуется с ним. Исключением здесь будут последние четыре падежа эстонского языка, так называемые падежи «за носом» - NINATAGA. Как мы помним из материала прошлых уроков, эти четыре окончания добавляются только к последнему слову в словосочетании. А вот согласование по числу, единственному или множественному, в этих словосочетаниях сохраняется.
Чтобы посмотреть, как ведет себя прилагательное, находясь в сочетании с существительным, рассмотрим пример изменения по падежам словосочетания «suur laud – большой стол».

<table>
    <tr>
        <td>"
            Падежи"
        </td>
        <td>"Единственно число.
            Ainsus"
        </td>
        <td>"Множественное число.
            Mitmus."
        </td>
    </tr>
    <tr>
        <td>Nimetav</td>
        <td>Suur laud</td>
        <td>Suured lauad</td>
    </tr>
    <tr>
        <td>Omastav</td>
        <td>Suure laua</td>
        <td>Suurte laudade</td>
    </tr>
    <tr>
        <td>Osastav</td>
        <td>Suurt lauda</td>
        <td>Suuri laudu</td>
    </tr>
    <tr>
        <td>Sisseütlev</td>
        <td>Suurde lauda (suuresse lauasse)</td>
        <td>Suurtesse laudadesse</td>
    </tr>
    <tr>
        <td>Seesütlev</td>
        <td>Suures lauas</td>
        <td>Suurtes laudades</td>
    </tr>
    <tr>
        <td>Seestütlev</td>
        <td>Suurest lauast</td>
        <td>Suurtest laudadest</td>
    </tr>
    <tr>
        <td>Alaleütlev</td>
        <td>Suurele lauale</td>
        <td>Suurtele laudadele</td>
    </tr>
    <tr>
        <td>Alalütlev</td>
        <td>Suurel laual</td>
        <td>Suurtel laudadel</td>
    </tr>
    <tr>
        <td>Alaltütlev</td>
        <td>Suurelt laualt</td>
        <td>Suurtelt laudadelt</td>
    </tr>
    <tr>
        <td>Saav</td>
        <td>Suureks lauaks</td>
        <td>Suurteks laudadeks</td>
    </tr>
    <tr>
        <td>Rajav</td>
        <td>Suure lauani</td>
        <td>Suurte laudadeni</td>
    </tr>
    <tr>
        <td>Olev</td>
        <td>Suure lauana</td>
        <td>Suurte laudadena</td>
    </tr>
    <tr>
        <td>Ilmaütlev</td>
        <td>Suure lauata</td>
        <td>Suurte laudadeta</td>
    </tr>
    <tr>
        <td>Kaasütlev</td>
        <td>Suure lauaga</td>
        <td>Suurte laudadega</td>
    </tr>
</table>

Несклоняемые прилагательные.
В эстонском языке некоторые прилагательные не склоняются. К ним мы относим:
1. Сложносоставные прилагательные, где вторым компонентом слова выступают такие слова как -karva, -laadi, -verd, -võitu, -värki, -väärt:
purpurikarva taevas – багровое небо, пурпурного цвета
sedalaadi ehitis – подобное строение
poolverd hobune – лошадь-полукровка, смешанной породы
jahedavõitu öö – холодноватая ночь 
isevärki inimene – своеобразный, чудаковатый человек
kõneväärt sündmus – заслуживающее  внимания, значительное событие
2. Из слов, обозначающих количество, несклоняемыми остаются слова: kogu – весь, eri – отдельный, особенный. 
Ootan sind kogu päeva. – Жду тебя весь день.
Need on eri küsimused. – Это отдельные вопросы.
3. Употребляемые с существительным определения, которые совпадают или похожи на форму omastav имен собственных. Особенность их заключается в том, что писаться они могут как с маленькой, прописной буквы, так и с заглавной.
С маленькой буквы пишутся:
Прилагательные, указывающие на связь с этносом (но не страной или территорией!)
soome keel – финский язык
eesti kultuur – эстонская культура
vene muusika – русская музыка
Названия религий
luteri kirik – лютеранская церковь
juudi usk – иудейское вероисповедание, иудаизм
Названия видов растений и животных
jaapani sakura – японская сакура
siberi kaljukits – сибирский  дикий козёл
amuuri tiiger – амурский тигр

В остальных случаях имена собственные в форме omastav  пишутся с большой буквы.
Eesti piim – эстонское молоко (из Эстонии)
Gregoriuse kalender – григорианский календарь
Чтобы посмотреть, как ведут себя несклоняемые прилагательные уже вместе с существительными, возьмем и просклоняем словосочетание «eesti keel – эстонский язык».

<table>
    <tr>
        <td>
            Падежи
        </td>
        <td>Единственно число.
            Ainsus
        </td>
        <td>Множественное число.
            Mitmus.
        </td>
    </tr>
    <tr>
        <td>Nimetav</td>
        <td>eesti keel</td>
        <td>eesti keeled</td>
    </tr>
    <tr>
        <td>Omastav</td>
        <td>eesti keele</td>
        <td>eesti keelte</td>
    </tr>
    <tr>
        <td>Osastav</td>
        <td>eesti keelt</td>
        <td>eesti keeli</td>
    </tr>
    <tr>
        <td>Sisseütlev</td>
        <td>eesti keelde</td>
        <td>eesti keeltesse</td>
    </tr>
    <tr>
        <td>Seesütlev</td>
        <td>eesti keeles</td>
        <td>eesti keeltes</td>
    </tr>
    <tr>
        <td>Seestütlev</td>
        <td>eesti keelest</td>
        <td>eesti keeltest</td>
    </tr>
    <tr>
        <td>Alaleütlev</td>
        <td>eesti keelele</td>
        <td>eesti keeltele</td>
    </tr>
    <tr>
        <td>Alalütlev</td>
        <td>eesti keelel</td>
        <td>eesti keeltel</td>
    </tr>
    <tr>
        <td>Alaltütlev</td>
        <td>eesti keelelt</td>
        <td>eesti keeltelt</td>
    </tr>
    <tr>
        <td>Saav</td>
        <td>eesti keeleks</td>
        <td>eesti keelteks</td>
    </tr>
    <tr>
        <td>Rajav</td>
        <td>eesti keeleni</td>
        <td>eesti keelteni</td>
    </tr>
    <tr>
        <td>Olev</td>
        <td>eesti keelena</td>
        <td>eesti keeltena</td>
    </tr>
    <tr>
        <td>Ilmaütlev</td>
        <td>eesti keeleta</td>
        <td>eesti keelteta</td>
    </tr>
    <tr>
        <td>Kaasütlev</td>
        <td>eesti keelega</td>
        <td>eesti keeltega</td>
    </tr>
</table>

Суффиксы, образующие имена прилагательные.
В эстонском языке, как, конечно же, и в любом другом, существует несметное множество прилагательных, несущих в себе как положительное, так и отрицательное значение.  Выглядеть в тексте они могут как угодно: короткие слова, или длинные, оканчивающиеся на согласную, или же наоборот гласную букву и т. д.,  и т. п..
Помимо этого прилагательные можно образовать от других частей речи. Для этого нам нужно знать определенные суффиксы, с помощью которых можно сформировать новые слова. Ниже будет представлен список суффиксов, с указанием к каким частям речи они могут добавляться.
Суффиксы общей направленности: 
-ne 
Суффикс -ne образует прилагательные от существительных или наречий. В случае с существительными, суффикс добавляется чаще всего к падежу omastav, а образованное прилагательное будет обозначать материал, состав, или соприкосновение с чем-то, контакт. Если суффикс добавляется к основе наречий, то прилагательное приобретает значение времени и места.

<table>
    <tr>
        <td>sool</td>
        <td>соль</td>
        <td>soolane</td>
        <td>соленый</td>
    </tr>
    <tr>
        <td>vill</td>
        <td>шерсть</td>
        <td>villane</td>
        <td>шерстяной</td>
    </tr>
    <tr>
        <td>aasta</td>
        <td>год</td>
        <td>aastane</td>
        <td>годовалый</td>
    </tr>
    <tr>
        <td>siin</td>
        <td>здесь</td>
        <td>siinne</td>
        <td>здешний</td>
    </tr>
    <tr>
        <td>täna</td>
        <td>сегодня</td>
        <td>tänane</td>
        <td>сегодняшний</td>
    </tr>
    <tr>
        <td>puder</td>
        <td>каша</td>
        <td>pudrune</td>
        <td>испачканный в каше</td>
    </tr>
    <tr>
        <td>tolm</td>
        <td>пыль</td>
        <td>tolmune</td>
        <td>пыльный</td>
    </tr>
</table>

Также при помощи данного суффикса можно образовать несметное множество прилагательных от иностранных слов с подобным значением: efekt-efektne, kontrast-kontrastne, stereotüüp-stereotüüpne.
-line
Суффикс -line образует прилагательные от существительных (также чаще всего от падежа omastav), указывая на более существенный признак, чем суффикс -ne. Исключением здесь будет тот случай, когда от существительных при помощи суффикса -line образуются другие существительные со значением лица, исполнителя.

<table>
    <tr>
        <td>värv</td>
        <td>цвет</td>
        <td>värviline</td>
        <td>цветной</td>
    </tr>
    <tr>
        <td>vari</td>
        <td>тень</td>
        <td>varjuline</td>
        <td>тенистый</td>
    </tr>
    <tr>
        <td>mass</td>
        <td>масса</td>
        <td>massiline</td>
        <td>массовый</td>
    </tr>
    <tr>
        <td>ruut</td>
        <td>клетка</td>
        <td>ruuduline</td>
        <td>клетчатый</td>
    </tr>
    <tr>
        <td>sõda</td>
        <td>война</td>
        <td>sõjaline</td>
        <td>военный</td>
    </tr>
    <tr>
        <td>aga / но:</td>
    </tr>
    <tr>
        <td>töö</td>
        <td>работа</td>
        <td>tööline</td>
        <td>Рабочий</td>
    </tr>
    <tr>
        <td>abi</td>
        <td>помощь</td>
        <td>abiline</td>
        <td>Помощник</td>
    </tr>
</table>

-lik
С помощью суффикса -lik образуются прилагательные от существительных (чаще от основы падежа omastav, реже nimetav), от глаголов, от других прилагательных (уменьшая оттенок), или от имен собственных:

<table>
    <tr>
        <td>kiri</td>
        <td>письмо</td>
        <td>kirjalik</td>
        <td>письменный</td>
    </tr>
    <tr>
        <td>sõber</td>
        <td>друг</td>
        <td>sõbralik</td>
        <td>дружелюбный</td>
    </tr>
    <tr>
        <td>pidu</td>
        <td>праздник</td>
        <td>pidulik</td>
        <td>праздничный</td>
    </tr>
    <tr>
        <td>sobima</td>
        <td>подходить</td>
        <td>sobilik</td>
        <td>подходящий</td>
    </tr>
    <tr>
        <td>õpetama</td>
        <td>учить</td>
        <td>õpetlik</td>
        <td>поучительный</td>
    </tr>
    <tr>
        <td>tuttav</td>
        <td>знакомый</td>
        <td>tuttavlik</td>
        <td>будто бы знакомый, фамильярный</td>
    </tr>
    <tr>
        <td>Putin</td>
        <td>Путин</td>
        <td>putinlik</td>
        <td>путинский</td>
    </tr>
</table>

Суффикс -tu, выражающий отсутствие признака:
Суффикс может добавляться к основе падежа omastav существительных, или к форме ma-инфинитива глагола. При переводе на русский язык можно использовать приставки без-, не-.

<table>
    <tr>
        <td>õnn</td>
        <td>счастье</td>
        <td>õnnetu</td>
        <td>несчастный</td>
    </tr>
    <tr>
        <td>maitse</td>
        <td>вкус</td>
        <td>maitsetu</td>
        <td>безвкусный</td>
    </tr>
    <tr>
        <td>elu</td>
        <td>жизнь</td>
        <td>elutu</td>
        <td>безжизненный</td>
    </tr>
    <tr>
        <td>kultuur</td>
        <td>культура</td>
        <td>kultuuritu</td>
        <td>некультурный</td>
    </tr>
    <tr>
        <td>lahendama</td>
        <td>решать</td>
        <td>lahendamatu</td>
        <td>неразрешимый</td>
    </tr>
    <tr>
        <td>usaldama</td>
        <td>доверять</td>
        <td>usaldamatu</td>
        <td>недоверчивый</td>
    </tr>
    <tr>
        <td>kartma</td>
        <td>бояться</td>
        <td>kartmatu</td>
        <td>бесстрашный</td>
    </tr>
</table>

Как вы могли заметить, суффикс -tu по своей сути очень напоминает падежное окончание -ta, и в большинстве случаев по значению они совпадают: lõhnatu gaas = lõhnata gaas газ без запаха. Но для части прилагательных суффикс -tu обозначает все-таки более постоянное отсутствие. Сравните: keeletu- безъязычный, немой и keeleta- просто без языка.
При добавлении суффикса -tu и окончания -ta к глаголу ma-инфинитива значение тоже часто немного разнится. Matu-прилагательные показывают, что действие невозможно, а глагольная mata-форма, что действие еще не совершено: ravimatu haigus = неизлечимая болезнь, ravimata haigus = невылеченная болезнь.
Суффикс -kas:
Данный суффикс указывает в основном на обилие чего-либо и добавляется к основе omastav существительных. Но при добавлении к основе прилагательных,  суффикс –kas указывает на уменьшение значения. Этот же суффикс, добавленный к названиям цветов, будет обозначать их слабый оттенок.

<table>
    <tr>
        <td>mahl</td>
        <td>сок</td>
        <td>mahlakas</td>
        <td>сочный</td>
    </tr>
    <tr>
        <td>anne</td>
        <td>дар</td>
        <td>andekas</td>
        <td>одаренный</td>
    </tr>
    <tr>
        <td>Edu</td>
        <td>успех</td>
        <td>edukas</td>
        <td>успешный</td>
    </tr>
    <tr>
        <td>hapu</td>
        <td>кислый</td>
        <td>hapukas</td>
        <td>кисловатый</td>
    </tr>
    <tr>
        <td>punane</td>
        <td>красный</td>
        <td>punakas</td>
        <td>красноватый</td>
    </tr>
    <tr>
        <td>pruun</td>
        <td>коричневый</td>
        <td>pruunikas</td>
        <td>коричневатый</td>
    </tr>
</table>

Суффикс -jas:
При добавлении к существительным (!чаще всего к основе первого падежа nimetav) и основе глагола, суффикс -jas указывает на схожесть. Также суффикс может добавляться к прилагательным, и в таком случае будет происходить уменьшение значения слова. 

<table>
    <tr>
        <td>klaas</td>
        <td>стекло</td>
        <td>klaasjas</td>
        <td>стекловидный</td>
    </tr>
    <tr>
        <td>tuhk</td>
        <td>пепел</td>
        <td>tuhkjas</td>
        <td>пеплообразный</td>
    </tr>
    <tr>
        <td>helkima</td>
        <td>блестеть</td>
        <td>helkjas</td>
        <td>блестящий</td>
    </tr>
    <tr>
        <td>must</td>
        <td>черный</td>
        <td>mustjas</td>
        <td>черноватый</td>
    </tr>
</table>
 
5. Суффикс -ke(ne):
Уменьшительно-ласкательный суффикс, который может добавляться ко всем склоняемым частям речи, и в том числе к прилагательным. Добавляется к основе падежа omastav. Удлиненная версия суффикса -kene требуется при изменении нового слова по падежам.

<table>
    <tr>
        <td>armas</td>
        <td>любимый</td>
        <td>armsake(ne)</td>
        <td>любименький</td>
    </tr>
    <tr>
        <td>vaene</td>
        <td>бедный</td>
        <td>vaeseke(ne)</td>
        <td>бедненький</td>
    </tr>
    <tr>
        <td>kitsas</td>
        <td>узкий</td>
        <td>kitsuke(ne)</td>
        <td>узенький</td>
    </tr>
</table>
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 12 })} source={source}/>)
