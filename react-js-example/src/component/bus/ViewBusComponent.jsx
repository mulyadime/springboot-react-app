import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APIBusService from '../../service/APIBusService'

class ViewBusComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            bus: [],
            isCount: 0
        }

        this.handleLoad = this.handleLoad.bind(this)
        this.handleUpdateById = this.handleUpdateById.bind(this)
        this.handleDeleteById = this.handleDeleteById.bind(this)
    }

    componentDidMount = () => {
        this.handleLoad()
    }

    handleLoad = () => {
        APIBusService.findAll()
        .then(res => {
            let item = res.data
            console.log(item)
            this.setState({ bus: item.result, isCount: item.result.length })
        }).catch(err => {
            console.log(err)
        })
    }

    handleUpdateById = (id) => {
        this.props.history.push(`/bus/` + id)
    }

    handleDeleteById = (id) => {
        APIBusService.removeById(id)
        .then(res => {
            this.handleLoad()
        }).catch(err => {
            console.log(err)
        })
    }

    handleAdd = () => {
        this.props.history.push(`/bus/create`)
    }

    render () {
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
                                <th scope="col" style={{ width: '10%' }}>&nbsp;</th>
                                <th scope="col" style={{ width: '25%' }}>Plat Nomor</th>
                                <th scope="col" style={{ width: '5%' }}>Kelas</th>
                                <th scope="col" style={{ width: '5%' }}>Kursi</th>
                                <th scope="col" style={{ width: '5%' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        { !isExist ? (
                            <tr className="text-center">
                                <td colSpan="5">Data doesn't exist.</td>
                            </tr>
                        ) : (
                            this.state.bus.map(item =>
                                <tr className="text-center" key={ item.id }>
                                    <th scope="row" className="text-center">
                                        <button className="btn btn-warning mr-1" onClick={ () => this.handleUpdateById(item.id) } >Update</button>
                                        <button className="btn btn-danger ml-1" onClick={ () => this.handleDeleteById(item.id) } >Remove</button>
                                    </th>
                                    <td>{ item.platNo }</td>
                                    <td>{ item.kelas }</td>
                                    <td>{ item.kursi }</td>
                                    <td>{ item.status }</td>
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

export default withRouter(ViewBusComponent)