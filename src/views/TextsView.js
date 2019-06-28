import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

class TextsView extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <div className="row">

                <div className="col-lg-3">
                    <h1 className="my-4">{t('categories')}</h1>
                    <div className="list-group">
                        <Link className="list-group-item" to="/">{t('category.lessons')}</Link>
                        <Link className="list-group-item" to="/tasks">{t('category.tasks')}</Link>
                        <Link className="list-group-item" to="/texts">{t('category.texts')}</Link>
                    </div>
                </div>

                <div className="col-lg-9">

                    <div className="row my-4">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 1 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 2 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 3 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 4 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 5 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 6 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{t('text', { number: 8 })}</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                        aspernatur!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default translate('translations')(TextsView)
