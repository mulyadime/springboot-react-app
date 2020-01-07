import React, { Component } from 'react'

import ReferensiComponent from '../../../component/referensi/ReferensiComponent'

import ViewLookupGroupComponent from './ViewLookupGroupComponent'

class LookupGroupComponent extends Component {

    render() {
        return(
            <div>
                <ReferensiComponent />

                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <ViewLookupGroupComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default LookupGroupComponent;