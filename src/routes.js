import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { Container } from 'reactstrap'
import { translate } from 'react-i18next'

import './App.css'
import LessonsView from './views/LessonsView'
import Navigation from './Navigation/Navigation'
import BlogView from './views/BlogView'
import AboutView from './views/AboutView'
import TasksView from './views/TasksView'
import TextsView from './views/TextsView'

class Routes extends PureComponent {

    render() {
        return (
            <div className="main-container">
                <Navigation history={this.props.history}/>
                <Container>
                    <Route exact={true} path="/" component={LessonsView}/>
                    <Route exact={true} path="/tasks" component={TasksView}/>
                    <Route exact={true} path="/texts" component={TextsView}/>
                    <Route exact={true} path="/blog" component={BlogView}/>
                    <Route exact={true} path="/about" component={AboutView}/>
                </Container>
                <footer className="py-5 bg-dark">
                    <Container>
                        <p className="m-0 text-center text-white">Copyright &copy; Learn Estonian Online 2019</p>
                    </Container>
                </footer>
            </div>
        )
    }
}

export default withCookies(translate('translations')(Routes))
