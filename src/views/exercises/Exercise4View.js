import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Так как урок 4 был посвящен несрабатыванию словарного запаса, то продолжаем тренировать грамматику глагола. Очередная партия новых глаголов для разминки. Помните, спрягаем их в настоящем и прошедшего времени, плюс повелительное наклонение единственного и множественного числа. Ну и конечно не забываем про отрицание этих всех форм. В этот раз я не буду выдавать вам все это в ответах, выпишу лишь только некоторые формы подсказки. Ну и небольшое замечание, некоторые формы этих глаголов будут коряво звучать при переводе. Не обращайте на это внимание, нам главное отработать схему, что от чего и как образуется!
Я где-то читала об одном исследовании,  в котором говорилось, что в обычной повседневной речи мы используем всего порядка 50-60 глаголов. Мы можно сказать уже на полпути к этому количеству, так что ловите очередную десятку распространенных глаголов от меня: 

<table>
    <tr>
        <td>-MA инфинитив</td>
        <td>-DA инфинитив</td>
        <td>3 лицо ед.ч.</td>
        <td>Перевод</td>
        <td>Подсказки некоторых форм</td>
    </tr>
    <tr>
        <td>Tulema</td>
        <td>Tulla</td>
        <td>Tuleb</td>
        <td>Приходить, возвращаться</td>
        <td>Tulge, tulnud</td>
    </tr>
    <tr>
        <td>Pärit olema</td>
        <td>Pärit olla</td>
        <td>On pärit</td>
        <td>Быть родом</td>
        <td>Olge, olnud</td>
    </tr>
    <tr>
        <td>Sündima</td>
        <td>Sündida</td>
        <td>Sünnib</td>
        <td>Рождаться</td>
        <td>Sündige, sündinud</td>
    </tr>
    <tr>
        <td>Puhkama</td>
        <td>Puhata</td>
        <td>Puhkab</td>
        <td>Отдыхать</td>
        <td>Puhake, puhanud</td>
    </tr>
    <tr>
        <td>Magama</td>
        <td>Magada</td>
        <td>Magab</td>
        <td>Спать</td>
        <td>Magage, maganud</td>
    </tr>
    <tr>
        <td>Mängima</td>
        <td>Mängida</td>
        <td>Mängib</td>
        <td>Играть</td>
        <td>Mängige, mänginud</td>
    </tr>
    <tr>
        <td>Lugema</td>
        <td>Lugeda</td>
        <td>Loeb</td>
        <td>Читать</td>
        <td>Lugege, lugenud</td>
    </tr>
    <tr>
        <td>Kirjutama</td>
        <td>Kirjutada</td>
        <td>Kirjutab</td>
        <td>Писать</td>
        <td>Kirjutage, kirjutanud</td>
    </tr>
    <tr>
        <td>Oskama</td>
        <td>Osata</td>
        <td>Oskab</td>
        <td>Знать, уметь</td>
        <td>Osake, osanud</td>
    </tr>
    <tr>
        <td>Teadma</td>
        <td>Teada</td>
        <td>Teab</td>
        <td>Знать (владеть информацией)</td>
        <td>Teadke, teadnud</td>
    </tr>
</table>

NB! Возьмите на заметку
Проверить себя и узнать формы, указанные в подсказках, Вы сможете и самостоятельно. В первую очередь Вам может помочь уже знакомый электронный словарь eki.ee. Возьмем для примера глагол Tulema, и при вводе формы -MA инфинитива мы получим следующее:

Рис. 1
Также на просторах интернета есть очень полезный сайт:
http://www.filosoft.ee/index.html 
Здесь представлено много интересных программ, но нам пока на данном этапе будут интересны 2 из них. Первая называется синтезатор эстонского языка. Выглядит программа следующим образом:


Рис. 2

В графе «Sõna» (слово) вводите начальную форму слова, и выбираете, что хотите про него узнать. Первая колонка посвящена склоняемым словам (существительные, прилагательные, числительные, местоимения), а вот вторая как раз глаголам (мы уже знаем, что глагол по-эстонски «verb», но у него есть и второе название «tegusõna»). Можно выбрать лицо (isik) кто выполняет действие, обязательно нужно указать время (aeg) настоящее или прошедшее. Также обязательным полем для заполнения является наклонение глагола (kõneviis): изъявительное, повелительное, условное или косвенное. Последняя графа позволяет выбрать дополнительные формы. Среди них нам уже знакомы -DA инфинитив и форма причастия -NUD.  Поставив галочки во всех интересующих Вас местах и нажав на кнопку «süntees», получится результат как на картинке справа.
Вторая программа, которая заслуживает нашего внимания – это лемматизатор. Эта программа работает по обратному принципу. Допустим, вы увидели в тексте незнакомое слово, не знаете ни перевода, ни части речи. Вводите его в графу «sõna», нажимаете кнопку «lemmad», и получаете начальную форму для этого слова, которую уже сможете легко посмотреть в любом словаре.


Рис. 3


Рис. 4

### Harjutus 2

Исправьте ошибки. В каждом предложении по одной ошибки.
Saake tuttavaks. See oleb minu hea kolleeg Tiina. Tema on ka õppetaja. Ma õpid eesti keelt kaks kuud. Mina pärit olen Eestist. Ma olen Eestis sünninud. Tüdruk loete praegu ilusat raamatut. Lugege Sina ka! Ma arvab, et see raamat on hea. Poiss ei armastab matemaatikat. 

### Harjutus 3

Раскройте скобки, поставив глагол в правильную форму.
Kus sa .......... (elama)? 2. Ma .......... (elama) Tartus. 3. Kas sinu sõber .......... (elama) ka Tartus, või ta .......... (elama) ja .......... (töötama) Tallinnas. 4. Millal sa .......... (tulema)? 5. Õpilased ei .......... (õppima) praegu tunnis. 6. Õpilased ........... (mängima), sest õpetaja .......... (magama). 7. Õhtul .......... (lugema) tavaliselt naine raamatut. 8. Kas te .......... (sõitma) muuseumisse homme? 9. Nad .......... (arvama), et me .......... (võtma) takso. 10. Sinu sõber ei .......... (teadma), et Sa nii hästi .......... (oskama) inglise keelt.
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 4 })} source={source}/>)
