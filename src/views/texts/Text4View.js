import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
В рамках расширения кругозора, возьмем с вами тему «Который час?», то есть научимся задавать этот вопрос, ну и конечно отвечать на него. Тем более это идет в продолжение нашей темы числительных.

Который час? Mis kell on?
Дословно вопрос «Mis kell on?» переводится «Что час есть?». Именно поэтому и отвечать стоит с «Kell on ... » - «Час есть … ». Для начала предлагаю рассмотреть некоторые простые варианты ответа на данный вопрос:
Kell on üheksateist. Время девятнадцать часов. (семь часов вечера)
Kell on täpselt üksteist. Время точно одиннадцать.
Kell on varsti viis. Скоро пять часов.
Kell on umbes kuus. Время примерно шесть.
Kell on veerand kaks. Без четверти два.
Kell on pool kolm. Время полтретьего.
Kell on kolmveerand neli. Без четверти четыре. (3 четверти четвертого)

Если уже рассматривать все возможные варианты ответов сразу, то они представлены ниже в таблице. Здесь есть и просты фразы, с использование только данных о том, сколько сейчас часов и минут. И уже предложения по сложнее, ведь можно же сказать, сколько минут осталось до следующего часа, без стольки-то минут сейчас и тд.

<table>
    <tr>
        <td>8:00</td>
        <td>Kell on (täpselt) kaheksa.</td>
        <td>Время (ровно) восемь.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:05</td>
        <td>Kell on kaheksa ja viis minutit.</td>
        <td>Восемь часов и пять минут.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on viis minutit kaheksa läbi.</td>
        <td>Пять минут после восьми.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on viis minutit kaheksa peal.</td>
        <td>5 минут после (дословно - на) восьми.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:15</td>
        <td>Kell on veerand üheksa.</td>
        <td>Четверть девятого.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kaheksa viisteist.</td>
        <td>Время восемь пятнадцать.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on viisteist minutit kaheksa läbi.</td>
        <td>15 минут после восьми.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:25</td>
        <td>Kell on kaheksa kakskümmend viis.</td>
        <td>Время восемь двадцать пять.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kaheksa ja kakskümmend viis minutit.</td>
        <td>Восемь часов и двадцать пять минут.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kakskümmend viis minutit üheksa peal.</td>
        <td>Двадцать пять минут девятого.</td>
    </tr>
    <tr>
        <td/>
        <td>Viis minutit puudub poole üheksast.</td>
        <td>Пять минут осталось до половины девятого. (Пять минут не хватает до половины девятого)</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:30</td>
        <td>Kell on pool kaheksa.</td>
        <td>Время полвосьмого.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kaheksa kolmkümmend.</td>
        <td>Восемь тридцать.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:40</td>
        <td>Kell on kaheksa nelikümmend.</td>
        <td>Время восемь сорок.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kahekümne minuti pärast üheksa.</td>
        <td>Через двадцать минут будет девять.</td>
    </tr>
    <tr>
        <td/>
        <td>Kakskümmend minutit puudub üheksast.</td>
        <td>Без двадцати девять.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:45</td>
        <td>Kell on kolmveerand üheksa.</td>
        <td>Без четверти девять. (Три четверти девятого)</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on kaheksa nelikümmend viis.</td>
        <td>Восемь сорок пять.</td>
    </tr>
    <tr>
        <td colspan="3"/>
    </tr>
    <tr>
        <td>8:55</td>
        <td>Kell on kaheksa viiskümmend viis.</td>
        <td>Восемь пятьдесят пять.</td>
    </tr>
    <tr>
        <td/>
        <td>Kell on viie minuti pärast üheksa.</td>
        <td>Через пять минут будет девять.</td>
    </tr>
    <tr>
        <td/>
        <td>Viis minutit puudub üheksast.</td>
        <td>Без пяти девять. (Пять минут не хватает до девяти)</td>
    </tr>
</table>

Здесь правда стоит обратить особое внимание на использование предлогов и послелогов, с какими падежами они взаимодействуют: nimetav + läbi, omastav + peal, pärast + nimetav, puudub (глагол) + seestütlev.




Lugege tekst ja tõlkige:

Minu tavaline päev
Tavaliselt ma tõusen üles kell 7. Ma lähen vannituppa, pesen oma nägu ja hambaid. Mulle ei meeldi hommikul eriti süüa, aga ma joon kindlasti kohvi. Ma lähen kodust välja kell 8, sest minu tööpäev algab kell pool 9. Tavaliselt ma lähen jala, aga kui sajab vihma ma sõidan bussiga. 
Ma töötan suures firmas tarkvaraarendajana ning minu tööpäev kestab kella poole üheksast kella viieni. Meil asub suur söökla esimesel korrusel ja meie lõuna kestab pool tundi kella kaheteistkümnest üheni. 
Kui mul ei ole midagi kiiret tööl, ma võin lõpetada umbes veerand kuus. Pärast tööd ma käin mõnikord jõusaalis või kohtun sõpradega. Õhtusöögiks ma tellin tihti midagi koju, sest mulle üldse ei meeldi süüa teha. Ma armastan jaapani ja itaalia toitu. 
Ma lähen magama tavaliselt hilja, umbes kell kaks, sest öö on parem aeg programmeerimiseks. Mina armastan oma tööd!


Hambaid (hammas, hamba, hammast) – зубы, использовано в форме mitmuse osastav
Algama, alata, algab - начинаться
Tarkvaraarendaja, tarkvaraarendaja, tarkvaraarendajat  - разработчик программ, интернет разработчик
Kestma, kesta, kestab – длиться
Lõpetama, lõpetada, lõpetab - заканчиваться
Jõusaal, jõusaali, jõusaali - спортзал
Sõpradega (sõber, sõbra, sõpra) – с друзьями, использовано в форме mitmuse omastav плюс окончание –ga, c кем
Tellima, tellida, tellib - заказывать 
`

export default translate()(props => <MarkdownPage title={props.t('text', { number: 4 })} source={source}/>)
