import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { translate } from 'react-i18next'
import { createTask, searchUserTasks, showError, updateTask, updateUserTasks } from '../actions/taskActions'

class TaskView extends PureComponent {

    render() {
        const { t } = this.props
        return (
            <Fragment>
                <Navigation history={this.props.history}/>

                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="my-4">{t('categories')}</h1>
                        <div className="list-group">
                            <a href="#" className="list-group-item">{t('category.lessons')}</a>
                            <a href="#" className="list-group-item">{t('category.tasks')}</a>
                            <a href="#" className="list-group-item">{t('category.texts')}</a>
                        </div>
                    </div>

                    <div className="col-lg-9">

                        <div className="row my-4">

                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href="#">{t('lesson', { number: 1 })}</a>
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
                                            <a href="#">{t('lesson', { number: 2 })}</a>
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
                                            <a href="#">{t('lesson', { number: 3 })}</a>
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
                                            <a href="#">{t('lesson', { number: 4 })}</a>
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
                                            <a href="#">{t('lesson', { number: 5 })}</a>
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
                                            <a href="#">{t('lesson', { number: 6 })}</a>
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
                                            <a href="#">{t('lesson', { number: 8 })}</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                                            aspernatur!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
    initialized: state.tasks.initialized
})

const mapDispatchToProps = {
    searchUserTasks,
    updateUserTasks,
    createTask,
    updateTask,
    showError
}

export default connect(mapStateToProps, mapDispatchToProps)(translate('translations')(TaskView))
