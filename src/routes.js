import React, { Fragment, PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { Container } from 'reactstrap'
import { translate } from 'react-i18next'

import './App.css'
import TaskView from './Tasks/TaskView'

class Routes extends PureComponent {

    render() {
        return (
            <Fragment>
                <Container>
                    <Route exact={true} path="/learn-estonian-online/" component={TaskView}/>
                    <Route path="/login/learn-estonian-online/" component={TaskView}/>
                </Container>
                <footer class="py-5 bg-dark">
                    <div class="container">
                        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default withCookies(translate('translations')(Routes))
