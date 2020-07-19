import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1.
Предлагаю Вам, заняться вплотную глаголами и образованием различных форм. Ниже в таблице представлены 10 совершенно новых глаголов и 7 тех, которые уже встречались в уроке. Ваша задача проспрягать каждый из них в настоящем времени и прошедшем, поставить их в повелительное наклонение, ну и конечно не забывая также про отрицательные формы. Я Вам облегчила задачу, указала для каждого глагола все 3 основные формы.




### Harjutus 2.
Раскройте скобки, вставив глагол в правильную форму. NB! Внимательно переводите все слова в предложении, каждое из них может повлиять на смысл.
1. Praegu me .......... (elama) Tallinnas (в Таллинне – где?), aga kunagi ammu me .......... (elama) ka Pärnus (в Пярну). 2. Tema .......... (aru saama) juba eesti keelest, aga ise ei .......... (rääkima). 3. Ma .......... (arvama), et ma .......... (sõidan) Londonisse. London .......... (olema) ilus linn. 4. Eesti õpilased .......... (õppima) koolis inglise, saksa ja vene keelt. 5. ........... (vabandama) palun! Me ei ........... (aru saama). 6. Koolis ma olen .......... (õppima) inglise keelt. 7. Kõik on lihtne: mina .......... (andma), sina .......... (võtma). 8. Nad ju .......... (rääkima), et nad ei .......... (sõitma) Tallinnasse (в Таллинн – куда?), nad .......... (töötama). 9. Teie .......... (rääkima), et te ei .......... (armastama) mind. 10. ........ (tuttavaks saama), see .......... (olema) minu hea sõber Toomas. 11. Tema .......... (õppima) ja .......... (töötama) palju, temal ei .......... (olema) aega armastada. 12. Me .......... (võtma) takso ja ........ (sõitma) klubisse.13. Maris, ära .......... (rääkima) nii palju telefoniga. Isa .......... (töötama). 14. Mina .......... (tänama) Liinat, et ta .......... (õpetama) mulle eesti keelt. 15. Jaan .......... (armastama) öelda:  minu abikaasa .......... (olema) väga kaunis!

Образование настоящего и прошедшего времен, а также повелительного наклонения, для глаголов из задания 1. Внимательно проверьте себя по этой таблице!!!
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 3 })} source={source}/>)
