import React, { PureComponent } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Container } from 'reactstrap'
import { translate } from 'react-i18next'

import './App.css'
import LessonsView from './views/LessonsView'
import Navigation from './views/components/Navigation'
import BlogView from './views/BlogView'
import AboutView from './views/AboutView'
import ExercisesView from './views/ExercisesView'
import TextsView from './views/TextsView'
import Lesson1View from './views/lessons/Lesson1View'
import Lesson6View from './views/lessons/Lesson6View'
import Exercise6View from './views/exercises/Exercise6View'
import Lesson2View from './views/lessons/Lesson2View'
import Lesson3View from './views/lessons/Lesson3View'
import Lesson4View from './views/lessons/Lesson4View'
import Lesson5View from './views/lessons/Lesson5View'
import Lesson7View from './views/lessons/Lesson7View'
import Lesson8View from './views/lessons/Lesson8View'
import Lesson9View from './views/lessons/Lesson9View'
import Lesson10View from './views/lessons/Lesson10View'
import Lesson11View from './views/lessons/Lesson11View'
import Lesson12View from './views/lessons/Lesson12View'
import Lesson13View from './views/lessons/Lesson13View'
import Lesson14View from './views/lessons/Lesson14View'
import Lesson15View from './views/lessons/Lesson15View'
import Lesson16View from './views/lessons/Lesson16View'
import Lesson17View from './views/lessons/Lesson17View'

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
                    <Route exact={true} path="/lessons/1" component={Lesson1View}/>
                    <Route exact={true} path="/lessons/2" component={Lesson2View}/>
                    <Route exact={true} path="/lessons/3" component={Lesson3View}/>
                    <Route exact={true} path="/lessons/4" component={Lesson4View}/>
                    <Route exact={true} path="/lessons/5" component={Lesson5View}/>
                    <Route exact={true} path="/lessons/6" component={Lesson6View}/>
                    <Route exact={true} path="/lessons/7" component={Lesson7View}/>
                    <Route exact={true} path="/lessons/8" component={Lesson8View}/>
                    <Route exact={true} path="/lessons/9" component={Lesson9View}/>
                    <Route exact={true} path="/lessons/10" component={Lesson10View}/>
                    <Route exact={true} path="/lessons/11" component={Lesson11View}/>
                    <Route exact={true} path="/lessons/12" component={Lesson12View}/>
                    <Route exact={true} path="/lessons/13" component={Lesson13View}/>
                    <Route exact={true} path="/lessons/14" component={Lesson14View}/>
                    <Route exact={true} path="/lessons/15" component={Lesson15View}/>
                    <Route exact={true} path="/lessons/16" component={Lesson16View}/>
                    <Route exact={true} path="/lessons/17" component={Lesson17View}/>
                    <Route exact={true} path="/exercises/6" component={Exercise6View}/>
                </Container>
                <footer className="py-5 bg-dark">
                    <Container>
                        <p className="m-0 text-center text-white">Copyright &copy; Learn Estonian Online {new Date().getFullYear()}</p>
                    </Container>
                </footer>
            </div>
        )
    }
}

export default withRouter(translate()(Routes))
