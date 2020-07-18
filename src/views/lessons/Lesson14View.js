import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Несколько последних уроков мы говорили только о склоняемых частях речи, а вот про глаголы совсем забыли. А это не правильно, ведь без них не может быть полного предложения. 
Напомню, для каждого глагола мы учим 3 формы – MA-инфинитив, DA-инфинитив и форму 3-го лица единственного числа настоящего времени. Каждая из них нам необходима для дальнейшего словообразования. С третьей формой все вроде понятно, она показывает нам, как выглядит основа глагола, когда мы хотим его спрягать в настоящем времени. Добавляя уже другие окончания вместо -b,  мы можем получить все личные формы единственного и множественного числа.
Предлагаю сегодня поговорить более подробно про инфинитивы. Все-таки их две формы, и нам нужно до конца понять, в чем же между ними разница.
Формы MA-инфинитива и DA-инфинитива.
Для начала вспомним, как нам распознать эти формы. С ma-инфинитивом проще, он всегда оканчивается на -ma. Именно эту форму глагола мы можем найти в словаре (хотя я уже говорила,  что хороший!!! эстонско-русский словарь даст все три интересующие нас основные формы).
Da-инфинитив в отличие от своего предшественника имеет три варианта окончаний – признаков. Da-инфинитив может оканчиваться на -da, на -ta, и на -a. Но нужно быть внимательными и правильно определить, где заканчивается основа глагола, и начинается окончание. Существует два варианта развития событий: буквы -T и -D могут быть частью основы слова, а могут быть и признаком инфинитива -ta, -da. Напомню, правило здесь звучит так: если буквы -T или -D прослеживаются хотя бы в 2х из трех основных форм глагола, тогда они принадлежат к основе, и показателем инфинитива будет только -a.
Näide:
Kirjutama, kirjutada, kirjutab 
Aitama, aidata, aitab 
Sõitma sõita sõidab 
Minema, minna, läheb
Обе формы инфинитива переводятся на русский язык одинаково, то есть и kirjutama, и kirjutada мы переведем как писать. Разница с русским состоит в том, что в эстонском языке нам постоянно нужно будет выбирать, какую из двух форм использовать, а это уже грамматический аспект. Главное знать определенные правила, какая форма от чего образуется. 
Конечно, если мы имеем дело с простым глаголом, где основа не меняется (armastama, armastada, armastab – любить), то при образовании новых отглагольных форм, нам будет все равно какую из трех основных форм взять. А ведь может случиться и так, что все три формы отличаются друг от друга (tegema, teha, teeb – делать), тогда нас выручит именно знание правил.

Помимо того, что нам необходим инфинитив с грамматической стороны, чтобы образовать новые слова, так ведь еще можно же и непосредственно в предложении его использовать - я люблю играть, я пойду играть и тд. Рассмотрим эту ситуацию подробнее.
Употребление инфинитивов.
Я люблю играть, я пойду играть … Какой бы не использовался первый глагол в предложении, форма слова играть в русском языке не поменялась. А в эстонском языке нам нужно решить, когда использовать ma-инфинитив mängima, а когда da-инфинитив mängida. Все будет зависеть как раз от впереди стоящего глагола.
Ниже в таблице представлены группы глаголов, после которых мы обязательно используем ma-инфинитив:

<table>
    <tr>
        <td>глагол</td>
        <td>Перевод</td>
        <td>пример словосочетания</td>
        <td>перевод</td>
    </tr>
    <tr>
        <td>После глаголов, выражающих движение:</td>
    </tr>
    <tr>
        <td>minema</td>
        <td>идти</td>
        <td>Lähen puhkama</td>
        <td>Направляюсь отдыхать</td>
    </tr>
    <tr>
        <td>sõitma</td>
        <td>ехать</td>
        <td>Sõidan kontserti kuulama</td>
        <td>Еду слушать концерт</td>
    </tr>
    <tr>
        <td>tulema</td>
        <td>приходить, возвращаться</td>
        <td>Tulen tuba koristama</td>
        <td>Приду убрать комнату</td>
    </tr>
    <tr>
        <td>kiirustama</td>
        <td>спешить</td>
        <td>Kiirustan küsima</td>
        <td>Спешу спросить</td>
    </tr>
    <tr>
        <td>ruttama</td>
        <td>спешить</td>
        <td>Ruttan üles kirjutama</td>
        <td>Спешу записать</td>
    </tr>
    <tr>
        <td>jooksma</td>
        <td>бежать</td>
        <td>Jooksen tööd tegema</td>
        <td>Бегу делать работу</td>
    </tr>
    <tr>
        <td>viima</td>
        <td>нести, везти</td>
        <td>Viin lapsi õppima</td>
        <td>Веду детей учиться</td>
    </tr>
    <tr>
        <td>tooma</td>
        <td>приносить, привозить</td>
        <td>Toon marju pesema</td>
        <td>Принесу ягоды мыть</td>
    </tr>
    <tr>
        <td>Начало и продолжение действия:</td>
    </tr>
    <tr>
        <td>hakkama</td>
        <td>начинать</td>
        <td>Hakkan juba joonistama</td>
        <td>Начинаю уже рисовать</td>
    </tr>
    <tr>
        <td>asuma</td>
        <td>приступать</td>
        <td>Asun töötama</td>
        <td>Приступаю работать</td>
    </tr>
    <tr>
        <td>jääma</td>
        <td>оставаться</td>
        <td>Jään ootama</td>
        <td>Остаюсь/продолжаю ждать</td>
    </tr>
    <tr>
        <td>jätma</td>
        <td>оставлять</td>
        <td>Jätan sind mõtlema</td>
        <td>Оставляю тебя подумать</td>
    </tr>
    <tr>
        <td>õppima</td>
        <td>учиться</td>
        <td>Õpin kiiresti lugema</td>
        <td>Учусь быстро читать</td>
    </tr>
    <tr>
        <td>õpetama</td>
        <td>преподавать</td>
        <td>Õpetan õpilasi laulma</td>
        <td>Учу учеников петь</td>
    </tr>
    <tr>
        <td>Обязанность:</td>
    </tr>
    <tr>
        <td>pidama</td>
        <td>быть должным</td>
        <td>Pean sinna minema</td>
        <td>Должен туда идти</td>
    </tr>
    <tr>
        <td>kohustatud olema</td>
        <td>быть обязанным</td>
        <td>Olen kohustatud homseks lõpetama</td>
        <td>Я обязан закончить к завтрашнему дню</td>
    </tr>
    <tr>
        <td>saatma</td>
        <td>отправлять</td>
        <td>Saadan poest ostma</td>
        <td>Отправляю купить в магазине</td>
    </tr>
    <tr>
        <td>kutsuma</td>
        <td>звать</td>
        <td>Kutsun kõiki tegutsema</td>
        <td>Призываю всех действовать</td>
    </tr>
    <tr>
        <td>harjunud olema</td>
        <td>привыкать</td>
        <td>Olen harjunud probleeme lahendama</td>
        <td>Я привык решать проблемы</td>
    </tr>
    <tr>
        <td>Согласие:</td>
    </tr>
    <tr>
        <td>valmis olema</td>
        <td>быть готовым</td>
        <td>Olen valmis täna tulema</td>
        <td>Я готов сегодня прийти</td>
    </tr>
    <tr>
        <td>nõus olema</td>
        <td>быть согласным</td>
        <td>Olen nõus õhtuks valmistama</td>
        <td>Я согласен к вечеру приготовить</td>
    </tr>
</table>

Если немного суммировать картину, представленную в таблице, то можно заключить, что ma-инфинитив используется в основном после глаголов, которые выражают движение и начало действия.
Далее давайте разберемся с da-инфинитивом, здесь тоже можно выделить несколько групп глаголов:

<table>
    <tr>
        <td>глагол</td>
        <td>перевод</td>
        <td>пример словосочетания</td>
        <td>перевод</td>
    </tr>
    <tr>
        <td>Желание и намерение:</td>
    </tr>
    <tr>
        <td>tahtma</td>
        <td>хотеть</td>
        <td>Tahan süüa</td>
        <td>Хочу кушать</td>
    </tr>
    <tr>
        <td>soovima</td>
        <td>желать</td>
        <td>Soovin raamatut lugeda</td>
        <td>Желаю почитать книгу</td>
    </tr>
    <tr>
        <td>viitsima</td>
        <td>иметь желание</td>
        <td>Ma ei viitsi minna</td>
        <td>Я не хочу идти</td>
    </tr>
    <tr>
        <td>aitama</td>
        <td>помогать</td>
        <td>Aitan pesu pesema</td>
        <td>Помогаю стирать белье</td>
    </tr>
    <tr>
        <td>laskma</td>
        <td>пускать</td>
        <td>Ma ei lase sind ära minna</td>
        <td>Не пущу тебя уйти
            (не дам уйти)
        </td>
    </tr>
    <tr>
        <td>lubama</td>
        <td>разрешать</td>
        <td>Ma luban külla tulla</td>
        <td>Я разрешаю прийти в гости</td>
    </tr>
    <tr>
        <td>püüdma</td>
        <td>пытаться</td>
        <td>Püüan ise selga panna</td>
        <td>Пытаюсь сам надеть</td>
    </tr>
    <tr>
        <td>proovima</td>
        <td>пробовать</td>
        <td>Proovin vastata</td>
        <td>Попробую ответить</td>
    </tr>
    <tr>
        <td>soovitama</td>
        <td>рекомендовать</td>
        <td>Soovitan sulle juua</td>
        <td>Советую тебе попить</td>
    </tr>
    <tr>
        <td>kavatsema</td>
        <td>намереваться</td>
        <td>Kavatsen lahkuda</td>
        <td>Я намерен уйти</td>
    </tr>
    <tr>
        <td>on aega</td>
        <td>есть время</td>
        <td>Mul on aega korrata</td>
        <td>У меня есть время повторить</td>
    </tr>
    <tr>
        <td>Чувства:</td>
    </tr>
    <tr>
        <td>armastama</td>
        <td>любить</td>
        <td>Armastan hommikuti joosta</td>
        <td>Люблю по утрам бегать</td>
    </tr>
    <tr>
        <td>meeldima</td>
        <td>нравиться</td>
        <td>Mulle meeldib kaua magada</td>
        <td>Мне нравится долго спать</td>
    </tr>
    <tr>
        <td>kartma</td>
        <td>бояться</td>
        <td>Kardan ennustada</td>
        <td>Боюсь предсказывать</td>
    </tr>
    <tr>
        <td>lootma</td>
        <td>надеяться</td>
        <td>Ma loodan õigeks ajaks lõpetada</td>
        <td>Надеюсь в срок закончить</td>
    </tr>
    <tr>
        <td>julgema</td>
        <td>осмеливаться</td>
        <td>Ma ei julge ülesse ronida</td>
        <td>Я не осмеливаюсь карабкаться наверх</td>
    </tr>
    <tr>
        <td>Возможность - способность:</td>
    </tr>
    <tr>
        <td>saama</td>
        <td>мочь</td>
        <td>Ma ei saa täna tulla</td>
        <td>Я не могу сегодня прийти</td>
    </tr>
    <tr>
        <td>võima</td>
        <td>мочь</td>
        <td>Kas ma võin muusikat kuulata?</td>
        <td>Могу я послушать музыку?</td>
    </tr>
    <tr>
        <td>tohtima</td>
        <td>можно, разрешается</td>
        <td>Siin ei tohi suitsetada</td>
        <td>Здесь нельзя курить</td>
    </tr>
    <tr>
        <td>jõudma</td>
        <td>мочь, успевать</td>
        <td>Ma ei jõua nii kiiresti sõita</td>
        <td>Я не успею так быстро приехать</td>
    </tr>
    <tr>
        <td>suutma</td>
        <td>мочь, быть способным</td>
        <td>Suudan vee all ujuda</td>
        <td>Могу под водой плавать</td>
    </tr>
    <tr>
        <td>oskama</td>
        <td>знать, уметь</td>
        <td>Sa oskad hästi tantsida</td>
        <td>Ты умеешь хорошо танцевать</td>
    </tr>
    <tr>
        <td>mõtlema</td>
        <td>думать</td>
        <td>Mõtlen paremale keerata</td>
        <td>Думаю повернуть направо</td>
    </tr>
    <tr>
        <td>unustama</td>
        <td>забывать</td>
        <td>Unustan alati välja lülitada</td>
        <td>Забываю всегда выключать</td>
    </tr>
    <tr>
        <td>Состояние:</td>
    </tr>
    <tr>
        <td>on hea</td>
        <td>хорошо</td>
        <td>Siin on nii hea istuda</td>
        <td>Здесь так хорошо сидеть</td>
    </tr>
    <tr>
        <td>on halb</td>
        <td>плохо</td>
        <td>Mul on halb olla</td>
        <td>Мне плохо</td>
    </tr>
    <tr>
        <td>on igav</td>
        <td>скучно</td>
        <td>Seda filmi on igav kodus vaadata</td>
        <td>Этот фильм скучно смотреть дома</td>
    </tr>
    <tr>
        <td>on huvitav</td>
        <td>интересно</td>
        <td>Sinuga on huvitav suhelda</td>
        <td>С тобой интересно общаться</td>
    </tr>
    <tr>
        <td>on raske</td>
        <td>сложно</td>
        <td>Hiina keelt on raske õppida</td>
        <td>Китайский язык сложно учить</td>
    </tr>
    <tr>
        <td>on kerge</td>
        <td>легко</td>
        <td>Luuletusi on kerge unustada</td>
        <td>Стихи легко забыть</td>
    </tr>
    <tr>
        <td>on hilja</td>
        <td>поздно</td>
        <td>Nüüd on juba hilja tagasi pöörata</td>
        <td>Теперь уже поздно поворачивать назад</td>
    </tr>
    <tr>
        <td>on vara</td>
        <td>рано</td>
        <td>Veel on liiga vara üles tõusta</td>
        <td>Еще слишком рано вставать</td>
    </tr>
    <tr>
        <td>И тому подобное…</td>
    </tr>
    <tr>
        <td>Возможность - необходимость:</td>
    </tr>
    <tr>
        <td>vaja olema</td>
        <td>нужно</td>
        <td>Mul on vaja maksta</td>
        <td>Мне нужно заплатить</td>
    </tr>
    <tr>
        <td>tarvis olema</td>
        <td>нужно</td>
        <td>Tal on tarvis kokku hoida</td>
        <td>Ему нужно экономить</td>
    </tr>
    <tr>
        <td>kasulik olema</td>
        <td>полезно</td>
        <td>Mul on kasulik võimelda</td>
        <td>Мне полезно заниматься гимнастикой</td>
    </tr>
    <tr>
        <td>tulema</td>
        <td>придется</td>
        <td>Sul tuleb rahulikult hingata</td>
        <td>Тебе следует спокойно дышать</td>
    </tr>
    <tr>
        <td>käskima</td>
        <td>приказывать</td>
        <td>Ma käsin edasi öelda</td>
        <td>Я велю передать</td>
    </tr>
    <tr>
        <td>После союза et, для выражения цели:</td>
    </tr>
    <tr>
        <td>..., et</td>
        <td>..., чтобы</td>
        <td>Lähen poodi, et osta puuvilju.</td>
        <td>Иду в магазин, чтобы купить фрукты.</td>
    </tr>
    <tr>
        <td>С вопросительными словами:</td>
    </tr>
    <tr>
        <td>kuidas</td>
        <td>как</td>
        <td>Kuidas edasi elada?</td>
        <td>Как дальше жить?</td>
    </tr>
    <tr>
        <td>miks</td>
        <td>почему</td>
        <td>Miks seda teha?</td>
        <td>Почему это делать?</td>
    </tr>
    <tr>
        <td>И тому подобное…</td>
    </tr>
</table>

Если насчет ma-инфинитивов мы выделили в основном движение и начало действия, то в отношении da-инфинитивов можно сказать, что они в основном используются после глаголов, выражающих чувства, желания и возможности.
Конечно же это не полный список глаголов, поэтому рекомендую вам выучить категории групп, и тогда вам уже проще будет разделить встречающиеся новые глаголы по этим критериям.

Есть еще кое-что, о чем следует обязательно сказать, когда мы разбираем тему инфинитивы, и в частности это касается ma-инфинитивов. Форма ma-инфинитива в эстонском языке склоняется, используется вместе с некоторыми падежными окончаниями! Да-Да, Вы не ослышались. Падежные окончания бывают не только у имен существительных, прилагательных, числительных и местоимений, а еще и у форм ma-инфинитива глаголов.
Падежные формы ma-инфинитива. 
Ma-инфинитив, помимо основной формы, которая заканчивается на -ma, имеет еще несколько форм.
-mas: с помощью этой формы описывается действие, которое происходит в настоящий момент или будет происходить в ближайшем будущем. Ta on suusatamas. Что будет означать, он сейчас катается на лыжах. Образуется при помощи ma-инфинитива + -s.
-mast: данная форма может быть использована для возвращения откуда-то. Также используются вместе со словами, требующими от глагола указания «от чего-то». Ta keeldub seda tegemast. Он отказывается от того, чтобы это сделать – отказывается это делать. Образование формы: ma-инфинитива + -st.
-maks:  форма показывает, что действие происходит для чего-то, то есть указывает на его причину. Ma sõidan Tartusse, astumaks Ülikooli. Я еду в Тарту, чтобы поступать в Университет. Образуется при помощи ma-инфинитива + -ks.
-mata: при помощи этой формы можно сделать антоним для причастия-прилагательного, описывающего объект, или чтобы указать что что-то происходит без какого-то процесса. Loetud raamat (прочитанная книга) - lugemata raamat (непрочитанная книга). Ma ei saa elada ilma lugemata – я не могу жить без чтения (без того, чтобы читать). Образование формы: ma-инфинитива + -ta. 
Точно так же, как мы с Вами выделяли списки глаголов, после которых используются ma- и da-инфинитивы, существуют слова, с которыми обязательно используются падежные формы глаголов.

<table>
    <tr>
        <td>глагол</td>
        <td>Перевод</td>
        <td>пример словосочетания</td>
        <td>перевод</td>
    </tr>
    <tr>
        <td>-mas используется после глаголов:</td>
    </tr>
    <tr>
        <td>käima</td>
        <td>ходить</td>
        <td>Ma käin tihti ujumas</td>
        <td>Я часто хожу плавать</td>
    </tr>
    <tr>
        <td>olema</td>
        <td>быть</td>
        <td>Ma olen praegu võimlemas.</td>
        <td>Я сейчас занимаюсь гимнастикой</td>
    </tr>
    <tr>
        <td>-mast:</td>
    </tr>
    <tr>
        <td>tulema</td>
        <td>приходить, возвращаться</td>
        <td>Ma tulen jalgrataga sõitmast</td>
        <td>Возвращаюсь с езды на велосипеде</td>
    </tr>
    <tr>
        <td>takistama</td>
        <td>препятствовать</td>
        <td>Ära takista teisi töötamast!</td>
        <td>Не мешай другим работать!</td>
    </tr>
    <tr>
        <td>hoiduma</td>
        <td>избегать остерегаться</td>
        <td>Hoidun temaga kohtumast</td>
        <td>Избегаю встречи с ним</td>
    </tr>
    <tr>
        <td>keelduma</td>
        <td>отказываться</td>
        <td>Poeg keeldub söömast</td>
        <td>Сын отказывается есть</td>
    </tr>
    <tr>
        <td>-mata:</td>
    </tr>
    <tr>
        <td>jätma</td>
        <td>оставлять</td>
        <td>Ära jäta seda õppimata!</td>
        <td>Не оставляй это невыученным!</td>
    </tr>
    <tr>
        <td>jääma</td>
        <td>оставаться</td>
        <td>Probleem jääb lahendamata</td>
        <td>Проблема остается нерешенной</td>
    </tr>
    <tr>
        <td>unustama</td>
        <td>забывать</td>
        <td>Unustasin leiva ostmata</td>
        <td>Забыл купить хлеб</td>
    </tr>
</table>
`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 14 })} source={source}/>)
