import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Предлагаю Вам, заняться вплотную глаголами и образованием различных форм. Ниже в таблице представлены 10 совершенно новых глаголов и 7 тех, которые уже встречались в уроке. Ваша задача проспрягать каждый из них в настоящем времени и прошедшем, поставить их в повелительное наклонение, ну и конечно не забывая также про отрицательные формы. Я Вам облегчила задачу, указала для каждого глагола все 3 основные формы.

<table>
    <tr>
        <td>-MA инфинитив</td>
        <td>-DA инфинитив</td>
        <td>3 лицо ед.ч.</td>
        <td>Перевод</td>
    </tr>
    <tr>
        <td>Elama</td>
        <td>elada</td>
        <td>Elab</td>
        <td>жить</td>
    </tr>
    <tr>
        <td>Töötama</td>
        <td>töötada</td>
        <td>Töötab</td>
        <td>работать</td>
    </tr>
    <tr>
        <td>Õpetama</td>
        <td>õpetada</td>
        <td>õpetab</td>
        <td>учить, преподавать</td>
    </tr>
    <tr>
        <td>Õppima</td>
        <td>õppida</td>
        <td>õpib</td>
        <td>учиться</td>
    </tr>
    <tr>
        <td>Arvama</td>
        <td>arvata</td>
        <td>arvab</td>
        <td>думать, считать</td>
    </tr>
    <tr>
        <td>vabandama</td>
        <td>vabandada</td>
        <td>vabandab</td>
        <td>извиняться</td>
    </tr>
    <tr>
        <td>Võtma</td>
        <td>võtta</td>
        <td>võtab</td>
        <td>брать</td>
    </tr>
    <tr>
        <td>Andma</td>
        <td>anda</td>
        <td>annab</td>
        <td>давать</td>
    </tr>
    <tr>
        <td>Paluma</td>
        <td>paluda</td>
        <td>palub</td>
        <td>просить</td>
    </tr>
    <tr>
        <td>Tänama</td>
        <td>tänada</td>
        <td>tänab</td>
        <td>благодарить</td>
    </tr>
</table>

<table>
    <tr>
        <td>olema</td>
        <td>olla</td>
        <td>on</td>
        <td>быть</td>
    </tr>
    <tr>
        <td>armastama</td>
        <td>armastada</td>
        <td>armastab</td>
        <td>любить</td>
    </tr>
    <tr>
        <td>rääkima</td>
        <td>rääkida</td>
        <td>räägib</td>
        <td>говорит</td>
    </tr>
    <tr>
        <td>sõitma</td>
        <td>sõita</td>
        <td>sõidab</td>
        <td>ехать</td>
    </tr>
    <tr>
        <td>aru saama</td>
        <td>aru saada</td>
        <td>saab aru</td>
        <td>понимать</td>
    </tr>
    <tr>
        <td>tuttavaks saama</td>
        <td>tuttavaks saada</td>
        <td>saab tuttavaks</td>
        <td>знакомиться</td>
    </tr>
    <tr>
        <td>hiljaks jääma</td>
        <td>hiljaks jääda</td>
        <td>jääb hiljaks</td>
        <td>опаздывать</td>
    </tr>
</table>

### Harjutus 2

Раскройте скобки, вставив глагол в правильную форму. NB! Внимательно переводите все слова в предложении, каждое из них может повлиять на смысл.
1. Praegu me .......... (elama) Tallinnas (в Таллинне – где?), aga kunagi ammu me .......... (elama) ka Pärnus (в Пярну). 2. Tema .......... (aru saama) juba eesti keelest, aga ise ei .......... (rääkima). 3. Ma .......... (arvama), et ma .......... (sõidan) Londonisse. London .......... (olema) ilus linn. 4. Eesti õpilased .......... (õppima) koolis inglise, saksa ja vene keelt. 5. ........... (vabandama) palun! Me ei ........... (aru saama). 6. Koolis ma olen .......... (õppima) inglise keelt. 7. Kõik on lihtne: mina .......... (andma), sina .......... (võtma). 8. Nad ju .......... (rääkima), et nad ei .......... (sõitma) Tallinnasse (в Таллинн – куда?), nad .......... (töötama). 9. Teie .......... (rääkima), et te ei .......... (armastama) mind. 10. ........ (tuttavaks saama), see .......... (olema) minu hea sõber Toomas. 11. Tema .......... (õppima) ja .......... (töötama) palju, temal ei .......... (olema) aega armastada. 12. Me .......... (võtma) takso ja ........ (sõitma) klubisse.13. Maris, ära .......... (rääkima) nii palju telefoniga. Isa .......... (töötama). 14. Mina .......... (tänama) Liinat, et ta .......... (õpetama) mulle eesti keelt. 15. Jaan .......... (armastama) öelda:  minu abikaasa .......... (olema) väga kaunis!

Образование настоящего и прошедшего времен, а также повелительного наклонения, для глаголов из задания 1. Внимательно проверьте себя по этой таблице!!!

<p>
<table>
    <tr>
        <td>3 основные
            формы
        </td>
        <td>Настоящее время утверждение</td>
        <td>Настоящее время отрицание</td>
        <td>Прошедшее время утверждение</td>
        <td>Прошедшее время отрицание</td>
        <td>Повелелит. Наклонение ед.ч.</td>
        <td>Повелит. Наклонение мн.ч.</td>
    </tr>
    <tr>
        <td>Olema
            Olla
            On
        </td>
        <td>Mina olen
            Sina oled
            Tema on
            Meie oleme
            Teie olete
            Nemad on
        </td>
        <td>Mina ei ole
            Sina ei ole
            Tema ei ole
            Meie ei ole
            Teie ei ole
            Nemad ei ole
        </td>
        <td>Mina olen olnud
            Sina oled olnud
            Tema on olnud
            Meie oleme olnud
            Teie olete olnud
            Nemad on olnud
        </td>
        <td>Mina ei ole olnud
            Sina ei ole olnud
            Tema ei ole olnud
            Meie ei ole olnud
            Teie ei ole olnud
            Nemad ei ole olnud
        </td>
        <td> Ole!
            Ära ole!
        </td>
        <td>Olge!
            Ärge olge!
        </td>
    </tr>
    <tr>
        <td>Armastama
            Armastada
            Armastab
        </td>
        <td>Ma armastan
            Sa armastad
            Ta armastab
            Me armastame
            Te armastate
            Nad armastavad
        </td>
        <td>Ma ei armasta
            Sa ei armasta
            Ta ei armasta
            Me ei armasta
            Te ei armasta
            Nad ei armasta
        </td>
        <td>Ma olen armastanud
            Sa oled armastanud
            Ta on armastanud
            Me oleme armastanud
            Te olete armastanud
            Nad on armastanud
        </td>
        <td>Ma ei ole armastanud
            Sa ei ole armastanud
            Ta ei ole armastanud
            Me ei ole armastanud
            Te ei ole armastanud
            Nad ei ole armastanud
        </td>
        <td>Armasta!
            Ära armasta!
        </td>
        <td>Armastage!
            Ärge armastage!
        </td>
    </tr>
    <tr>
        <td>Rääkima
            Rääkida
            Räägib
        </td>
        <td>Ma räägin
            Sa räägid
            Ta räägib
            Me räägime
            Te räägite
            Nad räägivad
        </td>
        <td>Ma ei räägi
            Sa ei räägi
            Ta ei räägi
            Me ei räägi
            Te ei räägi
            Nad ei räägi
        </td>
        <td>Ma olen rääkinud
            Sa oled rääkinud
            Ta on rääkinud
            Me oleme rääkinud
            Te olete rääkinud
            Nad on rääkinud
        </td>
        <td>Ma ei ole rääkinud
            Sa ei ole rääkinud
            Ta ei ole rääkinud
            Me ei ole rääkinud
            Te ei ole rääkinud
            Nad ei ole rääkinud
        </td>
        <td>Räägi!
            Ära räägi!
        </td>
        <td>Rääkige!
            Ärge rääkige!
        </td>
    </tr>
    <tr>
        <td>Sõitma
            Sõita
            Sõidab
        </td>
        <td>Ma sõidan
            Sa sõidad
            Ta sõidab
            Me sõidame
            Te sõidate
            Nad sõidavad
        </td>
        <td>Ma ei sõida
            Sa ei sõida
            Ta ei sõida
            Me ei sõida
            Te ei sõida
            Nad ei sõida
        </td>
        <td>Ma olen sõitnud
            Sa oled sõitnud
            Ta on sõitnud
            Me oleme sõitnud
            Te olete sõitnud
            Nad on sõitnud
        </td>
        <td>Ma ei ole sõitnud
            Sa ei ole sõitnud
            Ta ei ole sõitnud
            Me ei ole sõitnud
            Te ei ole sõitnud
            Nad ei ole sõitnud
        </td>
        <td>Sõida!
            Ära sõida!
        </td>
        <td>Sõitke!
            Ärge sõitke!
        </td>
    </tr>
    <tr>
        <td>Aru saama
            Aru saada
            Saab aru
        </td>
        <td>Ma saan aru
            Sa saad aru
            Ta saab aru
            Me saame aru
            Te saate aru
            Nad saavad aru
        </td>
        <td>Ma ei saa aru
            Sa ei saa aru
            Ta ei saa aru
            Me ei saa aru
            Te ei saa aru
            Nad ei saa aru
        </td>
        <td>Ma olen aru saanud
            Sa oled aru saanud
            Ta on aru saanud
            Me oleme aru saanud
            Te olete aru saanud
            Nad on aru saanud
        </td>
        <td>Ma ei ole aru saanud
            Sa ei ole aru saanud
            Ta ei ole aru saanud
            Me ei ole aru saanud
            Te ei ole aru saanud
            Nad ei ole aru saanud
        </td>
        <td>Saa aru!
            Ära saa aru!
        </td>
        <td>Saage aru!
            Ärge saage aru!
        </td>
    </tr>
    <tr>
        <td>Tuttavaks saama
            Tuttavaks saada
            Saab tuttuavaks
        </td>
        <td>Ma saan tuttavaks
            Sa saad tuttavaks
            Ta saab tuttavaks
            Me same tuttavaks
            Te saate tuttavaks
            Nad saavad tuttavaks
        </td>
        <td>Ma ei saa tuttavaks
            Sa ei saa tuttavaks
            Ta ei saa tuttavaks
            Me ei saa tuttavaks
            Te ei saa tuttavaks
            Nad ei saa tuttavaks
        </td>
        <td>Ma olen tuttavaks saanud
            Sa oled tuttavaks saanud
            Ta on tuttavaks saanud
            Me oleme tuttavaks saanud
            Te olete tuttavaks saanud
            Nad on tuttavaks saanud
        </td>
        <td>Ma ei ole tuttavaks saanud
            Sa ei ole tuttavaks saanud
            Ta ei ole tuttavaks saanud
            Me ei ole tuttavaks saanud
            Te ei ole tuttavaks saanud
            Nad ei ole tuttavaks saanud
        </td>
        <td>Saa tuttavaks!
            Ära saa tuttavaks!
        </td>
        <td>Saage tuttavaks!
            Ärge saage tuttavaks!
        </td>
    </tr>
    <tr>
        <td>Hiljaks jääma
            Hiljaks jääda
            Jääb hiljaks
        </td>
        <td>Ma jään hiljaks
            Sa jääd hiljaks
            Ta jääb hiljaks
            Me jääme hiljaks
            Te jääte hiljaks
            Nad jäävad hiljaks
        </td>
        <td>Ma ei jää hiljaks
            Sa ei jää hiljaks
            Ta ei jää hiljaks
            Me ei jää hiljaks
            Te ei jää hiljaks
            Nad ei jää hiljaks
        </td>
        <td>Ma olen hiljaks jäänud
            Sa oled hiljaks jäänud
            Ta on hiljaks jäänud
            Me oleme hiljaks jäänud
            Te olete hiljaks jäänud
            Nad on hiljaks jäänud
        </td>
        <td>Ma ei ole hiljaks jäänud
            Sa ei ole hiljaks jäänud
            Ta ei ole hiljaks jäänud
            Me ei ole hiljaks jäänud
            Te ei ole hiljaks jäänud
            Nad ei ole hiljaks jäänud
        </td>
        <td>Jää hiljaks!
            Ära jää hiljks!
        </td>
        <td>Jääge hiljaks!
            Ärge jääge hiljaks!
        </td>
    </tr>
    <tr>
        <td>Elama
            Elada
            Elab
        </td>
        <td>Ma elan
            Sa elad
            Ta elab
            Me elame
            Te elate
            Nad elavad
        </td>
        <td>Ma ei ela
            Sa ei ela
            Ta ei ela
            Me ei ela
            Te ei ela
            Nad ei ela
        </td>
        <td>Ma olen elanud
            Sa oled elanud
            Ta on elanud
            Me oleme elanud
            Te olete elanud
            Nad on elanud
        </td>
        <td>Ma ei ole elanud
            Sa ei ole elanud
            Ta ei ole elanud
            Me ei ole elanud
            Te ei ole elanud
            Nad ei ole elanud
        </td>
        <td>Ela!
            Ära ela!
        </td>
        <td>Elage!
            Ärge elage!
        </td>
    </tr>
    <tr>
        <td>Töötama
            Töötada
            Töötab
        </td>
        <td>Ma töötan
            Sa töötad
            Ta töötab
            Me töötame
            Te töötate
            Nad töötavad
        </td>
        <td>Ma ei tööta
            Sa ei tööta
            Ta ei tööta
            Me ei tööta
            Te ei tööta
            Nad ei tööta
        </td>
        <td>Ma olen töötanud
            Sa oled töötanud
            Ta on töötanud
            Me oleme töötanud
            Te olete töötanud
            Nad on töötanud
        </td>
        <td>Ma ei ole töötanud
            Sa ei ole töötanud
            Ta ei ole töötanud
            Me ei ole töötanud
            Te ei ole töötanud
            Nad ei ole töötanud
        </td>
        <td>Tööta!
            Ära tööta!
        </td>
        <td>Töötage!
            Ärge töötage!
        </td>
    </tr>
    <tr>
        <td>Õpetama
            Õpetada
            Õpetab
        </td>
        <td>Ma õpetan
            Sa õpetad
            Ta õpetab
            Me õpetame
            Te õpetate
            Nad õpetavad
        </td>
        <td>Ma ei õpeta
            Sa ei õpeta
            Ta ei õpeta
            Me ei õpeta
            Te ei õpeta
            Nad ei õpeta
        </td>
        <td>Ma olen õpetanud
            Sa oled õpetanud
            Ta on õpetanud
            Me oleme õpetanud
            Te olete õpetanud
            Nad on õpetanud
        </td>
        <td>Ma ei ole õpetanud
            Sa ei ole õpetanud
            Ta ei ole õpetanud
            Me ei ole õpetanud
            Te ei ole õpetanud
            Nad ei ole õpetanud
        </td>
        <td>Õpeta!
            Ära õpeta!
        </td>
        <td> Õpetage!
            Ärge õpetage!
        </td>
    </tr>
    <tr>
        <td>Õppima
            Õppida
            Õpib
        </td>
        <td>Ma õpin
            Sa õpid
            Ta õpib
            Me õpime
            Te õpite
            Nad õpivad
        </td>
        <td>Ma ei õpi
            Sa ei õpi
            Ta ei õpi
            Me ei õpi
            Te ei õpi
            Nad ei õpi
        </td>
        <td>Ma olen õppinud
            Sa oled õppinud
            Ta on õppinud
            Me oleme õppinud
            Te olete õppinud
            Nad on õppinud
        </td>
        <td>Ma ei ole õppinud
            Sa ei ole õppinud
            Ta ei ole õppinud
            Me ei ole õppinud
            Te ei ole õppinud
            Nad ei ole õppinud
        </td>
        <td>Õpi!
            Ära õpi!
        </td>
        <td> Õppige!
            Ärge õppige!
        </td>
    </tr>
    <tr>
        <td>Arvama
            Arvata
            Arvab
        </td>
        <td>Ma arvan
            Sa arvad
            Ta arvab
            Me arvame
            Te arvate
            Nad arvavad
        </td>
        <td>Ma ei arva
            Sa ei arva
            Ta ei arva
            Me ei arva
            Te ei arva
            Nad ei arva
        </td>
        <td>Ma olen arvanud
            Sa oled arvanud
            Ta on arvanud
            Me oleme arvanud
            Te olete arvanud
            Nad on arvanud
        </td>
        <td>Ma ei ole arvanud
            Sa ei ole arvanud
            Ta ei ole arvanud
            Me ei ole arvanud
            Te ei ole arvanud
            Nad ei ole arvanud
        </td>
        <td> Arva!
            Ära arva!
        </td>
        <td>Arvake!
            Ärge arvake!
        </td>
    </tr>
    <tr>
        <td>Vabandama
            Vabandada
            Vabandab
        </td>
        <td>Ma vabandan
            Sa vabandad
            Ta vabandab
            Me vabandame
            Te vabandate
            Nad vabandavad
        </td>
        <td>Ma ei vabanda
            Sa ei vabanda
            Ta ei vabanda
            Me ei vabanda
            Te ei vabanda
            Nad ei vabanda
        </td>
        <td>Ma olen vabandanud
            Sa oled vabandanud
            Ta on vabandanud
            Me oleme vabandanud
            Te olete vabandanud
            Nad on vabandanud
        </td>
        <td>Ma ei ole vabandanud
            Sa ei ole vabandanud
            Ta ei ole vabandanud
            Me ei ole vabandanud
            Te ei ole vabandanud
            Nad ei ole vabandanud
        </td>
        <td>Vabanda!
            Ära vabanda!
        </td>
        <td>Vabandage!
            Ärge vabandage!
        </td>
    </tr>
    <tr>
        <td>Võtma
            Võtta
            Võtab
        </td>
        <td>Ma võtan
            Sa võtad
            Ta võtab
            Me võtame
            Te võtate
            Nad võtavad
        </td>
        <td>Ma ei võta
            Sa ei võta
            Ta ei võta
            Me ei võta
            Te ei võta
            Nad ei võta
        </td>
        <td>Ma olen võtnud
            Sa oled võtnud
            Ta on võtnud
            Me oleme võtnud
            Te olete võtnud
            Nad on võtnud
        </td>
        <td>Ma ei ole võtnud
            Sa ei ole võtnud
            Ta ei ole võtnud
            Me ei ole võtnud
            Te ei ole võtnud
            Nad ei ole võtnud
        </td>
        <td>Võta!
            Ära võta!
        </td>
        <td>Võtke!
            Ärge võtke!
        </td>
    </tr>
    <tr>
        <td>Andma
            Anda
            Annab
        </td>
        <td>Ma annan
            Sa annad
            Ta annab
            Me anname
            Te annate
            Nad annavad
        </td>
        <td>Ma ei anna
            Sa ei anna
            Ta ei anna
            Me ei anna
            Te ei anna
            Nad ei anna
        </td>
        <td>Ma olen andnud
            Sa oled andnud
            Ta on andnud
            Me oleme andnud
            Te olete andnud
            Nad on andnud
        </td>
        <td>Ma ei ole andnud
            Sa ei ole andnud
            Ta ei ole andnud
            Me ei ole andnud
            Te ei ole andnud
            Nad ei ole andnud
        </td>
        <td>Anna!
            Ära anna!
        </td>
        <td>Andke!
            Ärge andke!
        </td>
    </tr>
    <tr>
        <td>Paluma
            Paluda
            Palub
        </td>
        <td>Ma palun
            Sa palud
            Ta palub
            Me palume
            Te palute
            Nad paluvad
        </td>
        <td>Ma ei palu
            Sa ei palu
            Ta ei palu
            Me ei palu
            Te ei palu
            Nad ei palu
        </td>
        <td>Ma olen palunud
            Sa oled palunud
            Ta on palunud
            Me oleme palunud
            Te olete palunud
            Nad on palunud
        </td>
        <td>Ma ei ole palunud
            Sa ei ole palunud
            Ta ei ole palunud
            Me ei ole palunud
            Te ei ole palunud
            Nad ei ole palunud
        </td>
        <td>Palu!
            Ära palu!
        </td>
        <td>Paluge!
            Ärge paluge!
        </td>
    </tr>
    <tr>
        <td>Tänama
            Tänada
            Tänab
        </td>
        <td>Ma tänan
            Sa tänad
            Ta tänab
            Me täname
            Te tänate
            Nad tänavad
        </td>
        <td>Ma ei täna
            Sa ei täna
            Ta ei täna
            Me ei täna
            Te ei täna
            Nad ei täna
        </td>
        <td>Ma olen tänanud
            Sa oled tänanud
            Ta on tänanud
            Me oleme tänanud
            Te olete tänanud
            Nad on tänanud
        </td>
        <td>Ma ei ole tänanud
            Sa ei ole tänanud
            Ta ei ole tänanud
            Me ei ole tänanud
            Te ei ole tänanud
            Nad ei ole tänanud
        </td>
        <td>Täna!
            Ära täna!
        </td>
        <td>Tänage!
            Ärge tänage!
        </td>
    </tr>
</table>
</p>
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 3 })} source={source}/>)
