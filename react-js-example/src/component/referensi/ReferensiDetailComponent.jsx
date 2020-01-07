import React, { Component } from 'react'

import APILookupService from '../../service/APILookupService'

class ReferensiDetailComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            description: ''
        }

        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount = () => {
        this.handleLoad();
    }

    handleLoad = () => {
        const params = this.props
        if (params) {
            APILookupService.findLookupGroupById(params.referensiDetailId)
            .then(res => {
                let item = res.data.result;
                this.setState({ id: item.id, description: item.description });
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.props.history.push(`/referensi`);
        }
        
    }

    render = () => {
        return (
            <div>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{ this.state.description }</h4>
                </div>
            </div>
        )
    }
}

export default ReferensiDetailComponent