import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

class LessonsView extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <div className="row">

                <div className="col-lg-3">
                    <h1 className="my-4">{t('categories')}</h1>
                    <div className="list-group">
                        <Link className="list-group-item" to="/">{t('category.lessons')}</Link>
                        <Link className="list-group-item" to="/exercises">{t('category.exercises')}</Link>
                        <Link className="list-group-item" to="/texts">{t('category.texts')}</Link>
                    </div>
                </div>

                <div className="col-lg-9">
                    <div className="row my-4">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <Link to={'/lessons/6'}>
                                    <img className="card-img-top" src="https://shortpixel.com/img/slider/berries-optimized-by-shortpixel.jpg" alt=""/>
                                </Link>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={'/lessons/6'}>
                                            {t('lesson', { number: 6 })}
                                        </Link>
                                    </h4>
                                    <p className="card-text">
                                        Возьмем оставшиеся пять падежей прямо сейчас.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default translate('translations')(LessonsView)
