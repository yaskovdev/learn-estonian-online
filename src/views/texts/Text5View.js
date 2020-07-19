import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
По сложившейся уже традиции, перед новым текстом возьмем еще немного новой лексики. На этот раз у нас на повестке дня ответ на вопрос Millal? Когда? Возьмем разные временные отрезки и посмотрим как меняются формы.

### Время суток — Päeva osad

Нам привычно делить сутки на 4 части — утро, день, вечер, ночь. Чтобы сказать, когда то, или иное событие произошло, в эстонском языке нужно взять второй падеж этих слов и добавить к ним окончание -l. Обратите внимание, немного исключительной здесь выступит форма для слова ночь!

* Утро — hommik, -u, -ut &rarr; hommikul
* День — päev, -a, -a &rarr; päeval
* Вечер — õhtu, -, -t &rarr; õhtul
* Ночь — öö, -, -d &rarr; öösel

##### Näide

Hommikul ma tõusen üles kell kuus. Утром я встаю в шесть утра.
!!! Öösel ma töötan või magan. Ночью я работаю или сплю.

### Дни недели — Nädalapäevad

К семи известным нам дням недели следует также добавлять окончание -l к падежу omastav,  если мы хотим ответить на вопрос «когда». 

* Понедельник — esmaspäev, -a, -a &rarr; esmaspäeval
* Вторник — teisipäev, -a, -a &rarr; teisipäeval
* Среда — kolmapäev, -a, -a &rarr; kolmapäeval
* Четверг — neljapäev, -a, -a &rarr; neljapäeval
* Пятница — reede, — , -t &rarr; reedel
* Суббота — laupäev, -a, -a &rarr; laupäeval
* Воскресенье — pühapäev, -a, -a &rarr; pühapäeval

##### Näide

Reedel ma veel töötan, aga juba laupäeval sõidan ma puhkusele. В пятницу я еще работаю, а в субботу я еду в отпуск.

### Месяца — Kuud

Чтобы сказать, что что-то произошло в тот или иной из двенадцати месяцев, мы берем второй падеж нужного нам месяца и добавляем к нему окончание -s.

* Январь — jaanuar, -i, -i &rarr;  jaanuaris
* Февраль — veebruar, -i, -i &rarr;  veebruaris
* Март — märts, -i, -i &rarr;  märtsis
* Апрель — aprill, -i, -i &rarr;  aprillis
* Май — mai, — , -d &rarr;  mais
* Июнь — juuni, -, -t &rarr;  juunis
* Июль — juuli, -, -t &rarr;  juulis
* Август — august, -i, -it &rarr;  augustis
* Сентябрь — septemb/er, — ri, -rit &rarr;  septembris
* Октябрь — oktoob/er, -ri, -rit &rarr;  oktoobris
* Ноябрь — novemb/er, -ri, -rit &rarr;  novembris
* Декабрь — detsemb/er, -ri, -rit &rarr;  detsembris

##### Näide

Aprillis on kolmkümmend päeva, aga veebruaris on kakskümmend kaheksa. В апреле 30 дней, а в феврале 28.

### Времена года — Aastaajad

Последние временные отрезки, о которых я хотела бы рассказать — времена года. Чтобы ответить на вопрос когда? (в какое время года?), нужно взять второй падеж слова и добавить к нему окончание -l.

* Весна — kevad, -e, -et &rarr;  kevadel
* Лето — suvi, suve, suve &rarr;  suvel
* Осень — sügis, -e, -t &rarr;  sügisel
* Зима — talv, -e, -e &rarr;  talvel

##### Näide

Suvel me sõidame tavaliselt maale. Летом мы едем обычно в деревню.

Lugege tekst ja tõlkige:

##### Aastaajad

Minu sünnipäev on suvel ja see on minu lemmikaastaaeg. Mina olen sündinud juuni alguses ning sel ajal õitseb juba siirel, mis annab suurepärast lõhna. Suvel saab päevitada ja meres ujuda. Rannas on väga mõnus. Alati saab rannavõrkpalli mängida või niisama liiva peal lamada ja raamatut lugeda. 
Talvel on juba teised rõõmud: suusatamine, uisutamine, kelgutamine. Mäletan, kui tore oli lapsepõlves õues lumememme teha ja lumesõda mängida. Detsembris on pikad pühad, kui kõik saadavad teineteisele kingitusi ja istuvad koos suure laua taga. Ööd on pikad talvel, kuid lapsed teavad, et just öösel juhtuvad kõik imelised asjad.  
Kevadel ärkab loodus. Linnud tulevad lõunamaalt tagasi. Päevad on pikad ja saab kaua pargis ja metsas jalutada. Sügisel on metsad ka väga ilusad, kuna kõik puud on värvilised. See ongi tore, et meil on neli aastaaega ja igaüks nendest on nii erinev!


* Siirel, siireli, siirelit — сирень 
* Lõhn, lõhna, lõhna — запах
* Päevitama, päevitada, päevitab — загорать
* Lamama, lamada, lamab — лежать
* Suusatamine, -se, -st — катание на лыжах
* Uisutamine, -se, -st — катание на коньках
* Kelgutamine, -se, -st — катание на санках
* Lapsepõlv, -e, -e — детство 
* Imeline, -se, -st — чудесный, странный, imelised asjad — чудеса
* Ärkama, ärgata, ärkab — просыпаться
* Tore, toreda, toredat — классный, здоровский
* Erinev, erineva, erinevat — разный
`

export default translate()(props => <MarkdownPage title={props.t('text', { number: 5 })} source={source}/>)
