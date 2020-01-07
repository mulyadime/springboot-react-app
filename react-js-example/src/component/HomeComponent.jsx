import React, { Component } from 'react'

class HomeComponent extends Component {

    render = () => {
        return (
            <div>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{ this.props.header }</h4>
                </div>
                <div className="card-body">
                    { this.props.content }
                </div>
            </div>
        )
    }
}

export default HomeComponent