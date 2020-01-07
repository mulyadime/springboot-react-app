import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ReferensiComponent from '../../../component/referensi/ReferensiComponent'
import ReferensiDetailComponent from '../../../component/referensi/ReferensiDetailComponent'
import ViewDetailLookupComponent from '../../../component/referensi/lookup/ViewDetailLookupComponent'

class DetailLookupComponent extends Component {

    constructor (props) {
        super (props)
        this.state = {
            referensiDetailId: ''
        }
    }

    render = () => {
        return (
            <div>
                <ReferensiComponent />
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <ReferensiDetailComponent referensiDetailId={ this.props.match.params.referensiDetailId  } />
                        <div className="card-body">
                            <ViewDetailLookupComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(DetailLookupComponent)