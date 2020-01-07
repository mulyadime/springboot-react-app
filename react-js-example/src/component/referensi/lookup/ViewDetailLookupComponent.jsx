import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APILookupService from '../../../service/APILookupService'

class ViewDetailLookupComponent extends Component {

    constructor (props) {
        super (props)
        this.state = {
            lookup: [],
            isCount: 0
        }

        this.handleLoad = this.handleLoad.bind(this)
        this.handleDeleteById = this.handleDeleteById.bind(this)
    }

    componentDidMount = () => {
        this.handleLoad()
    }

    handleLoad = () => {
        let params = this.props.match.params
        if (params) {
            APILookupService.findLookupByFk(params.referensiDetailId)
            .then(res => {
                let item = res.data
                this.setState({ lookup: item.result, isCount: item.result.length })
            }).catch(err => {
                console.log(err)
            })
        }
        
    }

    handleDeleteById = (id) => {
        APILookupService.deleteLookupById(id)
            .then(res => {
                this.handleLoad()
            }).catch(err => {
                console.log(err)
            })
    }

    handleAdd = (referensiDetailId) => {
        this.props.history.push(`/referensi/detail/` + referensiDetailId + `/create`);
    }

    handleUpdateById = (referensiDetailId, detailId) => {
        this.props.history.push(`/referensi/detail/` + referensiDetailId + `/update/` + detailId);
    }

    render = () => {
        let isExist = false
        if (this.state.isCount > 0) {
            isExist = true;
        }

        return (
            <div>
                <a className="btn btn-dark mr-2" href="/referensi" >Back</a>
                <button className="btn btn-info" onClick={ () => this.handleAdd(this.props.match.params.referensiDetailId) } >Create New</button>

                <table className="table table-striped table-bordered mt-3">
                    <thead>
                        <tr className="text-center">
                            <th scope="col" style={{width:'20%'}}>&nbsp;</th>
                            <th scope="col" style={{width:'10%'}}>Code</th>
                            <th scope="col">Description</th>
                            <th scope="col" style={{width:'5%'}}>Active</th>
                            <th scope="col" style={{width:'5%'}}>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        { !isExist ? (
                            <tr className="text-center">
                                <td colSpan="5">Data doesn't exist.</td>
                            </tr>
                        ) : (
                            this.state.lookup.map(item =>
                                <tr className="text-center" key={ item.id }>
                                    <th scope="row" className="text-center">
                                        <button className="btn btn-warning mr-1" onClick={ () => this.handleUpdateById(this.props.match.params.referensiDetailId, item.id) } >Update</button>
                                        <button className="btn btn-danger ml-1" onClick={ () => this.handleDeleteById(item.id) } >Remove</button>
                                    </th>
                                    <td>{ item.code }</td>
                                    <td>{ item.description }</td>
                                    <td>
                                        { item.active === true ? (
                                            <i className="btn btn-warning" />
                                        ) : (
                                            <i className="btn btn-primary" />
                                        ) }
                                    </td>
                                    <td>{ item.lastUpdated }</td>
                                </tr>    
                            )
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default withRouter(ViewDetailLookupComponent)