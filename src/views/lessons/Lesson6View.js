import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Inimene õpib, kuni elab. Как говорят по-русски, век живи — век учись. Конечно, познать эстонский язык за 10 уроков невозможно, ведь 
совершенству нет предела. Мы с вами прошли уже половину пути — пять уроков, но впереди нас ждет еще много интересного. Продолжаем 
грызть гранит эстонской грамматики.

Суммируем информацию, касающуюся падежей. Мы с вами отдельно брали сначала 3 падежа эстонского языка:
 nimetav, omastav, osastav. Назвали их основными падежами, и условились, что все склоняемые слова мы будем учить сразу в трех формах именно этих
  падежей. Далее мы взяли группу падежей места — это целых 6 штук сразу. Рассмотрели их случаи использования, разделили основную функцию, т.е. 
  обозначение местоположения, от второстепенных. Что же дальше. Простая математика: от 14 падежей отнять 3 и 6, получилось 5. Давайте не будем 
  откладывать в долгий ящик, и возьмем оставшиеся 5 падежей прямо сейчас.
  
### Падеж Saav

Основные вопросы, на которые отвечает этот падеж: Kelleks? Milleks? Missuguseks? — Кем? Чем? Для чего? Каким? В русском языке ему чаще всего
 соответствует творительный падеж. Признаком падежа является окончание -ks. С помощью падежа saav можно выразить:
 
1. __Переход из одного состояния или качества в другое.__ Используется с такими глаголами как: muutuma — меняться, saama — становиться, osutuma — 
оказаться, minema — идти, jääma — оставаться и т.д.
Vesi muutub jää_ks_. Вода становится льдом.
Mina tahan saada õpetaja_ks_. Я хочу стать учителем.
Talvel läheb vara pimeda_ks_. «Зимой идет рано на темную», Зимой рано темнеет.
1. __Вр_е_менное состояние, должность.__ Используется с глаголом olema — быть:
Mina olen täna õhtul ema_ks_. Сегодня вечером я — мама.
1. __Срок, к которому действие завершится.__ Mis ajaks? К какому сроку?
Tehke see harjutus homse_ks_! Сделайте это упражнение к завтрашнему дню!
1. __Продолжительность действия.__ Kui kauaks? Дословно  переведем: На как долго? Другими словам: На какой срок?
Tema sõidab kuu_ks_ puhkusele. Он едет на месяц в отпуск.
1. __Цель.__ Milleks? Для чего?
Salati_ks_ on vaja õli. Для салата нужно масло.
1. __Часто используется при перечислении и в поздравлениях.__
Esite_ks_, see on minu töö. Ja teise_ks_, mulle see meeldib. Во-первых, это моя работа. И во-вторых, мне это нравится.
Palju õnne sünnipäeva_ks_! Поздравляю с днем рождения!

### Падеж Rajav

Вопросы — Kelleni? Milleni? — До кого? До чего? Признаком падежа является окончание -ni.  Падеж rajav выражает:

1. Пространственную границу, предел:
Minu_ni_ jõuab muusika. До меня доходит музыка. 
Me jalutame pargi_ni_. Мы прогуливаемся до парка.
1. Временной предел:
Kauplus on avatud esmaspäevast reede_ni_. Магазин открыт с понедельника по пятницу.

### Падеж Olev

Данный падеж отвечает в основном на вопросы Kellena? Millena? Missugusena? Kuidas? — Кем? Чем? Каким? или Как? Окончание для  падежа olev — 
это окончание -na. С помощью него можно выразить:

1. Выполнение функций, признак предмета или лица:
Isa töötab arstin_na_. Папа работает врачом.
Ema tuli koju väsinu_na_. Мама пришла домой уставшей.
1. Сравнение. В этом случае вопрос «kellena?» мы переведем «как кто?» , то есть укажем в каком качестве субъект выполняет действие:
Ta on inimese_na_ väga hea. Как человек он очень хороший.
Kooli direktori_na_ peab tema ka eksamil istuma. Как директор школы он тоже должен сидеть на экзамене.

Как вы могли заметить, в эстонском языке на вопросы «Кем?», «Чем?» отвечают сразу 2 падежа. Но разница между ними существенная. Смотрите, 
если человек, предмет уже кем-то является, работает, или даже выглядит как-то, кем-то кажется, то в этом случае используется падеж OLEV, 
окончание -na.  А если он, оно только кем-то, чем-то становится, или только еще хочет стать, тогда используется SAAV с окончанием -ks.

### Падеж Ilmaütlev.

Отвечает на вопросы: Kelleta? Milleta? — без кого? без чего? Оканчивается всегда на -ta.

С этим падежом все просто, он обозначает отсутствие кого-нибудь или чего-нибудь.

Näide:

* Ilma minu_ta_ poleks sa hakkama saanud. Без меня ты бы не справился.
* Tüdruk läheb raamatu_ta_ kooli. Девочка идет в школу без книги.
* Lapsed söövad ilma isu_ta_. Дети едят без аппетита.

NB! Предлог «ilma» можно часто увидеть вместе с этим падежом. Переведем его как «без». Он не отменяет окончание -ta,  которое стоит использовать
 в любом случае, данный предлог лишь усиливает его значение.
 
### Падеж Kaasaütlev

Отвечает на вопросы: Kellega? Millega? — с кем? с чем? или просто кем? чем? Данный падеж всегда оканчивается на -ga, и имеет в эстонском языке
 следующие основные значения:

1. Обозначает совместное действие и сопровождение. На русским язык мы переводим творительным падежом с предлогом  «с»:
Sel õhtul mina olen sõprade_ga_. Этим вечером я буду с друзьями.
Suure rõõmu_ga_ ma tulen sinna.  С большим удовольствием я приду туда.
Mina elan koos ema_ga_. Я живу вместе с мамой.
NB! Предлог «koos» усиливает значение падежа kaasaütlev, и переводится как «вместе».
1. Обозначает орудие или средство действия (чем? при помощи чего?): 
Та töötab labida_ga_. Он работает лопатой. 
Mina kirjutan pliiatsi_ga_. Я пишу ручкой.
1. Обозначает средство передвижения. На русский язык переведем творительным падежом с предлогом «на»:
Mina sõidan bussi_ga_. Я еду на автобусе.
Meie läheme puhkusele rongi_ga_. Мы поедем в отпуск на поезде.
1. Обозначает признак какого-либо существа, предмета, явления. Переводится творительным падежом с предлогом «с».
See oli pika kaela_ga_ lind. Это была птица с длинной шеей. 
Naisel on luku_ga_ saapad. У дамы сапоги на молнии (замке).
1. Обозначает промежуток времени, необходимый для совершения какого-либо действия. Обычно в предложениях такого рода вопросом служит 
«mis ajaga?» — «за какое время?». На русский язык можно перевести также родительным падежом с предлогом «в течение»:
Mina lõpetan töö poole tunni_ga_. Я закончу  работу за полчаса.
Nädala_ga_ saab see portree valmis. В течение недели этот портрет будет закончен.

### Падежи NINATAGA

Напомню, падежей в эстонском языке всего 14 штук, и на падеже kaasaütlev они у нас закончились. Правило, описанное ниже, касается не каких-то
 новых падежей, а лишь разбирает грамматические особенности некоторых из 14-ти уже известных нам. 
В примерах к пяти последним падежам в основном были предложения, где использовалось только одно слово, я имею в виду не словосочетание,
 и не перечисление. С одним словом как говорится меньше проблем. А вот действие этих же падежей уже в словосочетаниях или при перечислении 
 стоит рассмотреть отдельно. 
Падежи, рассматриваемые в этом уроке, уже не первые для нас. Мы уже изучили первые три главных падежа, и «падежами места». Как вы помните, 
рассматривая все эти падежи, для нас был важен всегда вопрос (кто, что, где, куда, откуда и т. д.), на который тот или иной падеж отвечает,
 и окончание, как его признак. Если в предложении использовалось словосочетание, то в нем все слова, к которым задавался один и тот же падежный
  вопрос, согласовывались по числу и падежу. 

Näide:

* Selle_l_ mehe_l_ on hea naine. (У кого?) &rightarrow; У этого мужчины (есть кто?) &rightarrow; хорошая жена.
* Mina räägin oma huvitava_st_ töö_st_. Я расскажу (о чем?) &rightarrow; о своей интересной работе.
* Meie sõidame Kohtla-Järve_le_, Tapa_le_ ja Jägeva_le_. Мы едем (куда? &rightarrow; в Кохтла-Ярве, в Тапа и в Йыгева.

Точно также будет себя вести и падеж Saav. Окончание -ks будет добавляться к каждому слову:

Näide:

* Tema saab varsti hea_ks_ arsti_ks_. Он скоро станет хорошим врачом. 
* Lugege raamat läbi järgmise_ks_ esmaspäeva_ks_. Прочитайте книгу к следующему понедельнику.

Иначе обстоит дело с последними четырьмя падежами из нашего общего списка. В случае с ними, падежное окончание будет добавляться только к последнему
 слову, независимо от того, это существительное с описывающими его прилагательными, или же это перечисление. Все слова стоящие перед последним 
 словом остаются во втором падеже.

Näide:

* Ootame koos kuni järgmise filmi_ni_. Подождем вместе до следующего фильма.
* Ta on tuntud hea näitleja_na_. Он известен как хороший актер.
* Mina joon tavaliselt kohvi ilma koore ja suhkru_ta_. Я пью обычно кофе без сливок и сахара.
* Meie sõidame takso, bussi ja laeva_ga_. Мы поедем на такси, автобусе и на корабле.

Правило, регламентирующее указанное выше, называется правилом падежей NINATAGA (по способу соединения окончаний — ni+na+ta+ga). Их еще называют 
падежи «за носом», так как «nina taga» именно так и переводится.

Уж очень хочется на этом месте написать что-нибудь в духе компьютерных игр:
ПОЗДРАВЛЯЮ ВАС! УРОВЕНЬ ПРОЙДЕН!
Падежи эстонского языка мы рассмотрели. Многие, кто впервые слышит о том факте, что в языке аж 14 падежей, сразу пугается. Но стоит их рассмотреть 
поближе и понять их логику, страх пропадает. А ведь определенная логика здесь точно есть. Учим первые три падежа, все остальные, начиная с
 четвертого, образуются от второго при помощи добавления окончания. То есть стоит задать к слову правильный вопрос, и проблема с выбором окончания,
  то бишь падежа, решится сама собой.
Загвоздка здесь заключается вот в чем: 14 падежей эстонского языка не покрывают то несметное множество предлогов, что есть в русском языке! 
Возьмем, к примеру, родительный падеж в русском языке. Он отвечает на вопросы кого? чего? И уже к этим вопросам мы может добавлять предлоги, но
 при этом падеж остается все тот же родительный — от кого? около чего? у кого? без чего? и так далее…
До этого мы рассматривали падежи, то есть затронули только некоторую часть предлогов. Далее же нам предстоит выяснить, что же делать с остальными
 предлогами, так сказать не вошедшими в рамки 14 падежей эстонского языка.
 
### Предлоги и послелоги / Eessõnad ja tagasõnad

Также в учебниках по грамматике можно встретить понятие «kaasõnad». Это общее названия и для предлогов, и для послелогов, что переводится 
дословно «слова идущие вместе с чем-то». Ну а теперь по порядку.

Система русского языка знает только предлоги, которые показывают взаимоотношение двух предметов и находятся всегда перед управляемым словом: 
книга находится на столе; стул стоит у стены и т.д.

В эстонском языке выразить предлоги можно тремя способами. Какая-то часть из них уходит в окончания, то есть используются уже известные нам падежи,
 некоторые остаются также предлогами, ну а третий способ, совсем отличный от русского языка, использование послелогов. Предлогов очень мало, в 
 большинстве случаев встречаются послелоги, имеющие те же значения, что и предлоги в русском, но стоящие всегда после управляемого слова.

Задач перед учеником, разбирающим данную тему, стоит обычно две: во-первых нужно запомнить, будет ли каждая эта «частичка» стоять перед словом 
(в качестве предлога) или после слова (послелогом), и, во-вторых, с каким падежом будет использована. Чтобы хоть как-то систематизировать столь 
объемную информацию, предлагаю разбить все предлоги и послелоги по темам. В рамках этого шестого урока, мы рассмотрим большую группу предлогов и 
послелогов, которые используются для указания местоположения предметов и лиц. То есть расширим границы использования падежей места.

### Предлоги и послелоги, для указания местоположения

#### Послелоги, требующие от слова-фразы второго падежа (omastav)

Первая подгруппа, которую мы рассмотрим в рамках этого значения, это будут послелоги, требующие от слова-фразы второго падежа (omastav).
 Это самая обширная группа послелогов, выражающая пространственные отношения. Им характерно подобное падежам места изменение по направленности
  действия — где, куда, откуда.
  
<table>
<tr>
    <th colspan="2">
        Kuhu?<br>
        Положи куда?
    </th>
    <th colspan="2">
        Kus? <br>Находится где?
    </th>
    <th colspan="2">
        Kust? <br>Возьми откуда?
    </th>
</tr>
<tr>
    <td>
        <b>peale</b><br>
        Pane laua peale
    </td>
    <td>
        <b>на</b><br>
        Положи на стол
    </td>
    <td>
        <b>Peal</b><br>
        Raamat on laua peal
    </td>
    <td>
        <b>на</b><br>
        Книга на столе
    </td>
    <td>
        <b>pealt</b><br>
        Võta kass tolli pealt
    </td>
    <td>
        <b>с, со</b><br>
        Возьми кошку со стула
    </td>
</tr>
<tr>
    <td>
        <b>alla</b><br>
        Koer jookseb kapi alla
    </td>
    <td>
        <b>под</b><br>
        Собака бежит под шкаф
    </td>
    <td>
        <b>all</b><br>
        Koer seisab kapi all
    </td>
    <td>
        <b>под</b><br>
        Собака сидит под шкафом
    </td>
    <td>
        <b>alt</b><br>
        Võtke karp kapi alt välja
    </td>
    <td>
        <b>из-под</b><br>
        Достаньте
        коробку из-под шкафа
    </td>
</tr>
  <tr>
    <td>
        <b>sisse</b><br>
        Paneme tassi sisse vett
    </td>
    <td><b>в</b><br>
        Налей в кружку воды
    </td>
    <td><b>sees</b><br>
        Vesi on tassi sees
    </td>
    <td><b>в</b><br>
        Вода в кружке
    </td>
    <td><b>seest</b><br>
        Joon kohvi tassi seest
    </td>
    <td><b>из</b><br>
        Пью кофе из кружки
    </td>
</tr>
<tr>
    <td>
        <b>ette</b><br>
        Auto sõidab maja ette
    </td>
    <td><b>перед, к</b><br>
        Машина подъезжает к дому (перед ним)
    </td>
    <td><b>ees</b><br>
        Auto on maja ees
    </td>
    <td><b>перед, впереди</b><br>
        Машина перед домом
    </td>
    <td><b>eest</b><br>
        Auto sõidab maja eest ära
    </td>
    <td><b>от, спереди</b><br>
        Машина отъезжает от дома
    </td>
</tr>
<tr>
    <td>
        <b>taha</b><br>
        Pane karp kapi taha
    </td>
    <td><b>за</b><br>
        Положи коробку за шкаф
    </td>
    <td><b>taga</b><br>
        Selle laua taga istub meie pere
    </td>
    <td><b>за, сзади</b><br>
        за этим столом сидит наша семья
    </td>
    <td><b>tagant</b><br>
        Päike tõuseb metsa tagant
    </td>
    <td><b>из-за</b><br>
        Солнце встает из-за леса
    </td>
</tr>
<tr>
    <td>
        <b>kohale</b><br>
        Pane teler pildi kohale
    </td>
    <td><b>над</b><br>
        Повесь телевизор на место картины
    </td>
    <td><b>kohal</b><br>
        Teler ripub pildi kohal
    </td>
    <td><b>над</b><br>
        Телевизор висит на месте картины
    </td>
    <td><b>kohalt</b><br>
        Võta teler pildi kohalt ära
    </td>
    <td><b>над</b><br>
        Сними телевизор с места для картины
    </td>
</tr>
<tr>
    <td>
        <b>juurde</b><br>
        Mine ukse juurde
    </td>
    <td><b>к</b><br>
        Иди к двери
    </td>
    <td><b>juures</b><br>
        Seisa ukse juures
    </td>
    <td><b>у, около, при</b><br>
        стой около двери
    </td>
    <td><b>juurest</b><br>
        Tule ukse juurest ära
    </td>
    <td><b>от</b><br>
        Отойди от двери<b>
    </td>
</tr>
<tr>
    <td>
        <b>kõrvale</b><br>
        Kas võin tulla sinu kõrvale?
    </td>
    <td>
        <b>рядом, к</b><br>
        Я могу подойти к тебе?
    </td>
    <td><b>kõrval</b><br>
        Sinu kõrval on mugav istuda.
    </td>
    <td><b>рядом (сбоку)</b><br>
        Рядом с тобой удобно сидеть
    </td>
    <td><b>kõrvalt</b><br>
        Ma ei taha sinu kõrvalt lahkuda
    </td>
    <td><b>от</b><br>
        Я не хочу от тебя уходить
    </td>
</tr>
<tr>
    <td>
        <b>lähedale</b><br>
        Ära tule liiga lähedale
    </td>
    <td><b>неподалеку</b><br>
        Не подходи слишком близко
    </td>
    <td><b>lähedal</b><br>
        Pood asub meie maja lähedal
    </td>
    <td><b>вблизи</b><br>
        Магазин расположен вблизи нашего дома
    </td>
    <td><b>lähedalt</b><br>
        Leidsin maja järve lähedalt
        (leidma — kust?)
    </td>
    <td><b>Недалеко (от)</b><br>
        Нашел дом неподалеку от озера
    </td>
</tr>
<tr>
    <td>
        <b>ligidale</b><br>
        Sõidame Pärnu ligidale
    </td>
    <td><b>неподалеку</b><br>
        Мы поедем в место, что неподалеку от Пярну
    </td>
    <td><b>ligidal</b><br>
        Oleme Narva ligidal
    </td>
    <td><b>вблизи</b><br>
        Мы вблизи Нарвы
    </td>
    <td><b>ligidalt</b><br>
        Minu vanaema on pärit Tartu ligidalt
    </td>
    <td><b>Недалеко (от)</b><br>
        Моя бабушка родом с мест, что недалеко от Тарту
    </td>
</tr>
<tr>
    <td>
        <b>äärde</b><br>
        Sõidame hommikul mere äärde
    </td>
    <td><b>к</b><br>
        Поедем утром к морю
    </td>
    <td><b>ääres</b><br>
        Oleme terve päev mere ääres
    </td>
    <td><b>у, подле</b><br>
        Мы целый день на море
    </td>
    <td><b>äärest</b><br>
        Tuleme mere äärest koju kell üheksa
    </td>
    <td><b>от</b><br>
        Вернемся домой с моря в 9 часов
    </td>
</tr>
<tr>
    <td>
        <b>serva</b><br>
        Jalutan täna linna serva
    </td>
    <td><b>на край</b><br>
        Пойду гулять на окраину города
    </td>
    <td><b>servas</b><br>
        Ostan endale maja linna servas
    </td>
    <td><b>на краю, на окраине</b><br>
        Покупаю себе дом на краю города
    </td>
    <td><b>servast</b><br>
        Küla servast ei ole kaugel mereni
    </td>
    <td><b>от края, от окраины</b><br>
        От края деревни не далеко до моря
    </td>
</tr>
<tr>
    <td>
        <b>poole</b><br>
        Läheme linna poole
    </td>
    <td><b>на (половину,</b><br>
        сторону)
        Пойдем в сторону города
    </td>
    <td><b>pool</b><br>
        Sõbra pool on lõbus ollag
    </td>
    <td><b>на, у</b><br>
        У друга весело быть
    </td>
    <td><b>poolt</b><br>
        Mere poolt puhub külm tuul
    </td>
    <td><b>с</b><br>
        С моря дует холодный ветер
    </td>
</tr>
<tr>
    <td>
        <b>vastu
            Istuge palun minu vastu</td>
    <td><b>напротив</b><br>
        Сядьте, пожалуйста, напротив меня
    </td>
    <td><b>vastas</b><br>
        Kohvik on teatri vastas
    </td>
    <td><b>напротив</b><br>
        Кафе напротив театра
    </td>
    <td><b>vastast</b><br>
        Tuleme teatri vastast kohvikust
    </td>
    <td><b>напротив</b><br>
        Возвращаемся с кафе, что напротив театра
    </td>
</tr>
<tr>
    <td>
        <b>vahele</b><br>
        Paneme kasti laua ja seina vehele
    </td>
    <td><b>между</b><br>
        Положим ящик между столом и стеной
    </td>
    <td><b>vahel</b><br>
        Kadri istub minu ja sõbranna vahel
    </td>
    <td><b>между</b><br>
        Кадри сидит между мной и подругой
    </td>
    <td><b>vahelt</b><br>
        Mina loen ridade vahel
    </td>
    <td><b>между</b><br>
        Я читаю между строк
    </td>
</tr>
<tr>
    <td>
        <b>keskele</b><br>
        Paneme diivani toa keskele
    </td>
    <td><b>на середину</b><br>
        поставим диван на середину комнаты
    </td>
    <td><b>keskel</b><br>
        Diivan on toa keskel
    </td>
    <td><b>на середине</b><br>
        диван посреди комнаты
    </td>
    <td><b>keskelt</b><br>
        Tõsta diivan toa keskelt
    </td>
    <td><b>с середины</b><br>
        переставь диван с середины комнаты
    </td>
</tr>
<tr>
    <td>
        <b>järele</b><br>
        Saadan poisi poodi leiva järele
    </td>
    <td><b>за</b><br>
        Отправляю мальчика в магазин за хлебом
    </td>
    <td><b>järel</b><br>
        Nemad lähevad üksteise järel välja
    </td>
    <td><b>позади (следом)</b><br>
        Они выходят один за другим
    </td>
    <td><b>järelt</b><br>
        Pean enda järelt koristama
    </td>
    <td><b>за</b><br>
        Я должен за собой убрать
    </td>
</tr>
<tr>
    <td>
        <b>külge</b> (где külg — бок, сторона)<br>
        Panen mänguasja telefoni külge
    </td>
    <td><b>на</b><br>
        Повешу игрушку на телефон
    </td>
    <td><b>küljes</b><br>
        Saabaste küljes on lumi
    </td>
    <td><b>на (сбоку)</b><br>
        На сапогах снег
    </td>
    <td>
        <b>küljest</b><br>
        Liim ei tule käte küljest ära
    </td>
    <td><b>с</b><br>
        Клей не отходит с рук
    </td>
</tr>
<tr>
    <td>
        <b>otsa</b><br>
        Kass ronib puu otsa
    </td>
    <td><b>на, наверх</b><br>
        Кошка ползет на вершину дерева
    </td>
    <td><b>otsas</b><br>
        Kass istub puu otsas
    </td>
    <td><b>на, наверху</b><br>
        Кошка сидит на вершине дерева
    </td>
    <td><b>otsast</b><br>
        Kass tuleb puu otsast alla
    </td>
    <td><b>с, сверху</b><br>
        Кошка спускается с дерева
    </td>
</tr>
<tr>
    <td>
        <b>sekka</b><br>
        Tule ka sina meie sekka
    </td>
    <td><b>в число, к</b><br>
        Приходи ты тоже к нам
    </td>
    <td><b>seas</b><br>
        Meie seas on palju noori inimesi
    </td>
    <td><b>в числе, среди</b><br>
        Среди нас много молодых людей
    </td>
    <td><b>Seast</b><br>
        Tema lahkub meie seast
    </td>
    <td><b>из числа</b><br>
        Он отбывает от нас
    </td>
</tr>
<tr>
    <td>
        <b>hulka</b><br>
        Pane porgandid teiste juurviljade hulka
    </td>
    <td><b>в число</b><br>
        положи морковь к другим овощам (чтобы она была среди них)
    </td>
    <td><b>hulgas</b><br>
        Meie hulgas on ainult tüdrukud
    </td>
    <td><b>в числе, среди</b><br>
        среди нас только девочки
    </td>
    <td><b>hulgast</b><br>
        Otsin teda tuttavate hulgast
    </td>
    <td><b>из числа</b><br>
        Ищу его среди друзей
    </td>
</tr>
<tr>
    <td>
        <b>kätte</b><br>
        Annan raha panga töötaja kätte
    </td>
    <td><b>у, на</b><br>
        отдаю деньги работнику банка
    </td>
    <td><b>käes</b><br>
        Raha sulab minu käes
    </td>
    <td><b>у (указывает на владельца), на</b><br>
        Деньги таят у него (в руках)
    </td>
    <td><b>käest</b><br>
        Mina saan raha abikaasa käest
    </td>
    <td><b>от, у</b><br>
        Я получаю деньги от супруга
    </td>
</tr>
</table>

<br>

Хотя в выше указанной рамке вы и можете посмотреть значение этих послелогов на конкретных примерах, некоторые из них все же стоит разобрать еще 
отдельно.

Kõrvale, kõrval, kõrvalt — эти послелоги образовались от слова «kõrv» — ухо. От этого и выходит их значение: предмет (лицо) будет расположен 
точно так же как и уши относительно нашей головы, то есть сбоку и с любой стороны. Kass on diivani kõrval. Кошка ни перед, ни за диваном, а 
именно сбоку от него.

Äärde, ääres, äärest. Äär с эстонского переводится как край, кромка. Используется со словами, где будет прослеживаться четкая грань чего-либо. 
Чаще всего используется с водными объектами, где можно точно отследить, где заканчивается берег, и начинается вода. Mina puhkan mere ääres. Я
 отдыхаю около моря.

Полными синонимами между собой являются следующие послелоги: Ligidal=Lähedal, а также Seas=Hulgas. И, конечно, их другие падежные формы ведут 
себя точно также.

Далеко не все предлоги-послелоги, указывающие на местоположение, образуют подобные изменяющиеся по падежам тройки.

#### Предлоги, требующие падежа omastav

* läbi — через, сквозь
* üle — через 
* ümber — вокруг.

Ümber может стоять как перед словом, так и после. И в том, и в другом случае используется со вторым падежом.

Näide:

* Minge üle tänava, siis keerake paremale. Идите через улицу, потом повернете направо.
* Jalutame läbi pargi. Прогуливаемся через парк
* Koer jookseb ümber laua (laua ümber). Собака бегает вокруг стола.

#### Предлоги, требующие падежа osastav (третьего)

* keset, kesk — посреди, среди, в центре
* mööda — по 
* piki — вдоль, по
* vastu — против, об 
* peale — после (чаще временное отношение, но возможно и территориальное)

Näide:

* Taldrik on keset lauda. Тарелка находится на середине стола.
* Kesk tuba seisab pisikene laud. Посреди комнаты стоит маленький стол.
* Mööda teed sõidab jälgratas. По дороге едет велосипед.

NB! Mööda в значении «по, вдоль» как предлогом, так и послелогом. Mööda teed=teed mööda.

* Paat sõidab piki jõge. Лодка двигается по реки (вдоль реки).
* Linnuke lendab vastu tuult. Птичка летит против ветра.
* Üks vana proua seisab järjekorras peale mind. Одна пожилая дама стоит в очереди после меня.

#### Послелоги, требующие падежа omastav

* kaudu — через 
* vahetsi — между

Näide:

* Minge metsa kaudu! Идите через лес!
* Ta liikub ettevaatlikult autode vahetsi.  Он двигается осторожно между машин.

#### Предлог, требующий падежа rajav

* kuni — до (имеет как пространственное, так и временное значение)

Näide:

* Sõber viib mind kuni majani. Друг ведет меня до самого дома.

В этом примере предлог kuni можно и опустить, а вот окончание -ni в слове дом опускать ни в коем случае нельзя!

### Синонимичные выражения

В некоторых случаях можно параллельно использовать как предлог/послелог, так и  падежное окончание.

Näide:

* Paneme raamatu lauale. = Paneme raamatu laua peale.  Положим книгу на стол.
* Võta toolilt! = Võta tooli pealt! Возьми со стула!
* Küsi emalt! = küsi ema käest! Спроси у мамы!

Но если взять даже последний пример, послелог «käest» имеет только значение от кого-то, чего-то. А вот окончание -lt более абстрактно, и поэтому,
 как мы знаем, зона его использования намного шире. Mina saan tihti kirja sõbra_lt_. Я часто получаю письмо от друга. Ma olen rahvuse_lt_ venelane. 
 Я по национальности русский.
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 6 })} source={source}/>)
