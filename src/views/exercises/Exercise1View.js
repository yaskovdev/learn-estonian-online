import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1 
Закрепляем правила чтения по-эстонски. 
1. keda tunned – keeda suppi (кого знаешь – свари суп)
2. pole minu asi – minu poole (не мое дело – в мою сторону)
3. Vene toll – kõrge tool (Российская таможня – высокий  стул)
4. vana koli – kooli tund (старый хлам – школьный урок)
5. kell heliseb – eesti keel (звонок звенит – эстонский язык)
6. lemmik padi – paadi peal (любимая подушка – на лодке)
7.lamas diivanil – lammas määgib (лежал на диване – овца блеяла)
8. too firma – firma töö (та фирма – работа фирмы)
9. ära kisu! – kiisu nimi (не трожь! – имя кошки)
10. esimesest klassist – klaasist uks (из первого класса – дверь из стекла)

### Harjutus 2

Найдите правильный перевод

<table>
    <tr>
        <td>1 До свидания!
            
        </td>
        <td>a Tere päevast!</td>
    </tr>
    <tr>
        <td>2 Спокойной ночи!
            
        </td>
        <td>b Nägemist!</td>
    </tr>
    <tr>
        <td>3 Доброе утро!
            
        </td>
        <td>c Homseni!</td>
    </tr>
    <tr>
        <td>4 Добрый день!
            
        </td>
        <td>d Tere!</td>
    </tr>
    <tr>
        <td>5 Добрый вечер!
            
        </td>
        <td>e Tere ühtust!</td>
    </tr>
    <tr>
        <td>6 Пока!
            
        </td>
        <td>f Head ööd!</td>
    </tr>
    <tr>
        <td>7 До завтра!
            
        </td>
        <td>g Tere hommikust</td>
    </tr>
    <tr>
        <td>8 Привет!
            
        </td>
        <td>h Tšau!</td>
    </tr>
</table>

Чтобы быстрее уловить нюансы произношения эстонского языка, нужно с первых уроков много слушать. Так что рекомендую использовать все возможные подручные средства. Во-первых установить себе каналы эстонского радио. Благо это очень просто сделать через приложения в телефоне. 
Из дополнительных источников рекомендую сайт http://enagueesti.ee/ 
Сайт работает в дополнение к одному из лучших учебников эстонского языка E naguEesti, но даже если вы не используете учебник, то хотя бы на сайте вы должны побывать. В разделе аудио есть записи диалогов, также песенки.

Ну и конечно безграничный youtube. 
Вот вам для начала пару детских песенок про алфавит



https://www.youtube.com/watch?v=3VSQp0hNMaE




https://www.youtube.com/watch?v=MbXM0hwFDsA
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 1 })} source={source}/>)
