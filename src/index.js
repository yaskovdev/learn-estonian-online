import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import i18n from './i18n'
import Routes from './routes'

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </I18nextProvider>, document.getElementById('root'))
registerServiceWorker()
