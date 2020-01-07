import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APILookupService from '../../../service/APILookupService'

import ReferensiComponent from '../../../component/referensi/ReferensiComponent'

class AddLookupGroupComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            description: '',
            message: null
        }

        this.handleSave = this.handleSave.bind(this);
    }

    handleSave = (e) => {
        e.preventDefault();
        let data = {
            description: this.state.description
        }

        APILookupService.addNewLookupGroup(data)
        .then(res => {
            this.handleBack()
        }).catch(err => {
            console.log(err)
        })

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBack() {
        this.props.history.push(`/referensi`)
    }

    render () {
        return (
            <div>
                <ReferensiComponent />
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Create New</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-dark" onClick={ () => this.handleBack() } >Back</button>
                            <form className="mt-2">
                                <div className="form-group">
                                    <label htmlFor="inputDescription">Description</label>
                                    <input type="text" className="form-control" id="inputDescription" name="description" value={ this.state.description } onChange={ this.handleChange } />
                                </div>
                                <button type="reset" className="btn btn-dark mr-1">Reset</button>
                                <button type="button" className="btn btn-primary" onClick={ this.handleSave }>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default withRouter(AddLookupGroupComponent);