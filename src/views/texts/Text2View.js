import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `
Прочитайте и переведите.

Korteris elab üks mees ja tema naine. Mees armastab puhata. Tema magab diivanil terve päev. Ta teab, kui tema naine tuleb, siis ta ei saa enam magada ja arvuti mänge mängida. Ta magab kui teda ei ole kodus. Tema naine töötab direktorina. Tema ei ole kunagi hiljaks jäänud. Ta on hea ülemus. Homme on puhkepäev, siis nad saavad natuke puhata. Õhtul nad lähevad kinno. Film on inglise keeles, aga nad loevad subtiitreid. Nad ju oskavad lugeda.  

Terve päev – целый день
Arvuti – компьютер 
Ülemus, ülemuse, ülemust  - начальник
Ju – же
`

export default translate()(props => <MarkdownPage title={props.t('text', { number: 2 })} source={source}/>)
