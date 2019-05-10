import React from 'react'
import BountyList from './components/BountyList'
import AddBountyPage from './components/AddBountyPage'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact path="/"
                    render={(rProps) => <BountyList {...rProps}/>}/>
                <Route
                    path="/addbounty"
                    render={(rProps) => <AddBountyPage {...rProps}/>}/>
            </Switch>
        </div>
    )
}

export default App