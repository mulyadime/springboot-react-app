import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APIBusService from '../../service/APIBusService'

class AddBusComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            platNo: '',
            kelas: '',
            kursi: '',
            status: false
            
        }

        this.doSave = this.doSave.bind(this)
    }

    doSave = (e) => {
        e.preventDefault();
        let data = {
            platNo: this.state.platNo,
            kelas: this.state.kelas,
            kursi: this.state.kursi,
            status: this.state.status
        }

        APIBusService.addNew(data)
        .then(res => {
            this.doBack()
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleChange = () => {
        this.setState({
            isAvaliable: !this.state.isAvaliable
        })
    }

    doBack = () => {
        this.props.history.push(`/bus`)
    }

    render () {
        return (
            <div>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Create New</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-dark" onClick={ () => this.doBack() } >Back</button>
                    <form className="mt-2">
                        <div className="form-group">
                            <label className="">Plat Nomor</label>
                            <input type="text" className="form-control" name="platNo" value={ this.state.platNo } onChange={ this.handleChange } />
                        </div>
                        <div className="form-group">
                            <label className="">Kelas</label>
                            <input type="text" className="form-control" name="kelas" value={ this.state.kelas } onChange={ this.handleChange } />
                        </div>
                        <div className="form-group">
                            <label className="">Kursi</label>
                            <input type="text" className="form-control" name="kursi" value={ this.state.kursi } onChange={ this.handleChange } />
                        </div>
                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" name="status" value="true" checked={ this.state.isAvaliable } onChange={ this.toggleChange } />
                            <label className="form-check-label">Tersedia</label>
                        </div>
                        <button type="reset" className="btn btn-dark mr-1">Reset</button>
                        <button type="button" className="btn btn-primary" onClick={ this.doSave }>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddBusComponent)