import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Падежи места, часть II. Kohakäänded, osa II
### Города и страны. Linnad ja riigid

Для начала немного лексики. Linn, linna, linna — город. От этого образовалось и pealinn — главный город, столица. Страна, как государство — это riik, riigi, riiki. Но можно использовать и слово maa, maa, maad, хотя основной перевод для этого слова все-таки земля. Ну и напоследок, нельзя и о людях забывать  — rahvas, rahva, rahvast  — народ, и rahvus, rahvuse, rahvust — национальность.

<table>
    <tr>
        <th>RIIK</th>
        <th>PEALINN</th>
        <th>KEEL</th>
        <th>RAHVUS</th>
    </tr>
    <tr>
        <td>Eesti</td>
        <td>Tallinn</td>
        <td>Eesti keel</td>
        <td>Eestlane</td>
        <td>Eestlased</td>
    </tr>
    <tr>
        <td>Venemaa</td>
        <td>Moskva</td>
        <td>Vene keel</td>
        <td>Venelane</td>
        <td>Venelased</td>
    </tr>
    <tr>
        <td>Läti</td>
        <td>Riia</td>
        <td>Läti keel</td>
        <td>Lätlane</td>
        <td>Lätlased</td>
    </tr>
    <tr>
        <td>Leedu</td>
        <td>Vilnius</td>
        <td>Leedu keel</td>
        <td>Leedulane</td>
        <td>Leedulased</td>
    </tr>
    <tr>
        <td>Soome</td>
        <td>Helsingi</td>
        <td>Soome keel</td>
        <td>Soomlane</td>
        <td>Soomlased</td>
    </tr>
    <tr>
        <td>Rootsi</td>
        <td>Stockholm</td>
        <td>Rootsi keel</td>
        <td>Rootslane</td>
        <td>Rootslased</td>
    </tr>
    <tr>
        <td>Norra</td>
        <td>Oslo</td>
        <td>Norra keel</td>
        <td>Norralane</td>
        <td>Norralased</td>
    </tr>
    <tr>
        <td>Taani</td>
        <td>Kopenhaagen</td>
        <td>Taani keel</td>
        <td>Taanlane</td>
        <td>Taanlased</td>
    </tr>
    <tr>
        <td>Inglismaa</td>
        <td>London</td>
        <td>Inglise keel</td>
        <td>Inglane</td>
        <td>Inglased</td>
    </tr>
    <tr>
        <td>Prantsusmaa</td>
        <td>Pariis</td>
        <td>Prantsuse keel</td>
        <td>Prantslane</td>
        <td>Prantslased</td>
    </tr>
    <tr>
        <td>Hispaania</td>
        <td>Madrid</td>
        <td>Hispaania keel</td>
        <td>Hispaanlane</td>
        <td>Hispaanlased</td>
    </tr>
    <tr>
        <td>Portugal</td>
        <td>Lissabon</td>
        <td>Portugali keel</td>
        <td>Portugallane</td>
        <td>portugallased</td>
    </tr>
    <tr>
        <td>Itaalia</td>
        <td>Rooma</td>
        <td>Itaalia keel</td>
        <td>Itaallane</td>
        <td>Itaallased</td>
    </tr>
    <tr>
        <td>Saksamaa</td>
        <td>Berliin</td>
        <td>Saksa keel</td>
        <td>Sakslane</td>
        <td>Sakslased</td>
    </tr>
    <tr>
        <td>Kreeka</td>
        <td>Ateena</td>
        <td>Kreeka keel</td>
        <td>Kreeklane</td>
        <td>Kreeklased</td>
    </tr>
    <tr>
        <td>Poola</td>
        <td>Varssavi</td>
        <td>Poola keel</td>
        <td>Poolakas</td>
        <td>Poolakad</td>
    </tr>
    <tr>
        <td>Ukraina</td>
        <td>Kiiev</td>
        <td>Ukraina keel</td>
        <td>Ukrainlane</td>
        <td>Ukrainlased</td>
    </tr>
    <tr>
        <td>Valgevene</td>
        <td>Minsk</td>
        <td>Valgevene keel</td>
        <td>Valgevenelane</td>
        <td>Valgevenelased</td>
    </tr>
    <tr>
        <td>Türgi</td>
        <td>Ankara</td>
        <td>Türgi keel</td>
        <td>Türklane</td>
        <td>Türklased</td>
    </tr>
</table>

В таблице представлены некоторые страны Европы. На их примере мы с Вами рассмотрим, как города и страны будут изменяться по падежам места. Но для начала разберемся, как для них будет выглядеть второй падеж, ведь именно к нему мы должны добавлять окончания. Как мы помним, падеж omastav должен заканчиваться на гласную. Так вот, если имена собственные, и в том числе города, страны, в первом падеже, начальной форме, уже заканчиваются на гласную, то второй падеж (чаще всего) у них останется без изменений — Eesti, Eesti. А вот если на согласную, то изменения последуют. Должна добавиться гласная, вот только какая именно — a, u , i , e — это уже вопрос типов слов. Так как мы не набрали пока достаточного количества словарного запаса, говорить об этих типах нам рано, поэтому проще запомнить — к каким городам и странам, какие буквы будут добавляться. 
В падеже Omastav добавляется:

* -a: Tallinna.
* -e: Vilniuse.
* -i: Portugali, Stockholmi, Kopenhaageni, Londoni, Pariisi, Madridi, Lissaboni, Berliini, Kiievi, Minski.

Ну и перейдем наконец-таки к правилу о падежах места. Оно звучит так. Ко всем городам и странам стоит применять внутренние падежи, то есть использовать окончания -SSE, -S, -ST. Но если город или страна оканчивается на –maa(земля), -mäe(гора), -järve(озеро), -jõe(река), то следует использовать окончания внешних падежей, то есть –LE, -L, -LT.\t
Также внешние падежи используются со следующими именами собственными (список этот, конечно, не полный, предлагаю Вам для начала ознакомиться с наиболее распространенными исключениями):

* Некоторые города, и названия местностей Эстонии: Tapa, Türi, Loksa, Jõgeva, Otepää, Vormsi, Vilsandi, Aegna. К городам других стран эстонцы не придирались.
* 2 района Таллинна: Pirita, Nõmme

##### Näide

Janus on pärit Saksamaalt, aga elab Otepääl. Янус родом из Германии, но живет в Отепяя.
Buss sõidab Tapalt Sillamäele. Автобус едет из Тапа в Силламяе.
Tartust Jõgevale on umbes 50 kilomeetrit. От Тарту в Йыгева примерно 50 километров.
Pirital on palju ilusaid parke. В Пирита много красивых парков.

### Короткие формы падежа Sisseütlev
### Sisseütlev, lühivormid

Самое сложное и «вкусное» на десерт. Есть некоторые закономерности, как образуются короткие формы от падежа sisseütlev. Внизу в таблице представлен достаточно длинный список слов, у которых как раз имеется исключительная короткая форма вместо окончания –sse. Но, к сожалению, этот список никогда не будет полным. Язык очень быстро развивается. Но давайте начнем хотя бы с этих слов. Для начала прочитайте их все и переведите. Запомнить, конечно, сразу столько новых слов сложно, но так как все они часто встречаются в повседневной речи, запоминать мы их больше будем уже по ходу использования.
Мне остается только пожелать Вам: «Kivi kotti!». Дословно переводится как «камень в сумку», но если провести параллель с русским языком, мы можем перевести как: «Ни пуха, ни пера!»

<table>
    <tr>
        <th>Mis?<br>
            1 падеж
        </th>
        <th>Mille?<br>
            2 падеж
        </th>
        <th>Mida?<br>
            3 падеж
        </th>
        <th>Kuhu?<br>
            Исключения!
        </th>
        <th>Kus?</th>
        <th>Kust?</th>
    </tr>
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Короткая форма как osastav</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>Aed</td>
        <td>Aia</td>
        <td>aeda</td>
        <td>aeda</td>
        <td>aias</td>
        <td>aiast</td>
    </tr>
    <tr>
        <td>Ait</td>
        <td>aida</td>
        <td>aita</td>
        <td>aita</td>
        <td>aidas</td>
        <td>aidast</td>
    </tr>
    <tr>
        <td>Apteek</td>
        <td>apteegi</td>
        <td>apteeki</td>
        <td>apteeki</td>
        <td>apteegis</td>
        <td>apteegis</td>
    </tr>
    <tr>
        <td>Baar</td>
        <td>baari</td>
        <td>baari</td>
        <td>baari</td>
        <td>baaris</td>
        <td>baarist</td>
    </tr>
    <tr>
        <td>Buss</td>
        <td>bussi</td>
        <td>bussi</td>
        <td>bussi</td>
        <td>bussis</td>
        <td>bussist</td>
    </tr>
    <tr>
        <td>garaaž</td>
        <td>garaaži</td>
        <td>garaaži</td>
        <td>garaaži</td>
        <td>garaažis</td>
        <td>garaažist</td>
    </tr>
    <tr>
        <td>gripp</td>
        <td>gripi</td>
        <td>grippi</td>
        <td>grippi</td>
        <td>gripis</td>
        <td>gripist</td>
    </tr>
    <tr>
        <td>instituut</td>
        <td>instituudi</td>
        <td>instituuti</td>
        <td>instituuti</td>
        <td>instituudis</td>
        <td>instituudist</td>
    </tr>
    <tr>
        <td>jaam</td>
        <td>jaama</td>
        <td>jaama</td>
        <td>jaama</td>
        <td>jaamas</td>
        <td>jaamast</td>
    </tr>
    <tr>
        <td>jalg</td>
        <td>jala</td>
        <td>jalga</td>
        <td>jalga</td>
        <td>jalas</td>
        <td>jalast</td>
    </tr>
    <tr>
        <td>järv</td>
        <td>järve</td>
        <td>järve</td>
        <td>järve</td>
        <td>järves</td>
        <td>järvest</td>
    </tr>
    <tr>
        <td>kabinet</td>
        <td>kabineti</td>
        <td>kabinetti</td>
        <td>kabinetti</td>
        <td>kabinetis</td>
        <td>kabinetist</td>
    </tr>
    <tr>
        <td>kael</td>
        <td>kaela</td>
        <td>kaela</td>
        <td>kaela</td>
        <td>kaelas</td>
        <td>kaelast</td>
    </tr>
    <tr>
        <td>kann</td>
        <td>kannu</td>
        <td>kannu</td>
        <td>kannu</td>
        <td>kannus</td>
        <td>kannust</td>
    </tr>
    <tr>
        <td>kapp</td>
        <td>kapi</td>
        <td>kappi</td>
        <td>kappi</td>
        <td>kapis</td>
        <td>kapist</td>
    </tr>
    <tr>
        <td>karp</td>
        <td>karbi</td>
        <td>karpi</td>
        <td>karpi</td>
        <td>karbis</td>
        <td>karbist</td>
    </tr>
    <tr>
        <td>kast</td>
        <td>kasti</td>
        <td>kasti</td>
        <td>kasti</td>
        <td>kastis</td>
        <td>kastist</td>
    </tr>
    <tr>
        <td>kataloog</td>
        <td>kataloogi</td>
        <td>kataloogi</td>
        <td>kataloogi</td>
        <td>kataloogis</td>
        <td>kataloogist</td>
    </tr>
    <tr>
        <td>klaas</td>
        <td>klaasi</td>
        <td>klaasi</td>
        <td>klaasi</td>
        <td>klaasis</td>
        <td>klaasist</td>
    </tr>
    <tr>
        <td>klass</td>
        <td>klassi</td>
        <td>klassi</td>
        <td>klassi</td>
        <td>klassis</td>
        <td>klassist</td>
    </tr>
    <tr>
        <td>kool</td>
        <td>kooli</td>
        <td>kooli</td>
        <td>kooli</td>
        <td>koolis</td>
        <td>koolist</td>
    </tr>
    <tr>
        <td>korv</td>
        <td>korvi</td>
        <td>korvi</td>
        <td>korvi</td>
        <td>korvis</td>
        <td>korvist</td>
    </tr>
    <tr>
        <td>kott</td>
        <td>koti</td>
        <td>kotti</td>
        <td>kotti</td>
        <td>kotis</td>
        <td>kotist</td>
    </tr>
    <tr>
        <td>kõrv</td>
        <td>kõrva</td>
        <td>kõrva</td>
        <td>kõrva</td>
        <td>kõrvas</td>
        <td>kõrvast</td>
    </tr>
    <tr>
        <td>köök</td>
        <td>köögi</td>
        <td>kööki</td>
        <td>kööki</td>
        <td>köögis</td>
        <td>köögist</td>
    </tr>
    <tr>
        <td>laud</td>
        <td>laua</td>
        <td>lauda</td>
        <td>lauda</td>
        <td>lauas</td>
        <td>lauast</td>
    </tr>
    <tr>
        <td>linn</td>
        <td>linna</td>
        <td>linna</td>
        <td>linna</td>
        <td>linnas</td>
        <td>linnast</td>
    </tr>
    <tr>
        <td>lukk</td>
        <td>luku</td>
        <td>lukku</td>
        <td>lukku</td>
        <td>lukus</td>
        <td>lukust</td>
    </tr>
    <tr>
        <td>mets</td>
        <td>metsa</td>
        <td>metsa</td>
        <td>metsa</td>
        <td>metsas</td>
        <td>metsast</td>
    </tr>
    <tr>
        <td>muuseum</td>
        <td>muuseumi</td>
        <td>muuseumi</td>
        <td>muuseumi</td>
        <td>muuseumis</td>
        <td>muuseumist</td>
    </tr>
    <tr>
        <td>nurk</td>
        <td>nurga</td>
        <td>nurka</td>
        <td>nurka</td>
        <td>nurgas</td>
        <td>nurgast</td>
    </tr>
    <tr>
        <td>osakond</td>
        <td>osakonna</td>
        <td>osakonda</td>
        <td>osakonda</td>
        <td>osakonnas</td>
        <td>osakonnast</td>
    </tr>
    <tr>
        <td>paat</td>
        <td>paadi</td>
        <td>paati</td>
        <td>paati</td>
        <td>paadis</td>
        <td>paadist</td>
    </tr>
    <tr>
        <td>pank</td>
        <td>panga</td>
        <td>panka</td>
        <td>panka</td>
        <td>pangas</td>
        <td>pangast</td>
    </tr>
    <tr>
        <td>park</td>
        <td>pargi</td>
        <td>parki</td>
        <td>parki</td>
        <td>pargis</td>
        <td>pargist</td>
    </tr>
    <tr>
        <td>pood</td>
        <td>poe</td>
        <td>poodi</td>
        <td>poodi</td>
        <td>poes</td>
        <td>poest</td>
    </tr>
    <tr>
        <td>rand</td>
        <td>ranna</td>
        <td>randa</td>
        <td>randa</td>
        <td>rannas</td>
        <td>rannast</td>
    </tr>
    <tr>
        <td>restoran</td>
        <td>restorani</td>
        <td>restorani</td>
        <td>restorani</td>
        <td>restoranis</td>
        <td>restoranist</td>
    </tr>
    <tr>
        <td>saal</td>
        <td>saali</td>
        <td>saali</td>
        <td>saali</td>
        <td>saalis</td>
        <td>saalist</td>
    </tr>
    <tr>
        <td>saun</td>
        <td>sauna</td>
        <td>sauna</td>
        <td>sauna</td>
        <td>saunas</td>
        <td>saunast</td>
    </tr>
    <tr>
        <td>silm</td>
        <td>silma</td>
        <td>silma</td>
        <td>silma</td>
        <td>silmas</td>
        <td>silmast</td>
    </tr>
    <tr>
        <td>tass</td>
        <td>tassi</td>
        <td>tassi</td>
        <td>tassi</td>
        <td>tassis</td>
        <td>tassist</td>
    </tr>
    <tr>
        <td>tund</td>
        <td>tunni</td>
        <td>tundi</td>
        <td>tundi</td>
        <td>tunnis</td>
        <td>tunnist</td>
    </tr>
    <tr>
        <td>vaas</td>
        <td>vaasi</td>
        <td>vaasi</td>
        <td>vaasi</td>
        <td>vaasis</td>
        <td>vaasist</td>
    </tr>
    <tr>
        <td>vald</td>
        <td>valla</td>
        <td>valda</td>
        <td>valda</td>
        <td>vallas</td>
        <td>vallast</td>
    </tr>
    <tr>
        <td>vann</td>
        <td>vanni</td>
        <td>vanni</td>
        <td>vanni</td>
        <td>vannis</td>
        <td>vannist</td>
    </tr>
    <tr>
        <td>õhk</td>
        <td>õhu</td>
        <td>õhku</td>
        <td>õhku</td>
        <td>õhus</td>
        <td>õhust</td>
    </tr>
    <tr>
        <td>õu</td>
        <td>õue</td>
        <td>õue</td>
        <td>õue</td>
        <td>õues</td>
        <td>õuest</td>
    </tr>
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Изменение в короткой форме g > kk, b > pp, d > tt</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>häda</td>
        <td>häda</td>
        <td>häda</td>
        <td>hätta</td>
        <td>hädas</td>
        <td>hädast</td>
    </tr>
    <tr>
        <td>ida</td>
        <td>ida</td>
        <td>ida</td>
        <td>itta</td>
        <td>idas</td>
        <td>idast</td>
    </tr>
    <tr>
        <td>jõgi</td>
        <td>jõe</td>
        <td>jõge</td>
        <td>jõkke</td>
        <td>jões</td>
        <td>jõest</td>
    </tr>
    <tr>
        <td>käsi</td>
        <td>käe</td>
        <td>kätt</td>
        <td>kätte</td>
        <td>käes</td>
        <td>käest</td>
    </tr>
    <tr>
        <td>ladu</td>
        <td>lao</td>
        <td>ladu</td>
        <td>lattu</td>
        <td>laos</td>
        <td>laost</td>
    </tr>
    <tr>
        <td>lagi</td>
        <td>lae</td>
        <td>lage</td>
        <td>lakke</td>
        <td>laes</td>
        <td>laest</td>
    </tr>
    <tr>
        <td>mägi</td>
        <td>mäe</td>
        <td>mäge</td>
        <td>mäkke</td>
        <td>mäes</td>
        <td>mäest</td>
    </tr>
    <tr>
        <td>magu</td>
        <td>mao</td>
        <td>magu</td>
        <td>makku</td>
        <td>maos</td>
        <td>maost</td>
    </tr>
    <tr>
        <td>nägu</td>
        <td>näo</td>
        <td>nägu</td>
        <td>näkku</td>
        <td>näos</td>
        <td>näost</td>
    </tr>
    <tr>
        <td>raamatukogu</td>
        <td>raamatukogu</td>
        <td>raamatukogu</td>
        <td>raamatukokku</td>
        <td>raamatukogus</td>
        <td>raamatukogust</td>
    </tr>
    <tr>
        <td>rida</td>
        <td>rea</td>
        <td>rida</td>
        <td>ritta</td>
        <td>reas</td>
        <td>reast</td>
    </tr>
    <tr>
        <td>tuba</td>
        <td>toa</td>
        <td>tuba</td>
        <td>tuppa</td>
        <td>toas</td>
        <td>toast</td>
    </tr>
    <tr>
        <td>vesi</td>
        <td>vee</td>
        <td>vett</td>
        <td>vette</td>
        <td>vees</td>
        <td>veest</td>
    </tr>
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Изменение n > nn, l > ll, m > mm, r > rr, j > jj</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>elu</td>
        <td>elu</td>
        <td>elu</td>
        <td>ellu</td>
        <td>elus</td>
        <td>elust</td>
    </tr>
    <tr>
        <td>lumi</td>
        <td>lume</td>
        <td>lund</td>
        <td>lumme</td>
        <td>lumes</td>
        <td>lumest</td>
    </tr>
    <tr>
        <td>maja</td>
        <td>maja</td>
        <td>maja</td>
        <td>majja</td>
        <td>majas</td>
        <td>majast</td>
    </tr>
    <tr>
        <td>meri</td>
        <td>mere</td>
        <td>merd</td>
        <td>merre</td>
        <td>meres</td>
        <td>merest</td>
    </tr>
    <tr>
        <td>mälu</td>
        <td>mälu</td>
        <td>mälu</td>
        <td>mällu</td>
        <td>mälus</td>
        <td>mälust</td>
    </tr>
    <tr>
        <td>nina</td>
        <td>nina</td>
        <td>nina</td>
        <td>ninna</td>
        <td>ninas</td>
        <td>ninast</td>
    </tr>
    <tr>
        <td>oja</td>
        <td>oja</td>
        <td>oja</td>
        <td>ojja</td>
        <td>ojas</td>
        <td>ojast</td>
    </tr>
    <tr>
        <td>pere</td>
        <td>pere</td>
        <td>peret</td>
        <td>perre</td>
        <td>peres</td>
        <td>perest</td>
    </tr>
    <tr>
        <td>talu</td>
        <td>talu</td>
        <td>talu</td>
        <td>tallu</td>
        <td>talus</td>
        <td>talust</td>
    </tr>
    <tr>
        <td>toru</td>
        <td>toru</td>
        <td>toru</td>
        <td>torru</td>
        <td>torus</td>
        <td>torust</td>
    </tr>
    <tr>
        <td>tuli</td>
        <td>tule</td>
        <td>tuld</td>
        <td>tulle</td>
        <td>tules</td>
        <td>tulest</td>
    </tr>
    <tr>
        <td>tüli</td>
        <td>tüli</td>
        <td>tüli</td>
        <td>tülli</td>
        <td>tülis</td>
        <td>tülist</td>
    </tr>
    <tr>
        <td>uni</td>
        <td>une</td>
        <td>und</td>
        <td>unne</td>
        <td>unes</td>
        <td>unest</td>
    </tr>
    <tr>
        <td>veri</td>
        <td>vere</td>
        <td>verd</td>
        <td>verre</td>
        <td>veres</td>
        <td>verest</td>
    </tr>
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Изменение в короткой форме t > de</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>keel</td>
        <td>keele</td>
        <td>keelt</td>
        <td>keelde</td>
        <td>keeles</td>
        <td>keelest</td>
    </tr>
    <tr>
        <td>lääs</td>
        <td>lääne</td>
        <td>läänt</td>
        <td>läände</td>
        <td>läänes</td>
        <td>läänest</td>
    </tr>
    <tr>
        <td>saar</td>
        <td>saare</td>
        <td>saart</td>
        <td>saarde</td>
        <td>saares</td>
        <td>saarest</td>
    </tr>
    <tr>
        <td>meel</td>
        <td>meele</td>
        <td>meelt</td>
        <td>meelde</td>
        <td>meeles</td>
        <td>meelest</td>
    </tr>
    <tr>
        <td>suur</td>
        <td>suure</td>
        <td>suurt</td>
        <td>suurde</td>
        <td>suures</td>
        <td>suurest</td>
    </tr>
    <tr>
        <td>uus</td>
        <td>uue</td>
        <td>uut</td>
        <td>uude</td>
        <td>uues</td>
        <td>uuest
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Короткая форма как omastav</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>mõis</td>
        <td>mõisa</td>
        <td>mõisat</td>
        <td>mõisa</td>
        <td>mõisas</td>
        <td>mõisast</td>
    </tr>
    <tr>
        <td>põrgu</td>
        <td>põrgu</td>
        <td>põrgut</td>
        <td>põrgu</td>
        <td>põrgus</td>
        <td>põrgust</td>
    </tr>
    <tr>
        <td>taevas</td>
        <td>taeva</td>
        <td>taevast</td>
        <td>taeva</td>
        <td>taevas</td>
        <td>taevast</td>
    </tr>
    <tr>
        <td>tasku</td>
        <td>tasku</td>
        <td>taskut</td>
        <td>tasku</td>
        <td>taskus</td>
        <td>taskust</td>
    </tr>
    <tr>
        <td/>
        <td/>
        <td/>
        <td><b>Образование коротких форм при помощи суффиксов ju, ha, he, hu</b></td>
        <td/>
        <td/>
    </tr>
    <tr>
        <td>kodu</td>
        <td>kodu</td>
        <td>kodu</td>
        <td>koju</td>
        <td>kodus</td>
        <td>kodust</td>
    </tr>
    <tr>
        <td>maa</td>
        <td>maa</td>
        <td>maad</td>
        <td>maha</td>
        <td>maas</td>
        <td>maast</td>
    </tr>
    <tr>
        <td>pea</td>
        <td>pea</td>
        <td>pead</td>
        <td>pähe</td>
        <td>peas</td>
        <td>peast</td>
    </tr>
    <tr>
        <td>soo</td>
        <td>soo</td>
        <td>sood</td>
        <td>sohu</td>
        <td>soos</td>
        <td>soost</td>
    </tr>
    <tr>
        <td>suu</td>
        <td>suu</td>
        <td>suud</td>
        <td>suhu</td>
        <td>suus</td>
        <td>suust</td>
    </tr>
</table>

Конечно, не стоит забывать и про имена собственные. Города и страны мы с Вами брали отдельно, так выделим же их и здесь. Для многих городов Эстонии и для стран мира уже существуют короткие формы падежа sisseütlev.

<table>
    <tr>
        <th>Mis?</th>
        <th>Kuhu?</th>
    </tr>
    <tr>
        <td> Haapsalu</td>
        <td>Haapsallu</td>
    </tr>
    <tr>
        <td>Narva</td>
        <td>Narva</td>
    </tr>
    <tr>
        <td>Jõhvi</td>
        <td>Jõhvi</td>
    </tr>
    <tr>
        <td>Võru</td>
        <td>Võrru</td>
    </tr>
    <tr>
        <td>Rakvere</td>
        <td>Rakverre</td>
    </tr>
    <tr>
        <td>Kuressaare</td>
        <td>Kuressaarde</td>
    </tr>
    <tr>
        <td>Valga</td>
        <td>Valka</td>
    </tr>
    <tr>
        <td>Tartu</td>
        <td>Tartu(sse)</td>
    </tr>
    <tr>
        <td>Tallinn</td>
        <td>Tallinna(sse)</td>
    </tr>
    <tr>
        <td>Pärnu</td>
        <td>Pärnu(sse)</td>
    </tr>
    <tr>
        <td>Paide</td>
        <td>Paide(sse)</td>
    </tr>
    <tr>
        <td>Soome</td>
        <td>Soome(sse)</td>
    </tr>
    <tr>
        <td>Rootsi</td>
        <td>Rootsi(sse)</td>
    </tr>
    <tr>
        <td>Läti</td>
        <td>Lätisse või Lätti</td>
    </tr>
    <tr>
        <td>Leedu</td>
        <td>Leedusse või Leetu</td>
    </tr>
    <tr>
        <td>Peterburi</td>
        <td>Peterburi</td>
    </tr>
    <tr>
        <td>Riia</td>
        <td>Riiga</td>
    </tr>
    <tr>
        <td>Kadriorg</td>
        <td>Kadriorgu</td>
    </tr>
</table>
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 7 })} source={source}/>)