import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import APIEmployeeService from '../../service/APIEmployeeService'

class EditEmployeeComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            status: '',
            address: '',
            isChecked : false
        }
    }

    componentDidMount () {
        console.log(this.props)
        // this.onLoadById()
    }

    onLoadById () {
        let params = this.props.match.params
        if (params) {
            APIEmployeeService.findEmployeeById(params.employeeId)
            .then(res => {
                let item = res.data.result
                this.setState({ 
                    id: item.id, 
                    name: item.name, 
                    status: item.status, 
                    address: item.address, 
                    isChecked:  item.status > 0 ? true : false
                })
            }).catch(err => {
                console.log(err)
                this.doBack()
            })
        } else {
            this.doBack()
        }
    }

    doSave = (e) => {
        e.preventDefault();
        let data = {
            id: this.state.id,
            name: this.state.name,
            status: this.state.status,
            address: this.state.address
        }

        APIEmployeeService.updateEmployeeById(data)
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
          isChecked: !this.state.isChecked,
          status: !this.state.isChecked ? 1 : 0
        });
      }

    doBack () {
        this.props.history.push(`/employee`)
    }

    render () {
        return (
            <div>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Update - { this.state.name }</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-dark" onClick={ () => this.doBack() } >Back</button>
                    <form className="mt-2">
                        <div className="form-group">
                            <label className="">Name</label>
                            <input className="form-control" type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
                        </div>
                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" name="status" value="1" checked={ this.state.isChecked } onChange={ this.toggleChange } />
                            <label className="form-check-label">Supir</label>
                        </div>
                        <div className="form-group">
                            <label className="">Address</label>
                            <textarea className="form-control" name="address" value={ this.state.address } onChange={ this.handleChange } />
                        </div>
                        <button type="reset" className="btn btn-dark mr-1">Reset</button>
                        <button type="button" className="btn btn-primary" onClick={ this.doSave }>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditEmployeeComponent)