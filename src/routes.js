import React from 'react'
import {Switch, Route} from 'react-router-dom';
// Components
import Dashboard from './components/Dashboard/Dashboard';
import Wizard1 from './components/Wizards/Wizard1'
import Wizard2 from './components/Wizards/Wizard2'

export default <Switch>
    <Route path='/step1' component={Wizard1} />
    <Route path='/step2' component={Wizard2} />
    <Route exact path='/' component={Dashboard} />
</Switch>