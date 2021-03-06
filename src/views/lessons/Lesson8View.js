import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Inimene õpib, kuni elab. Как говорят по-русски, век живи — век учись. Честно, познать эстонский язык в рамках быстрого интенсивного курса практически невозможно, ведь совершенству нет предела. Хотя мы с Вами прошли уже большой путь — семь уроков, но впереди нас ждет еще много интересного. Продолжаем грызть гранит эстонской грамматики.
Суммируем информацию, касающуюся падежей. Мы с Вами отдельно брали сначала 3 падежа эстонского языка: nimetav, omastav, osastav. Назвали их основными падежами, и условились, что все склоняемые слова мы будем учить сразу в трех формах именно этих падежей. Далее мы взяли группу «падежей места» — это целых 6 штук сразу. Рассмотрели их случаи использования, разделили основную функцию, т.е. обозначение местоположения, от второстепенных. Что же дальше. Простая математика: от 14 падежей отнять 3 и 6, получилось 5. Давайте не будем откладывать в долгий ящик, и возьмем оставшиеся 5 падежей прямо сейчас.

### Падеж Saav

Основные вопросы, на которые отвечает этот падеж: Kelleks? Milleks? Missuguseks? — Кем? Чем? Для чего? Каким? В русском языке ему чаще всего соответствует творительный падеж. Признаком падежа является окончание -ks. С помощью падежа saav можно выразить:
1. Переход из одного состояния или качества в другое. Используется с такими глаголами как: muutuma — меняться, saama — становиться, osutuma — оказаться, minema — идти, jääma — оставаться и т.д.
Vesi muutub jääKS. Вода становится льдом.
Mina tahan saada õpetajaKS. Я хочу стать учителем.
Talvel läheb vara pimedaKS. «Зимой идет рано на темную», Зимой рано темнеет.
2. Врėменное состояние, должность. Используется с глаголом olema — быть:
Mina olen täna õhtul emaKS. Сегодня вечером я — мама.
3. Срок, к которому действие завершится. Mis ajaks? К какому сроку?
Tehke see harjutus homseKS! Сделайте это упражнение к завтрашнему дню!
4. Продолжительность действия. Kui kauaks? Дословно  переведем: На как долго? Другими словам: На какой срок?
Tema sõidab kuuKS puhkusele. Он едет на месяц в отпуск.
5. Цель. Milleks? Для чего?
SalatiKS on vaja õli. Для салата нужно масло.
6. Часто используется при перечислении и в поздравлениях.
EsiteKS, see on minu töö. Ja teiseKS, mulle see meeldib. Во-первых, это моя работа. И во-вторых, мне это нравится.
Palju õnne sünnipäevaKS! Поздравляю с днем рождения!

### Падеж Rajav

Вопросы — Kelleni? Milleni? — До кого? До чего? Признаком падежа является окончание -ni.  Падеж rajav выражает:
1. Пространственную границу, предел:
MinuNI jõuab muusika. До меня доходит музыка. 
Me jalutame pargiNI. Мы прогуливаемся до парка.
2. Временной предел:
Kauplus on avatud esmaspäevast reedeNI. Магазин открыт с понедельника по пятницу.

### Падеж Olev

Данный падеж отвечает в основном на вопросы Kellena? Millena? Missugusena? Kuidas? — Кем? Чем? Каким? или Как? Окончание для  падежа olev — это окончание -na. С помощью него можно выразить:
1. Выполнение функций, признак предмета или лица:
Isa töötab arstinNA. Папа работает врачом.
Ema tuli koju väsinuNA. Мама пришла домой уставшей.
2. Сравнение. В этом случае вопрос «kellena?» мы переведем «как кто?» , то есть укажем в каком качестве субъект выполняет действие:
Ta on inimeseNA väga hea. Как человек он очень хороший.
Kooli direktoriNA peab tema ka eksamil istuma. Как директор школы он тоже должен сидеть на экзамене.

Как вы могли заметить, в эстонском языке на вопросы «Кем?», «Чем?» отвечают сразу 2 падежа. Но разница между ними существенная. Смотрите, если человек, предмет уже кем-то является, работает, или даже выглядит как-то, кем-то кажется, то в этом случае используется падеж OLEV, окончание -NA.  А если он, оно только кем-то, чем-то становится, или только еще хочет стать, тогда используется SAAV с окончанием -KS.

### Падеж Ilmaütlev

Отвечает на вопросы: Kelleta? Milleta? — без кого? без чего? Оканчивается всегда на -ta.
С этим падежом все просто, он обозначает отсутствие кого-нибудь или чего-нибудь. 
Näide:
Ilma minuTA poleks sa hakkama saanud. Без меня ты бы не справился.
Tüdruk läheb raamatuTA kooli. Девочка идет в школу без книги.
Lapsed söövad ilma isuTA. Дети едят без аппетита.
NB! Предлог «ilma» можно часто увидеть вместе с этим падежом. Переведем его как «без». Он не отменяет окончание -TA,  которое стоит использовать в любом случае, данный предлог лишь усиливает его значение.

### Падеж Kaasaütlev

Отвечает на вопросы: Kellega? Millega? — с кем? с чем? или просто кем? чем? Данный падеж всегда оканчивается на -ga, и имеет в эстонском языке следующие основные значения:
1. Обозначает совместное действие и сопровождение. На русским язык мы переводим творительным падежом с предлогом  «с»:
Sel õhtul mina olen sõpradeGA. Этим вечером я буду с друзьями.
Suure rõõmuGA ma tulen sinna.  С большим удовольствием я приду туда.
Mina elan koos emaGA. Я живу вместе с мамой.
NB! Предлог «koos» усиливает значение падежа kaasaütlev, и переводится как «вместе».
2. Обозначает орудие или средство действия (чем? при помощи чего?): 
Та töötab labidaGA. Он работает лопатой. 
Mina kirjutan pliiatsiGA. Я пишу ручкой.
3. Обозначает средство передвижения. На русский язык переведем творительным падежом с предлогом «на»:
Mina sõidan bussiGA. Я еду на автобусе.
Meie läheme puhkusele rongiGA. Мы поедем в отпуск на поезде.
4. Обозначает признак какого-либо существа, предмета, явления. Переводится творительным падежом с предлогом «с».
See oli pika kaelaGA lind. Это была птица с длинной шеей. 
Naisel on lukuGA saapad. У дамы сапоги на молнии (замке).
5. Обозначает промежуток времени, необходимый для совершения какого-либо действия. Обычно в предложениях такого рода вопросом служит «mis ajaga?» — «за какое время?». На русский язык можно перевести также родительным падежом с предлогом «в течение»:
Mina lõpetan töö poole tunniGA. Я закончу  работу за полчаса.
NädalaGA saab see portree valmis. В течение недели этот портрет будет закончен.

### Падежи NINATAGA

Напомню, падежей в эстонском языке всего 14 штук, и на падеже kaasaütlev они у нас закончились. Правило, описанное ниже, касается не каких-то новых падежей, а лишь разбирает грамматические особенности некоторых из 14ти уже известных нам. 
В примерах к пяти последним падежам в основном были предложения, где использовалось только одно слово, я имею в виду не словосочетание, и не перечисление. С одним словом как говорится меньше проблем. А вот действие этих же падежей уже в словосочетаниях или при перечислении стоит рассмотреть отдельно. 
Падежи, рассматриваемые в этом уроке, уже не первые для нас. Мы уже изучили первые три главных падежа, и «падежами места». Как Вы помните, рассматривая все эти падежи, для нас был важен всегда вопрос (кто, что, где, куда, откуда итд.), на который тот или иной падеж отвечает, и окончание, как его признак. Если в предложении использовалось словосочетание, то в нем все слова, к которым задавался один и тот же падежный вопрос, согласовывались по числу и падежу. 
Näide:
SelleL meheL on hea naine. (У кого?) -> У этого мужчины (есть кто?) ->хорошая жена.
Mina räägin oma huvitavaST tööST. Я расскажу (о чем?) -> о своей интересной работе.
Meie sõidame Kohtla-JärveLE, TapaLE ja JägevaLE. Мы едем (куда?-> в Кохтла-Ярве, в Тапа и в Йыгева.
Точно также будет себя вести и падеж Saav. Окончание -ks будет добавляться к каждому слову:
Näide:
Tema saab varsti heaKS arstiKS. Он скоро станет хорошим врачом. 
Lugege raamat läbi järgmiseKS esmaspäevaKS. Прочитайте книгу к следующему понедельнику.
Иначе обстоит дело с последними четырьмя падежами из нашего общего списка. В случае с ними, падежное окончание будет добавляться только к последнему слову, независимо от того, это существительное с описывающими его прилагательными, или же это перечисление. Все слова стоящие перед последним словом остаются во втором падеже.
Näide:
Ootame koos kuni järgmise filmiNI. Подождем вместе до следующего фильма.
Ta on tuntud hea näitlejaNA. Он известен как хороший актер.
Mina joon tavaliselt kohvi ilma koore ja suhkruTA. Я пью обычно кофе без сливок и сахара.
Meie sõidame takso, bussi ja laevaGA. Мы поедем на такси, автобусе и на корабле.
Правило, регламентирующее указанное выше, называется правилом падежей NINATAGA (по способу соединения окончаний — ni+na+ta+ga). Их еще называют падежи «за носом», так как «nina taga» именно так и переводится.
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 8 })} source={source}/>)
