import React from 'react'
import { translate } from 'react-i18next'
import MarkdownPage from '../components/MarkdownPage'

const source = `

`

export default translate()(props => <MarkdownPage title={props.t('lesson', { number: 16 })} source={source}/>)
