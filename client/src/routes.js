import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'


// *** DEMO COMPONENTS ***
// import Dashboard from './components/Dashboard'
// import Wizard from './components/Wizard'
// import Cards from './components/Cards'
// import Signup from './components/Signup'





import Main from './components/Main'

import ScrollToTop from './components/ScrollTop'

export default props => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={Main} />









                {/* <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/wizard' component={Wizard} />
                <Route exact path='/cards' component={Cards} /> */}
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
)