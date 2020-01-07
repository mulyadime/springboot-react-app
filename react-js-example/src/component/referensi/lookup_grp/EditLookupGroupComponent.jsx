import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APILookupService from '../../../service/APILookupService'

import ReferensiComponent from '../../../component/referensi/ReferensiComponent'

class EditLookupGroupComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: '',
            description: '',
            message: null
        }

        this.handleLoad = this.handleLoad.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount = () => {
        this.handleLoad();
    }

    handleLoad = () => {
        const params = this.props.match.params
        if (params) {
            APILookupService.findLookupGroupById(params.referensiId)
            .then(res => {
                let item = res.data.result;
                this.setState({ id: item.id, description: item.description });
            }).catch(err => {
                this.handleBack()
            })
        } else {
            this.handleBack()
        }
        
    }

    handleSave = (e) => {
        e.preventDefault();
        let data = {
            id: this.state.id,
            description: this.state.description
        }

        APILookupService.updateLookupGroupById(data)
        .then(res => {
            this.setState({ message: 'Lookup Group updated successfully.' });
            this.handleBack()
        }).catch(err => {
            console.log(err)
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBack = () => {
        this.props.history.push(`/referensi`);
    }

    render = () => {
        return (
            <div>
                <ReferensiComponent />
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Update</h4>
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

export default withRouter(EditLookupGroupComponent);