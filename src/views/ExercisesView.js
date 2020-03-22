import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import CategoriesView from './CategoriesView'
import { Link } from 'react-router-dom'

class ExercisesView extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <div className="row">

                <div className="col-lg-3">
                    <CategoriesView/>
                </div>

                <div className="col-lg-9">
                    <div className="row my-4">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <Link to={'/exercises/6'}>
                                    <img className="card-img-top" src="https://ak4.picdn.net/shutterstock/videos/4689104/thumb/1.jpg" alt=""/>
                                </Link>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={'/exercises/6'}>
                                            {t('task', { number: 6 })}
                                        </Link>
                                    </h4>
                                    <p className="card-text">
                                        Домашнее задание к шестому уроку
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

export default translate('translations')(ExercisesView)
