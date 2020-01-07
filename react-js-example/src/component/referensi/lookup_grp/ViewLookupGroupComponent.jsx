import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APILookupService from '../../../service/APILookupService'

class ViewLookupGroupComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            lookupGroup: [],
            message: null,
            isCount: 0
        }

        this.handleDeleteById = this.handleDeleteById.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount = () => {
        this.handleLoad();
    }

    handleLoad = () => {
        APILookupService.findAllLookupGroup()
        .then((res) => {
            this.setState({ lookupGroup: res.data.result, isCount: res.data.result.length })
        }).catch(err => {
            console.log(err)
        })
    }

    handleDeleteById = (id) => {
        APILookupService.deleteLookupGroupById(id)
        .then(res => {
            this.handleLoad()
        }).catch(err => {
            console.log(err)
        })
    }

    handleView = (id) => {
        this.props.history.push(`/referensi/detail/` + id);
    }

    handleAdd = () => {
        this.props.history.push(`/referensi/create`);
    }

    handleUpdate = (id) => {
        this.props.history.push(`/referensi/` + id);
    }

    render = () => {
        let isExist = false
        if (this.state.isCount > 0) {
            isExist = true;
        }
        return (
            <div>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">&nbsp;</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-info" onClick={ () => this.handleAdd() } >Create New</button>

                    <table className="table table-striped table-bordered mt-3">
                        <thead>
                            <tr className="text-center">
                                <th scope="col" style={{width:'30%'}}>&nbsp;</th>
                                <th scope="col">Description</th>
                                <th scope="col" style={{width:'30%'}}>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                        { !isExist ? (
                            <tr className="text-center">
                                <td colSpan="3">Data doesn't exist.</td>
                            </tr>
                        ) : (
                            this.state.lookupGroup.map(data =>
                                <tr key={ data.id }>
                                    <th scope="row" className="text-center">
                                    <button className="btn btn-primary mr-1" onClick={ () => this.handleView(data.id) }>View</button>
                                    <button className="btn btn-warning mr-1" onClick={ () => this.handleUpdate(data.id) } >Update</button>
                                    <button className="btn btn-danger ml-1" onClick={ () => this.handleDeleteById(data.id) } >Remove</button>
                                    </th>
                                    <td>{ data.description }</td>
                                    <td className="text-center">{ data.createdAt }</td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewLookupGroupComponent)