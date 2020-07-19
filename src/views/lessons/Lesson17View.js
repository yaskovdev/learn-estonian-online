import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
В разных уроках мы по отдельности брали уже и прилагательные, и числительные. Буквально на прошлом уроке мы поговорили снова про имена существительные. Из склоняемых частей речи нам осталось разобрать местоимения. Предлагаю сейчас этим и заняться.

### Местоимения. Asesõnad

Местоимения — эти часть речи, которая указывает на какое-то лицо, предмет, на признаки, но их не называет.
Inimene on ukse taga. Tema on ukse taga. Keegi on ukse taga.
Человек за дверью. Он/Она за дверью. Кто-то за дверью.
Местоимений, конечно, много.  Возьмем несколько подвидов, и рассмотрим особенности их склонения.
С некоторыми мы уже знакомы с самых первых наших уроков. Такие, например, как личные местоимения единственного и множественного числа у нас, я думаю, уже доведены до автоматизма.

### Личные местоимения. Isikulised asesõnad.

<table>
    <tr>
        <td>
            Лицо
        </td>
        <td>Единственное
            Число
        </td>
        <td>Множественное
            Число</td>
    <tr>
        <td>1</td>
        <td>Я Mina (ma)</td>
        <td>МЫ Meie (me)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>ТЫ Sina (sa)</td>
        <td>ВЫ Teie (te)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>ОН
            ОНА Tema (ta)
            ОНО
        </td>
        <td>ОНИ Nemad (nad)</td>
    </tr>
</table>

Чтобы суммировать знания по этим личным местоимениям, давайте посмотрим, как изменяются все 6 личных местоимений по 14 падежам эстонского языка.
Как мы видим в таблице, для местоимений даны полные и рядом короткие формы.  Разницы в их использовании практически нет, но вот если Вы хотите на местоимение в предложении сделать акцент, то следует употребить именно полную форму.
Эти короткие формы существуют у многих падежей. В первых трех основных падежах и во внешних падежах места короткие формы используются достаточно часто.  У внутренних падежей места они конечно тоже имеются, но используются намного реже.

<table>
    <tr>
        <td>1 лицо ед.ч.</td>
        <td>перевод</td>
        <td>2 лицо ед.ч.</td>
        <td>3 лицо ед.ч.</td>
    </tr>
    <tr>
        <td>nimetav</td>
        <td>mina/ma</td>
        <td>я</td>
        <td>sina/sa</td>
        <td>tema/ta</td>
    </tr>
    <tr>
        <td>omastav</td>
        <td>minu/mu</td>
        <td>мой, моя, мое</td>
        <td>sinu/su</td>
        <td>tema/ta</td>
    </tr>
    <tr>
        <td>osastav</td>
        <td>mind</td>
        <td>меня</td>
        <td>sind</td>
        <td>teda</td>
    </tr>
    <tr>
        <td>sisseütlev</td>
        <td>minusse/musse</td>
        <td>в меня</td>
        <td>sinusse/susse</td>
        <td>temasse/tasse</td>
    </tr>
    <tr>
        <td>seesütlev</td>
        <td>minus/mus</td>
        <td>во мне</td>
        <td>sinus/sus</td>
        <td>temas/tas</td>
    </tr>
    <tr>
        <td>seestütlev</td>
        <td>minust/must</td>
        <td>обо мне</td>
        <td>sinust/sust</td>
        <td>temast/tast</td>
    </tr>
    <tr>
        <td>alaleütlev</td>
        <td>minule/mulle</td>
        <td>мне</td>
        <td>sinule/sulle</td>
        <td>temale/talle</td>
    </tr>
    <tr>
        <td>alalütlev</td>
        <td>minul/mul</td>
        <td>у меня</td>
        <td>sinul/sul</td>
        <td>temal/tal</td>
    </tr>
    <tr>
        <td>alaltütlev</td>
        <td>minult/mult</td>
        <td>от меня</td>
        <td>sinult/sult</td>
        <td>temalt/talt</td>
    </tr>
    <tr>
        <td>saav</td>
        <td>minuks</td>
        <td>мною (стать)</td>
        <td>sinuks</td>
        <td>temaks</td>
    </tr>
    <tr>
        <td>rajav</td>
        <td>minuni</td>
        <td>до меня</td>
        <td>sinuni</td>
        <td>temani</td>
    </tr>
    <tr>
        <td>olev</td>
        <td>minuna</td>
        <td>мною (быть)</td>
        <td>sinuna</td>
        <td>temana</td>
    </tr>
    <tr>
        <td>ilmaütlev</td>
        <td>minuta</td>
        <td>без меня</td>
        <td>sinuta</td>
        <td>temata</td>
    </tr>
    <tr>
        <td>kaasütlev</td>
        <td>minuga</td>
        <td>со мною</td>
        <td>sinuga</td>
        <td>temaga</td>
    </tr>
</table>

<table>
    <tr>
        <td>1 лицо мн.ч.</td>
        <td>2 лицо мн.ч.</td>
        <td>3 лицо мн.ч.</td>
    </tr>
    <tr>
        <td>nimetav</td>
        <td>meie/me</td>
        <td>teie/te</td>
        <td>nemad/nad</td>
    </tr>
    <tr>
        <td>omastav</td>
        <td>meie/me</td>
        <td>teie/te</td>
        <td>nende</td>
    </tr>
    <tr>
        <td>osastav</td>
        <td>meid</td>
        <td>teid</td>
        <td>neid</td>
    </tr>
    <tr>
        <td>sisseütlev</td>
        <td>meisse</td>
        <td>teisse</td>
        <td>nendesse/neisse</td>
    </tr>
    <tr>
        <td>seesütlev</td>
        <td>meis</td>
        <td>teis</td>
        <td>nendes/neis</td>
    </tr>
    <tr>
        <td>seestütlev</td>
        <td>meist</td>
        <td>teist</td>
        <td>nendest/neist</td>
    </tr>
    <tr>
        <td>alaleütlev</td>
        <td>meile</td>
        <td>teile</td>
        <td>nendele/neile</td>
    </tr>
    <tr>
        <td>alalütlev</td>
        <td>meil</td>
        <td>teil</td>
        <td>nendel/neil</td>
    </tr>
    <tr>
        <td>alaltütlev</td>
        <td>meilt</td>
        <td>teilt</td>
        <td>nendelt/neilt</td>
    </tr>
    <tr>
        <td>saav</td>
        <td>meieks/meiks</td>
        <td>teieks/teiks</td>
        <td>nendeks/neiks</td>
    </tr>
    <tr>
        <td>rajav</td>
        <td>meieni</td>
        <td>teieni</td>
        <td>nendeni</td>
    </tr>
    <tr>
        <td>olev</td>
        <td>meiena</td>
        <td>teiena</td>
        <td>nendena</td>
    </tr>
    <tr>
        <td>ilmaütlev</td>
        <td>meieta</td>
        <td>teieta</td>
        <td>nendeta</td>
    </tr>
    <tr>
        <td>kaasütlev</td>
        <td>meiega</td>
        <td>teiega</td>
        <td>nendega</td>
    </tr>
</table>


Näide:
Ära mult seda küsi. У меня это не спрашивай.
Sinu õele meeldib head muusikat kuulata. Твоей сестре нравится слушать хорошую музыку.
Me ei saa ilma nendeta tööd lõpetada. Мы не можем без них закончить работу.
Teieni pole see info veel jõudnud. До вас эта информация еще не дошла.
Притяжательные местоимения. Omastavad asesõnad.
Притяжательные местоимения указывают на принадлежность чему-либо, кому- либо. В русском языке это местоимения — свой, своя, свое, в эстонском это все вмещается в одном слове — oma. Первые три падежа для него выглядят одинаково — oma, oma, oma, чтобы же сделать следующие падежи, мы просто добавляем нужное окончание. 
Näide:
Annan talle oma raamatu. Дам ему свою книгу.
See maja on Tiina oma. Это дом Тийны.
Nad on ammu juba omad inimesed. Они давно уже свои люди.
NB! Что интересно, если у нас в предложении выражена принадлежность к лицу (его книга, у их брата, своему другу), то не зависимо от того, в каком падеже стоит следующее за местоимением слово, само местоимение останется во втором падеже. Это будет касаться как личных местоимений, так и притяжательного местоимения. А со словом oma так вообще интересная история получается. Притяжательное местоимение oma, указывая на принадлежность к кому-нибудь, и вовсе используется в основном только в одном своем виде, в форме падежа omastav, то есть в предложениях практически не меняется.
See on minu vend. Это мой брат.
Ma annan oma õpiku tema sõbrale. Я дам свой учебник его другу.
Ma armastan oma meest. Я люблю своего мужа.
Указательные местоимения. Näitavad asesõnad.
В эту группу местоимений входят уже известные нам местоимения see и need. Оба переводятся как «это», ведь в русском языке сам предмет или лицо говорит о его количестве, а не используемое с ним местоимение. В эстонском же языке, если Вы указываете на один предмет, лицо, то используете местоимение see, а если видите несколько, то и существительное меняете на множественное число, и местоимение меняете на need. 
Näide:
See õpilane peab klassis olema. Этот ученик должен быть в классе.
Need inimesed elavad linnas, kuid see mees tahab maal elada. Эти люди живут в городе, а этот мужчина хочет жить в деревне.
Первые три падежа для этих местоимений мы уже брали: see-selle-seda и need-nende-neid.  Местоимение need со второго падежа полностью повторяет личное местоимение nemad(nad), так что его формы будут Вам уже знакомы. А вот для местоимения see рекомендую посмотреть внимательно падежи, начиная с четвертого, ведь здесь тоже будут короткие формы
Дополнительно в рамке ниже будет представлено еще одно местоимение — ise, сам (сама, само). Формально оно относится к возвратным местоимениям/enesekohased asesõnad. Но так как фактически оно тоже указывает на человека, предмет (правда на себя самого, кто совершает действие), я решила эти две группы местоимений соединить.

<table>
    <tr>
        <td>nimetav</td>
        <td>see</td>
        <td>need</td>
        <td>ise</td>
    </tr>
    <tr>
        <td>omastav</td>
        <td>selle</td>
        <td>nende</td>
        <td>enese/enda</td>
    </tr>
    <tr>
        <td>osastav</td>
        <td>seda</td>
        <td>neid</td>
        <td>ennast/end</td>
    </tr>
    <tr>
        <td>sisseütlev</td>
        <td>sellesse/sesse</td>
        <td>nendesse/neisse</td>
        <td>enesesse/endasse</td>
    </tr>
    <tr>
        <td>seesütlev</td>
        <td>selles/ses</td>
        <td>nendes/neis</td>
        <td>eneses/endas</td>
    </tr>
    <tr>
        <td>seestütlev</td>
        <td>sellest/sest</td>
        <td>nendest/neist</td>
        <td>enesest/endast</td>
    </tr>
    <tr>
        <td>alaleütlev</td>
        <td>sellele</td>
        <td>nendele/neile</td>
        <td>enesele/endale</td>
    </tr>
    <tr>
        <td>alalütlev</td>
        <td>sellel/sel</td>
        <td>nendel/neil</td>
        <td>enesel/endal</td>
    </tr>
    <tr>
        <td>alaltütlev</td>
        <td>sellelt</td>
        <td>nendelt/neilt</td>
        <td>eneselt/endalt</td>
    </tr>
    <tr>
        <td>saav</td>
        <td>selleks</td>
        <td>nendeks/neiks</td>
        <td>eneseks/endaks</td>
    </tr>
    <tr>
        <td>rajav</td>
        <td>selleni</td>
        <td>nendeni</td>
        <td>eneseni/endani</td>
    </tr>
    <tr>
        <td>olev</td>
        <td>sellena</td>
        <td>nendena</td>
        <td>enesena/endana</td>
    </tr>
    <tr>
        <td>ilmaütlev</td>
        <td>selleta</td>
        <td>nendeta</td>
        <td>eneseta/endata</td>
    </tr>
    <tr>
        <td>kaasütlev</td>
        <td>sellega</td>
        <td>nendega</td>
        <td>enesega/endaga</td>
    </tr>
</table>

Неопределенные местоимения. Umbmäärased asesõnad.
Неопределенные местоимения указывают на неопределенность предмета, существа или их признака. Из этой группы местоимений мы возьмем следующие:
keegi — кто-то, кто-либо, кто-нибудь
miski — что-то, что-либо, что-нибудь
mingi — какой-то, какой-либо, какой-нибудь
mõni — какой-то, какой-либо, какой-нибудь, некоторый, несколько
paljud — многие

<table>
    <tr>
        <td>nimetav</td>
        <td>keegi</td>
        <td>miski</td>
        <td>mingi</td>
        <td>mõni</td>
        <td>paljud</td>
    </tr>
    <tr>
        <td>omastav</td>
        <td>kellegi</td>
        <td>millegi</td>
        <td>mingi</td>
        <td>mõne</td>
        <td>paljude</td>
    </tr>
    <tr>
        <td>osastav</td>
        <td>kedagi</td>
        <td>midagi</td>
        <td>mingit</td>
        <td>mõnd/mõnda</td>
        <td>paljusid</td>
    </tr>
    <tr>
        <td>sisseütlev</td>
        <td>kellessegi</td>
        <td>millessegi</td>
        <td>mingisse</td>
        <td>mõnesse/mõnda</td>
        <td>paljudesse</td>
    </tr>
    <tr>
        <td>seesütlev</td>
        <td>kelleski</td>
        <td>milleski</td>
        <td>mingis</td>
        <td>mõnes</td>
        <td>paljudes</td>
    </tr>
    <tr>
        <td>seestütlev</td>
        <td>kellestki</td>
        <td>millestki</td>
        <td>mingist</td>
        <td>mõnest</td>
        <td>paljudest</td>
    </tr>
    <tr>
        <td>alaleütlev</td>
        <td>kellelegi</td>
        <td>millelegi</td>
        <td>mingile</td>
        <td>mõnele</td>
        <td>paljudele</td>
    </tr>
    <tr>
        <td>alalütlev</td>
        <td>kellelgi</td>
        <td>millelgi</td>
        <td>mingil</td>
        <td>mõnel</td>
        <td>paljudel</td>
    </tr>
    <tr>
        <td>alaltütlev</td>
        <td>kelleltki</td>
        <td>milleltki</td>
        <td>mingilt</td>
        <td>mõnelt</td>
        <td>paljudelt</td>
    </tr>
    <tr>
        <td>saav</td>
        <td>kellekski</td>
        <td>millekski</td>
        <td>mingiks</td>
        <td>mõneks</td>
        <td>paljudeks</td>
    </tr>
    <tr>
        <td>rajav</td>
        <td>kellenigi</td>
        <td>millenigi</td>
        <td>mingini</td>
        <td>mõneni</td>
        <td>paljudeni</td>
    </tr>
    <tr>
        <td>olev</td>
        <td>kellenagi</td>
        <td>millenagi</td>
        <td>mingina</td>
        <td>mõnena</td>
        <td>paljudena</td>
    </tr>
    <tr>
        <td>ilmaütlev</td>
        <td>kelletagi</td>
        <td>milletagi</td>
        <td>mingita</td>
        <td>mõneta</td>
        <td>paljudeta</td>
    </tr>
    <tr>
        <td>kaasütlev</td>
        <td>kellegagi</td>
        <td>millegagi</td>
        <td>mingiga</td>
        <td>mõnega</td>
        <td>paljudega</td>
    </tr>
</table>

NB! С неопределенными местоимениями часто можно встретить употребление суффиксов gi/ki. Суффиксы эти добавляются в самом конце уже сформированного падежа. Если слово оканчивается на гласную или на согласные l, m, n, r, v, то к нему будет присоединяться суффикс -gi. После всех остальных согласных используется -ki.
Näide:
Kas keegi on seda filmi näinud? Кто-нибудь видел этот фильм?
Ma ei vihasta millegi peale. Я не сержусь ни на что.
Laua peal on mingid paberid. На столе какие-то бумаги.
Räägi mõne sõnaga, kuidas elad. Расскажи в двух словах, как живёшь.
Sõda jättis paljud kodutuks. После войны многие остались без дома.
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 17 })} source={source}/>)
