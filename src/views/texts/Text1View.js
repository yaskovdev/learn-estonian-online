import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Прочитайте и переведите.

Eesti keel on Eesti Vabariigi riigikeel. Eesti keel on väga ilus ja muinasjutuline keel, kuid seda on raske õppida. Eesti keel kuulub soome-ugri keelte hulka. Inimesi, kes räägivad eesti keeles on maailmas natuke üle miljoni, nendest Eestis elab ainult umbes miljon. 

Riigikeel, riikigeele, riigikeelt – государственный зык
Muinasjutuline, muinasjutulise, muinasjutulist - сказочный
Natuke - немного
Maailm, maailma, maailma – мир
Üle - свыше
Umbes – примерно, около
`

export default translate()(props => <MarkdownPage title={props.t('text', { number: 1 })} source={source}/>)
