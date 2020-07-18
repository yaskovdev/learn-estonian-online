import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Несмотря на то, что мы с Вами разобрали по отдельности все 14 падежей эстонского языка, на некоторых склоняемых частях речи стоит заострить особое внимание. Для начала напомню, склоняемыми у нас считаются имена существительные, прилагательные, числительные и местоимения.

### Числительные. Arvsõnad

Имя числительное – это такая часть речи, которая может обозначать как количество предметов, то есть число, так и их порядок при счете. Из этого следует,  что существуют количественные числительные (используются вопросительные слова: уже известное нам mitu? – «сколько?»,  а также новое для нас kui palju? – которое дословно переводится «как много?», то есть «сколько?») и порядковые числительные (отвечают на вопрос mitmes? – «который?»). С количественными числительными мы уже начали свое знакомство. На третьем уроке взяли первый десяток: üks, kaks, kolm, neli... . Пришло время продолжить этот ряд.
Количественные числительные. Põhiarvsõnad.
Põhi – это основа, то есть для начала разберем основные числительные. 
Когда мы взяли числительные от 1 до 10, я Вам сказала, что они лягут в основу формирования всех остальных чисел, и я не обманывала. Чтобы сформировать числительные от 11 до 19, нам нужно к числительному от 1 до 9 добавить суффикс «-teist».  При этом написание этого числительного от 1 до 9 не меняется! Чтобы получились уже десятки, к числительным от 2 до 9  добавьте «-kümmend». Для того, чтобы получить сотни, мы добавим «-sada», а чтобы получить тысячи, нам всего лишь остается добавить к все тем же числительным от 1 и далее слово «tuhat».

<table>
    <tr>
        <th colspan="2">1-10</th>
        <th colspan="2">11-19</th>
        <th colspan="2">20-90 десятки</th>
        <th colspan="2">100-900 сотни</th>
        <th colspan="2">тысячи</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Üks</td>
        <td rowspan="10">
            <b>11</b><br>
            <b>12</b><br>
            <b>13</b><br>
            <b>14</b><br>
            <b>15</b><br>
            <b>16</b><br>
            <b>17</b><br>
            <b>18</b><br>
            <b>19</b><br>
        </td>
        <td rowspan="10">+
            teist
        </td>
        <td rowspan="10">
            <b>20</b><br>
            <b>30</b><br>
            <b>40</b><br>
            <b>50</b><br>
            <b>60</b><br>
            <b>70</b><br>
            <b>80</b><br>
            <b>90</b><br>
            <b>100</b><br>
        </td>
        <td rowspan="9">+
            kümmend
        </td>
        <td rowspan="10">
            <b>200</b><br>
            <b>300</b><br>
            <b>400</b><br>
            <b>500</b><br>
            <b>600</b><br>
            <b>700</b><br>
            <b>800</b><br>
            <b>900</b><br>
            <b>1000</b><br>
        </td>
        <td rowspan="9">+
            sada
        </td>
        <td rowspan="10">
            <b>2000</b><br>
            <b>3000</b><br>
            <b>4000</b><br>
            <b>5000</b><br>
            <b>6000</b><br>
            <b>7000</b><br>
            <b>8000</b><br>
            <b>9000</b><br>
            <b>10000</b><br>
        </td>
        <td rowspan="10">+ tuhat</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Kaks</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Kolm</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Neli</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Viis</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Kuus</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Seitse</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Kaheksa</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Üheksa</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Kümme</td>
        <td>sada</td>
        <td>tuhat</td>
    </tr>
</table>

Что можно сказать о правописании. 
Добавочные части «-teist», «-kümmend», «-sada» пишутся с первой частью числительного слитно, а вот уже  «tuhat»,  «miljon», «miljard» и так далее, будут писаться раздельно. Также отдельно стоит писать и составные числительные. К примеру, если хотите написать 20 –пишите в одной слово kakskümmend, а вот если 21 – то это уже два слова – kakskümmend üks. 
В рамках темы числительных, нам предстоит не только выучить названия самих чисел, но и посмотреть, как изменяются они по падежам. Повторюсь, все числительные изменяются по падежам. Работаем с ними по тому же принципу, что с существительными или с прилагательными - все 14 падежей нам учить не нужно. Запоминаем первые три падежа, а уже все остальные, начиная с 4го,  образуются от omastav при помощи окончаний. Ну и так же, как мы рассмотрели важность первой десятки для образования всех остальных числительных первого падежа, так и в основу числительных остальных падежей легли тоже именно первые десять чисел.
На что здесь стоит обратить внимание. В сложных количественных числительных в падежах nimetav, omastav, osastav склоняются все компоненты. Начиная с четвертого падежа, окончание присоединяется только к последней части слова, все остальные компоненты остаются в падеже omastav.
Внизу в таблице представлены первые три падежа для всех групп чисел, плюс для примера добавления окончания взят падеж alaleütlev.

<table>
    <tr>
        <td>Nimetav</td>
        <td>Omastav</td>
        <td>Osastav</td>
        <td>Alaleütlev</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Üks</td>
        <td>Ühe</td>
        <td>Üht(e)</td>
        <td>Ühele</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Kaks</td>
        <td>Kahe</td>
        <td>Kaht(e)</td>
        <td>Kahele</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Kolm</td>
        <td>Kolme</td>
        <td>Kolme</td>
        <td>Kolmele</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Neli</td>
        <td>Nelja</td>
        <td>Nelja</td>
        <td>Neljale</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Viis</td>
        <td>Viie</td>
        <td>Viit</td>
        <td>Viiele</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Kuus</td>
        <td>Kuue</td>
        <td>Kuut</td>
        <td>Kuuele</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Seitse</td>
        <td>Seitsme</td>
        <td>Seitset</td>
        <td>Seitsmele</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Kaheksa</td>
        <td>Kaheksa</td>
        <td>Kaheksat</td>
        <td>Kaheksale</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Üheksa</td>
        <td>Üheksa</td>
        <td>Üheksat</td>
        <td>Üheksale</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Kümme</td>
        <td>Kümne</td>
        <td>Kümmet</td>
        <td>Kümnele</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Üksteist</td>
        <td>Üheteistkümne</td>
        <td>Ühtteist</td>
        <td>Üheteistkümnele</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Kaksteist</td>
        <td>Kaheteistkümne</td>
        <td>Kahtteist</td>
        <td>Kaheteistkümnele</td>
    </tr>
    <tr>
        <td>13</td>
        <td>kolmteist</td>
        <td>Kolmeteistkümne</td>
        <td>Kolmeteist</td>
        <td>Kolmeteistkümnele</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Neliteist</td>
        <td>Neljateistkümne</td>
        <td>Neljateist</td>
        <td>Neljateistkümnele</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Viisteist</td>
        <td>Viieteistkümne</td>
        <td>Viitteist</td>
        <td>Viieteistkümnele</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Kuusteist</td>
        <td>Kuueteistkümne</td>
        <td>Kuutteist</td>
        <td>Kuueteistkümnele</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Seitseteist</td>
        <td>Seitsmeteistkümne</td>
        <td>Seitsetteist</td>
        <td>Seitsmeteistkümnele</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Kaheksateist</td>
        <td>Kaheksateistkümne</td>
        <td>Kaheksatteist</td>
        <td>Kaheksateistkümnele</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Üheksateist</td>
        <td>Üheksateistkümne</td>
        <td>Üheksatteist</td>
        <td>Üheksateistkümnele</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Kakskümmend</td>
        <td>Kahekümne</td>
        <td>Kahtkümmend</td>
        <td>Kahekümnele</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Kakskümmend üks</td>
        <td>Kahekümne ühe</td>
        <td>Kahtkümmend üht(e)</td>
        <td>Kahekümne ühele</td>
    </tr>
    <tr>
        <td>32</td>
        <td>Kolmkümmend kaks</td>
        <td>Kolmekümne kahe</td>
        <td>Kolmekümmend kaht(e)</td>
        <td>Kolmekümne kahele</td>
    </tr>
    <tr>
        <td>45</td>
        <td>Nelikümmend viis</td>
        <td>Neljakümne viie</td>
        <td>Neljakümmend viit</td>
        <td>Neljakümne viiele</td>
    </tr>
    <tr>
        <td>100</td>
        <td>Sada</td>
        <td>Saja</td>
        <td>Sadat</td>
        <td>Sajale</td>
    </tr>
    <tr>
        <td>300</td>
        <td>Kolmsada</td>
        <td>Kolmesaja</td>
        <td>Kolmesadat</td>
        <td>Kolmesajale</td>
    </tr>
    <tr>
        <td>1000</td>
        <td>Tuhat</td>
        <td>Tuhande</td>
        <td>Tuhandet/tuhat</td>
        <td>Tuhandele</td>
    </tr>
    <tr>
        <td>2000</td>
        <td>Kaks tuhat</td>
        <td>Kahe tuhande</td>
        <td>Kaht(e) tuhandet/ kaht(e) tuhat</td>
        <td>Kahe tuhandele</td>
    </tr>
    <tr>
        <td>0</td>
        <td>Null</td>
        <td>Nulli</td>
        <td>Nulli</td>
        <td>Nullile</td>
    </tr>
</table>

NB! Если количественное числительное (кроме üks) стоит в падеже nimetav единственного числа, то с ним будет сочетаться существительное в форме падежа osastav единственного числа. В остальных же случаях, числительное и существительное полностью согласуется между собой по падежу и числу.
Näide.
Mul on üks sõber, aga tal on sada sõpra. У меня один друг, а у него сто друзей. 
Sajad inimesed ei lähe täna tööle. Сотни людей не идут сегодня на работу.
Nad annavad tööd sajale inimesele. Они дают работу для ста человек.

Порядковые числительные. Järgarvsõnad.
Порядковые числительные, начиная с четвертого, образуются от второго падежа (omastav) количественных числительных при помощи добавления суффиксов:
järgarvsõna nimetav = põhiarvsõna omastav + суффикс «-s»
järgarvsõna omastav = põhiarvsõna omastav + суффикс «-nda»
järgarvsõna osastav = põhiarvsõna omastav + суффикс «-ndat»
Первые три порядковых числительных являются исключениями. Для слов первый и второй придумали свои формы, не связанные с числами üks и kaks. А вот тройка попала в исключения за изменение гласной «е» на «а» (kolme, kolmas).
Порядковые числительные так же, как и количественные, бывают простые и составные. При образовании составных порядковых числительных суффиксы добавляются только к последнему числу, у предыдущих частей длинного числительного сохраняются формы падежа omastav количественного числительного.

<table>
    <tr>
        <td>Nimetav</td>
        <td>Omastav</td>
        <td>Osastav</td>
        <td>Alaleütlev</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Esimene</td>
        <td>Esimese</td>
        <td>Esimest</td>
        <td>Esimesele</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Teine</td>
        <td>Teise</td>
        <td>Teist</td>
        <td>Teisele</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Kolmas</td>
        <td>Kolmanda</td>
        <td>Kolmandat</td>
        <td>Kolmandale</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Neljas</td>
        <td>Neljanda</td>
        <td>Neljandat</td>
        <td>Neljandale</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Viies</td>
        <td>Viienda</td>
        <td>Viiendat</td>
        <td>Viiendale</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Kuues</td>
        <td>Kuuenda</td>
        <td>Kuuendat</td>
        <td>Kuuendale</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Seitsmes</td>
        <td>Seitsmenda</td>
        <td>Seitsmendat</td>
        <td>Seitsmendale</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Kaheksas</td>
        <td>Kaheksanda</td>
        <td>Kaheksandat</td>
        <td>Kaheksandale</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Üheksas</td>
        <td>Üheksanda</td>
        <td>Üheksandat</td>
        <td>Üheksandale</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Kümnes</td>
        <td>Kümnenda</td>
        <td>Kümnendat</td>
        <td>Kümnendale</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Üheteistkümnes</td>
        <td>Üheteistkümnenda</td>
        <td>Üheteistkümnendat</td>
        <td>Üheteistkümnendale</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Kaheteistkümnes</td>
        <td>Kaheteistkümnenda</td>
        <td>Kaheteistkümnendat</td>
        <td>Kaheteistkümnendale</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Kolmeteistkümnes</td>
        <td>Kolmeteistkümnenda</td>
        <td>Kolmeteistkümnendat</td>
        <td>Kolmeteistkümnendale</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Neljateistkümnes</td>
        <td>Neljateistkümnenda</td>
        <td>Neljateistkümnendat</td>
        <td>Neljateistkümnendale</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Viieteistkümnes</td>
        <td>Viieteistkümnenda</td>
        <td>Viieteistkümnendat</td>
        <td>Viieteistkümnendale</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Kuueteistkümnes</td>
        <td>Kuueteistkümnenda</td>
        <td>Kuueteistkümnendat</td>
        <td>Kuueteistkümnendale</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Seitsmeteistkümnes</td>
        <td>Seitsmeteistkümnenda</td>
        <td>Seitsmeteistkümnendat</td>
        <td>Seitsmeteistkümnendale</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Kaheksateistkümnes</td>
        <td>Kaheksateistkümnenda</td>
        <td>Kaheksateistkümnendat</td>
        <td>Kaheksateistkümnendale</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Üheksateistkümnes</td>
        <td>Üheksateistkümnenda</td>
        <td>Üheksateistkümnendat</td>
        <td>Üheksateistkümnendale</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Kahekümnes</td>
        <td>Kahekümnenda</td>
        <td>Kahekümnendat</td>
        <td>Kahekümnendale</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Kahekümne esimene</td>
        <td>Kahekümne esimese</td>
        <td>Kahekümne esimest</td>
        <td>Kahekümne esimesele</td>
    </tr>
    <tr>
        <td>32</td>
        <td>Kolmekümne teine</td>
        <td>Kolmekümne teise</td>
        <td>Kolmekümne teist</td>
        <td>Kolmekümne teisele</td>
    </tr>
    <tr>
        <td>45</td>
        <td>Neljakümne viies</td>
        <td>Neljakümne viienda</td>
        <td>Neljakümne viiendat</td>
        <td>Neljakümne viiendale</td>
    </tr>
    <tr>
        <td>100</td>
        <td>Sajas</td>
        <td>Sajanda</td>
        <td>Sajandat</td>
        <td>Sajandale</td>
    </tr>
    <tr>
        <td>300</td>
        <td>Kolmesajas</td>
        <td>Kolmesajanda</td>
        <td>Kolmesajandat</td>
        <td>Kolmesajandale</td>
    </tr>
    <tr>
        <td>1000</td>
        <td>Tuhandes</td>
        <td>Tuhandenda</td>
        <td>Tuhandendat</td>
        <td>Tuhandendale</td>
    </tr>
    <tr>
        <td>2000</td>
        <td>Kahe tuhandes</td>
        <td>Kahe tuhandenda</td>
        <td>Kahe tuhandendat</td>
        <td>Kahe tuhandendale</td>
    </tr>
</table>

После порядкового числительного, написанного в тексте арабской цифрой, в эстонской орфографии всегда ставится точка. Выбрать нужный падеж для правильного чтения числительного нам поможет следующее за ним слово.
Näide.
Minu poeg õpib 5. klassis. (viiendas klassis) Мой сын учится в пятом классе.
Mul on 11. koht. (üheteistkümnes koht) У меня одиннадцатое место.
Täna on 25. mai. (kahekümne viies mai) Сегодня двадцать пятое мая.
Mina olen sündinud 1981. aastal. (tuhande üheksasaja kaheksakümne esimesel aastal) Я родился в тысяча девятьсот восемьдесят первом году.

Понимаю, что тема с числительными достаточно объемная. Но пугаться ее не стоит. Помните, сначала следует выучить первые десять чисел в трех падежах и потом понять логику образования всех остальных числительных  от этих первых десяти.
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 10 })} source={source}/>)
