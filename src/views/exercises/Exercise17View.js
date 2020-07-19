import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
### Harjutus 1

Используйте местоимения в нужном падеже.
Mõni inimene ei tea, mis on  .......... (tema) tervisele kasulik. 2. Vend rääkis, kuidas ta ..........  (ise) koera sai. 3. Nad on ..........(oma) tööga täiesti rahul. 4. .......... (tema) juttu on raske jälgida. 5. Tulge koos .......... (mina), ma ei lähe ilma ..........(teie). 6. .......... (mõni) meeldib vaikus, .......... (mõni) aga eelistab linnakära. 7. .......... (nemad) teeb piltnik palju ilusaid fotosid. 8. .......... (mina) tundub, et Jaan on .......... (keegi) armunud. 9. Ma pole juba ammu ......... (teie) midagi head kuulnud. 10. 11. .......... (mina) mäletan .......... (sina) ja .......... (sina) venda. 12. .......... (nemad) on kõik minu tuttavad, .......... (nemad) on meeldiv suhelda. 13. Pean .......... (teie) helistama ja kindlasti .......... (see) järele küsima. 14. Ma mõtlen .......... (see) tihti, mis .......... (meie) sobib paremini. 15. .......... (meie) pole aega, .......... (meie) peame .......... (nemad) asemel komandeeringusse sõitma.

### Harjutus 2

Переводите на эстонский язык следующие предложения. 
Она купила себе новую квартиру. 2. Им нравится просто сидеть и о чем-нибудь разговаривать. 3. Некоторые всегда хотят спать, а кто-то может спать пару часов и чувствовать себя  хорошо. 4. Мы давно их не видели. 5. Эта девушка твоя сестра? 6. Дай мне что-нибудь попить. 7. У меня для вас есть хорошая и плохая новость, с какой начать? 8. Многие уже давно знают этого старика. 9. У меня нет сегодня для этого времени, позвони мне завтра, и мы что-нибудь придумаем. 10. Это очень интересная книга, многие ее читают.
`

export default translate()(props => <MarkdownPage title={props.t('task', { number: 17 })} source={source}/>)
