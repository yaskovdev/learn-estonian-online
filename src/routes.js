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
import ExercisesView from './views/ExercisesView'
import TextsView from './views/TextsView'
import Lesson6View from './views/lessons/Lesson6View'

class Routes extends PureComponent {

    render() {
        return (
            <div className="main-container">
                <Navigation history={this.props.history}/>
                <Container>
                    <Route exact={true} path="/" component={LessonsView}/>
                    <Route exact={true} path="/exercises" component={ExercisesView}/>
                    <Route exact={true} path="/texts" component={TextsView}/>
                    <Route exact={true} path="/blog" component={BlogView}/>
                    <Route exact={true} path="/about" component={AboutView}/>
                    <Route exact={true} path="/lessons/6" component={Lesson6View}/>
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
