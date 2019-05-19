import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import { withCookies } from 'react-cookie'

class Navigation extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">{t('title')}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">{t('page.home')}
                                    <span className="sr-only">{t('page.current')}</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('page.blog')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('page.about')}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withCookies(translate('translations')(Navigation))
