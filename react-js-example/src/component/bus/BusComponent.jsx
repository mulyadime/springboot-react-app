import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ViewBusComponent from '../../../src/component/bus/ViewBusComponent'
import AddBusComponent from '../../../src/component/bus/AddBusComponent'
import EditBusComponent from '../../../src/component/bus/EditBusComponent'

class BusComponent extends Component {

    render () {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                    <h1 className="display-4">Data Armada Bus</h1>
                </div>
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <Router>
                            <Switch>
                                <Route path="/bus" exact component={ViewBusComponent} />
                                <Route path="/bus/create" exact component={AddBusComponent} />
                                <Route path="/bus/:busId" exact component={EditBusComponent} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusComponent