import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import { withCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

class Navigation extends PureComponent {

    state = { page: 'home' }

    render() {
        const { t } = this.props
        const { page } = this.state
        const showBlog = false
        const showAbout = false
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">{t('title')}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${page === 'home' ? 'active' : ''}`}>
                                <Link className="nav-link" onClick={() => this.handleClick('home')} to={'/'}>
                                    {t('page.home')}
                                </Link>
                            </li>
                            {showBlog && <li className={`nav-item ${page === 'blog' ? 'active' : ''}`}>
                                <Link className="nav-link" onClick={() => this.handleClick('blog')} to={'/blog'}>{t('page.blog')}</Link>
                            </li>}
                            {showAbout && <li className={`nav-item ${page === 'about' ? 'active' : ''}`}>
                                <Link className="nav-link" onClick={() => this.handleClick('about')} to={'/about'}>{t('page.about')}</Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    handleClick = (page) => {
        this.setState({ page })
    }
}

export default withCookies(translate('translations')(Navigation))
