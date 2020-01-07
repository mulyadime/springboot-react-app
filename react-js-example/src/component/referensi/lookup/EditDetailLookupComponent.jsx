import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APILookupService from '../../../service/APILookupService'

import ReferensiComponent from '../../../component/referensi/ReferensiComponent'
import ReferensiDetailComponent from '../../../component/referensi/ReferensiDetailComponent'

class EditDetailLookupComponent extends Component {

    constructor (props) {
        super (props)
        this.state = {
            id: '',
            code: '',
            description: '',
            active: false,
            isActive: false,
            lookupGrpId: ''
        }

        this.handleLoad = this.handleLoad.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount = () => {
        this.handleLoad()
    }

    handleLoad = () => {
        let params = this.props.match.params
        if (params) {
            APILookupService.findLookupById(params.referensiDetailId, params.detailId)
            .then(res => {
                let item = res.data.result
                this.setState({ 
                    id: item.id,
                    code: item.code,
                    description: item.description,
                    active: item.active,
                    isActive: item.active,
                    lookupGrpId: params.referensiDetailId
                 })
            }).catch(err => {
                console.log(err)
            })
        }
    }

    handleSave = (e) => {
        e.preventDefault();
        let data = {
            id: this.state.id,
            code: this.state.code,
            description: this.state.description,
            active: this.state.isActive,
            lookupGrpId: this.props.match.params.referensiDetailId
        }

        APILookupService.updateLookupById(data)
        .then(res => {
            this.handleBack(this.props.match.params.referensiDetailId)
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleChange = () => {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    handleBack = (id) => {
        this.props.history.push(`/referensi/detail/` + id)
    }

    render = () => {
        return (
            <div>
                <ReferensiComponent />
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        <ReferensiDetailComponent referensiDetailId= { this.props.match.params.referensiDetailId } />
                        <div className="card-body">
                            <button className="btn btn-dark mr-2" onClick={ () => this.handleBack(this.props.match.params.referensiDetailId) } >Back</button>
                            <form className="mt-2">
                                <div className="form-group">
                                    <label className="">Code</label>
                                    <input type="text" className="form-control" name="code" value={ this.state.code } onChange={ this.handleChange } />
                                </div>
                                <div className="form-group">
                                    <label className="">Description</label>
                                    <input type="text" className="form-control" name="description" value={ this.state.description } onChange={ this.handleChange } />
                                </div>
                                <div className="form-group form-check">
                                    <input className="form-check-input" type="checkbox" name="active" value="true" checked={ this.state.isActive } onChange={ this.toggleChange } />
                                    <label className="form-check-label">Aktif</label>
                                </div>
                                <button type="reset" className="btn btn-dark mr-1">Reset</button>
                                <button type="button" className="btn btn-primary" onClick={ this.handleSave }>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(EditDetailLookupComponent)