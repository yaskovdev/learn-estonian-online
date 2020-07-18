import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Продолжаем говорить о прилагательных

Степени сравнения имен прилагательных. Omadussõna võrdlusastmed.
Еще одна тема, которая касается прилагательных, это степени сравнения. В эстонском языке имя прилагательное имеет три степени сравнения:
1. Начальная степень или положительная. Algvõrre. Данная степень показывается наличие качества у прилагательного, не выражая при этом его меру. Данная форма не имеет специального грамматического признака, то есть это те самые слова и их формы, о которых мы говорили до этого.
Hea – хороший 
Suur – большой 
Ilus – красивый 

2. Сравнительная степень. Keskvõrre. Показывает наличие какого-либо качества в большей мере, чем у другого человека, предмета, явления. Грамматический признак образования сравнительной степени является -m. Основное правило звучит так: keskvõrre = algvõrre omastavas (в форме 2го падежа) + m

<table>
    <tr>
        <td>Nimetav</td>
        <td>перевод</td>
        <td>Omastav</td>
        <td>keskvõrre</td>
    </tr>
    <tr>
        <td>Vaba</td>
        <td>свободный</td>
        <td>Vaba</td>
        <td>Vabam</td>
    </tr>
    <tr>
        <td>Palav</td>
        <td>жаркий</td>
        <td>Palava</td>
        <td>Palavam</td>
    </tr>
    <tr>
        <td>Kuulus</td>
        <td>известный</td>
        <td>Kuulsa</td>
        <td>Kuulsam</td>
    </tr>
    <tr>
        <td>Tugev</td>
        <td>сильный</td>
        <td>Tugeva</td>
        <td>Tugevam</td>
    </tr>
</table>

Näide:
Poiss on tugevam kui tüdruk. Мальчик сильнее, чем девочка.
Но, увы, не все так просто. Эстонский язык – это язык исключений. Часто в двухсложных прилагательных, второй падеж которых заканчивается на гласные -a,  и еще реже -u, перед добавлением признака -m, будет происходить изменение этих последних гласных на -e.
-A переходит в -E:

<table>
    <tr>
        <td>Nimetav</td>
        <td>перевод</td>
        <td>Omastav</td>
        <td>keskvõrre</td>
    </tr>
    <tr>
        <td>Arg</td>
        <td>трусливый</td>
        <td>Ara</td>
        <td>Arem</td>
    </tr>
    <tr>
        <td>Halb</td>
        <td>плохой</td>
        <td>Halva</td>
        <td>Halvem</td>
    </tr>
    <tr>
        <td>Kurb</td>
        <td>печальный</td>
        <td>Kurva</td>
        <td>Kurvem</td>
    </tr>
    <tr>
        <td>Kuum</td>
        <td>горячий</td>
        <td>Kuuma</td>
        <td>kuumem</td>
    </tr>
    <tr>
        <td>Kõva</td>
        <td>твердый</td>
        <td>Kõva</td>
        <td>kõvem</td>
    </tr>
    <tr>
        <td>Külm</td>
        <td>холодный</td>
        <td>Külma</td>
        <td>külmem</td>
    </tr>
    <tr>
        <td>Lai</td>
        <td>широкий</td>
        <td>Laia</td>
        <td>laiem</td>
    </tr>
    <tr>
        <td>Laisk</td>
        <td>ленивый</td>
        <td>Laisa</td>
        <td>laisem</td>
    </tr>
    <tr>
        <td>Must</td>
        <td>черный, грязный</td>
        <td>Musta</td>
        <td>mustem</td>
    </tr>
    <tr>
        <td>Nõrk</td>
        <td>слабый</td>
        <td>Nõrga</td>
        <td>nõrgem</td>
    </tr>
    <tr>
        <td>Pikk</td>
        <td>длинный</td>
        <td>Pika</td>
        <td>pikem</td>
    </tr>
    <tr>
        <td>Soe</td>
        <td>теплый</td>
        <td>Sooja</td>
        <td>soojem</td>
    </tr>
    <tr>
        <td>Tark</td>
        <td>умный</td>
        <td>Targa</td>
        <td>targem</td>
    </tr>
    <tr>
        <td>Tühi</td>
        <td>пустой</td>
        <td>Tühja</td>
        <td>tühjem</td>
    </tr>
    <tr>
        <td>Vana</td>
        <td>старый</td>
        <td>Vana</td>
        <td>vanem</td>
    </tr>
    <tr>
        <td>Õrn</td>
        <td>нежный</td>
        <td>Õrna</td>
        <td>õrnem</td>
    </tr>
</table>


-U переходит в -E:

<table>
    <tr>
        <td>Nimetav</td>
        <td>перевод</td>
        <td>Omastav</td>
        <td>keskvõrre</td>
    </tr>
    <tr>
        <td>Järsk</td>
        <td>крутой</td>
        <td>Järsu</td>
        <td>järsem</td>
    </tr>
    <tr>
        <td>Paks</td>
        <td>толстый</td>
        <td>Paksu</td>
        <td>paksem</td>
    </tr>
    <tr>
        <td>Vali</td>
        <td>громкий</td>
        <td>Valju</td>
        <td>valjem</td>
    </tr>
</table>

Следующая группа исключений включается в себя слова, оканчивающиеся на уменьшительно-ласкательный суффикс -ke. В этом случае происходит сокращение основы:
lühike-lühikese-lühem короче 
õhuke-õhukese-õhem тоньше
pisike-pisikese-pisem меньше
NB! Слово хороший во многих языках мира имеет исключительную форму сравнительной степени.
Hea – хороший Parem – лучше 

Есть два способа, как можно использовать сравнительную степень прилагательных в предложении:
1. С предлогом kui, который  в этом случае переводится как «чем». Слово, с которым в этом случае происходит сравнение, будет стоять в падеже nimetav.
Tüdruk on nõrgem kui poiss. Девочка слабее, чем мальчик.
Pirn on magusam kui õun. Груша слаще, чем яблоко.
2. С падежом seestütlev.
Tüdruk on poisist nõrgem. Девочка слабее мальчика.
Pirn on õunast magusam. Груша слаще яблока.
Есть еще один нюанс, который стоит разобрать, когда мы говорим о степенях сравнения в эстонском языке. Формы слов сравнительной степени склоняются, то есть ведут себя точно так же в предложении, как и формы положительной степени. К счастью, склоняются все слова одним и тем же образом.

<table>
    <tr>
        <td>
            Падежи
        </td>
        <td>Единственно число.
            Ainsus
        </td>
        <td></td>
        <td>Множественное число.
            Mitmus.
        </td>
    </tr>
    <tr>
        <td>Nimetav</td>
        <td>ilusam</td>
        <td>Noorem</td>
        <td>ilusamad</td>
        <td>nooremad</td>
    </tr>
    <tr>
        <td>Omastav</td>
        <td>ilusama</td>
        <td>noorema</td>
        <td>ilusamate</td>
        <td>nooremate</td>
    </tr>
    <tr>
        <td>Osastav</td>
        <td>ilusamat</td>
        <td>nooremat</td>
        <td>ilusamaid</td>
        <td>nooremaid</td>
    </tr>
    <tr>
        <td>Sisseütlev</td>
        <td>ilusamasse</td>
        <td>nooremasse</td>
        <td>ilusamatesse/
            ilusamaisse
        </td>
        <td>noorematesse/nooremaisse</td>
    </tr>
    <tr>
        <td>Seesütlev</td>
        <td>iluamas</td>
        <td>nooremas</td>
        <td>ilusamates/
            ilusamais
        </td>
        <td>nooremates/ nooremais</td>
    </tr>
    <tr>
        <td>... и т.д.</td>
    </tr>
</table>

Näide:

Ta tahab elada suuremas toas. Он хочет жить в комнате побольше.
Mulle meeldivad kõrgemad majad. Мне нравятся более высокие дома.
3. Превосходная степень. Ülivõrre. Для образования этой формы есть два способа. 
Первый, основной способ образования превосходной степени прилагательных, это добавить перед уже знакомой формой сравнительной степени слово kõige. Это и будет соответствовать слову «самый» русского языка:

<table>
    <tr>
        <td>Nimetav</td>
        <td>перевод</td>
        <td>omastav</td>
        <td>keskvõrre</td>
        <td>ülivõrre</td>
    </tr>
    <tr>
        <td>Kõrge</td>
        <td>высокий</td>
        <td>kõrge</td>
        <td>kõrgem</td>
        <td>kõige kõrgem</td>
    </tr>
    <tr>
        <td>Vajalik</td>
        <td>нужный</td>
        <td>vajaliku</td>
        <td>vajalikum</td>
        <td>kõige vajalikum</td>
    </tr>
    <tr>
        <td>Noor</td>
        <td>молодой</td>
        <td>noore</td>
        <td>noorem</td>
        <td>kõige noorem</td>
    </tr>
</table>

Ma olen kõige pikem tüdruk klassis. Я самая высокая девочка в классе.
Mart on kõige halvem sportlane, keda ma tunnen. Март самый плохой спортсмен, которого я знаю.
Но у превосходной степени есть еще одна форма. Разобранная выше считается полной формой превосходной степени. Она есть у всех прилагательных. А вот уже возможность образовать вторую, короткую форму превосходной степени – i-ülivõrre, есть не у всех прилагательных. Влиять на эту возможность будут в основном формы третьего падежа множественного числа,  где у некоторых слов есть вариант образования падежа посредством добавочного суффикса -i. Этот падеж во множественном числе мы пока не проходили, и нам будет достаточно сложно понять, у каких слов эта возможность есть, а у каких нет. Поэтому на начальном этапе изучения, целесообразно будет запомнить, как образуется полная форма превосходной степени, и при необходимости использовать именно ее. Но если вы в тексте встретите прилагательные, у которых, вместо знакомого признака -m сравнительной степени, будет к слову добавлено -im, то пугаться не стоит. Это и будет короткий вариант превосходной степени. Так же можно выявить уже сейчас такую закономерность, что если в сравнительной степени у прилагательно перед буквой –m  стоит –e-,то скорее всего у такого прилагательного тоже будет короткая форма превосходной степени, и –em  поменяется на -im:

<table>
    <tr>
        <td>Nimetav</td>
        <td>перевод</td>
        <td>omastav</td>
        <td>keskvõrre</td>
        <td>ülivõrre</td>
    </tr>
    <tr>
        <td>Suur</td>
        <td>большой</td>
        <td>suure</td>
        <td>suurem</td>
        <td>suurim
            kõige suurem
            Hea
        </td>
        <td>хороший</td>
        <td>Hea</td>
        <td>parem</td>
        <td>parim
            kõige parem
        </td>
    </tr>
    <tr>
        <td>Tähtis</td>
        <td>важный</td>
        <td>tähtsa</td>
        <td>tähtsam</td>
        <td>tähtsaim
            kõige tähtsam
        </td>
    </tr>
</table>

Me elame linna kõige suuremas majas = Me elame linna suurimas majas. Мы живем в самом большом доме города.
Korvis on kõige hapumad õunad. В корзине самые кислые яблоки. (Короткой формы превосходной степени нет.)
На этом грамматическая часть по теме прилагательные заканчивается. Мы поговорили о их роли в предложении, об особенностях склонения, и об их изменении по степеням сравнения. Вам лишь остается отрабатывать полученные знания на практике, и начать с упражнений после этого урока.
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 13 })} source={source}/>)
