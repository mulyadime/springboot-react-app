import React, { Component } from 'react'

import APIEmployeeService from '../../../src/service/APIEmployeeService'

import HomeComponent from '../../component/HomeComponent'

class EmployeeComponent extends Component {

    constructor (props) {
        super (props)
        this.state = {
            employee: [],
            id: '',
            name: '',
            status: '',
            address: '',
            isCount: 0,
            isChecked: false
        }

        this.handeSave = this.handleSave.bind(this)
    }

    componentDidMount = () => { 
        this.handleLoad()
    }

    handleLoad = () => {
        APIEmployeeService.findAllEmployee()
        .then(res => {
            let items = res.data
            this.setState({ employee: items.result, isCount: items.result.length })
        }).catch(err => {
            console.log(err)
        })
    }

    handleLoadById = () => {
        let params = this.props.match.params
        console.log(params)
        if (params) {
            APIEmployeeService.findEmployeeById(params.employeeId)
            .then(res => {
                let item = res.data.result
                this.setState({ 
                    id: item.id, 
                    name: item.name, 
                    status: item.status, 
                    address: item.address, 
                    // isChecked:  item.status > 0 ? true : false
                })
            }).catch(err => {
                console.log(err)
            })
        }
    }

    handleSave = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.name,
            status: this.state.status,
            address: this.state.address,
        }

        APIEmployeeService.addNewEmployee(data)
        .then(res => {
            this.handleBack()
        }).catch(err => {
            console.log(err)
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        let data = {
            id: this.state.id,
            name: this.state.name,
            status: this.state.isChecked === true ? 1 : 0,
            address: this.state.address
        }

        console.log(data)

        // APIEmployeeService.updateEmployeeById(data)
        // .then(res => {
        //     this.handleBack()
        // }).catch(err => {
        //     console.log(err)
        // })

    }

    handleDeleteById = (id) => {
        APIEmployeeService.deleteEmployeeById(id)
        .then(res => {
            this.handleLoad()
        }).catch(err => {
            console.log(err)
        })
    }

    handleUpdateById = (employeeId) => {
        this.props.history.push(`/employee/` + employeeId)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }

    handleAdd = () => {
        this.props.history.push(`/employee/create`)
    }

    handleBack = () => {
        this.props.history.replace(`/employee`)
        // this.handleLoad()
    }

    result = () => {
        const buttonBack = ( <button className="btn btn-dark" onClick={ () => this.handleBack() } >Back</button> )
        const buttonAdd = ( <button className="btn btn-info" onClick={ () => this.handleAdd() } >Create New</button> )
        let result = ''
        let match = this.props.match
        if (match.path === '/employee') {
            let isExist = false
            if (this.state.isCount > 0) {
                isExist = true;
            }
            const viewContent = (
                <div>
                    { buttonAdd }
                    <table className="table table-striped table-bordered mt-3">
                        <thead>
                            <tr className="text-center">
                                <th scope="col" style={{ width: '20%' }}>&nbsp;</th>
                                <th scope="col" style={{ width: '25%' }}>Name</th>
                                <th scope="col">Address</th>
                                <th scope="col" style={{ width: '5%' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        { !isExist ? (
                            <tr className="text-center">
                                <td colSpan="4">Data doesn't exist.</td>
                            </tr>
                        ) : (
                            this.state.employee.map(item =>
                                <tr key={ item.id }>
                                    <th scope="row" className="text-center">
                                        <button className="btn btn-warning mr-1" onClick={ () => this.handleUpdateById(item.id) } >Update</button>
                                        <button className="btn btn-danger ml-1" onClick={ () => this.handleDeleteById(item.id) } >Remove</button>
                                    </th>
                                    <td>{ item.name }</td>
                                    <td>{ item.address }</td>
                                    <td className="text-center">{ item.status }</td>
                                </tr>    
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            )

            result = ( <HomeComponent header="&nbsp;" content={ viewContent } /> )
        } else
        if (match.path === '/employee/create') {
            const addContent = (
                <div>
                    { buttonBack }
                    <form className="mt-2">
                        <div className="form-group">
                            <label className="">Name</label>
                            <input className="form-control" type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
                        </div>
                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" name="status" value="1" checked={ this.state.status === '1' } onChange={ this.handleChange } />
                            <label className="form-check-label">Supir</label>
                        </div>
                        <div className="form-group">
                            <label className="">Address</label>
                            <textarea className="form-control" name="address" value={ this.state.address } onChange={ this.handleChange } />
                        </div>
                        <button type="reset" className="btn btn-dark mr-1">Reset</button>
                        <button type="button" className="btn btn-primary" onClick={ this.handleSave }>Submit</button>
                    </form>
                </div>
            )
            result = ( <HomeComponent header="Create New" content={ addContent } /> )
            
        } else
        if (this.props.location.pathname === '/employee/' + this.props.match.params.employeeId) {
                this.handleLoadById()
                const updateContent = (
                    <div>
                        { buttonBack }
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
                            <button type="button" className="btn btn-primary" onClick={ this.handleUpdate }>Submit</button>
                        </form>
                    </div>
                )
                return ( <HomeComponent header={ 'Update - ' + this.state.name } content={ updateContent } /> )
            
        }
    }

    render () {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                    <h1 className="display-4">Data Karyawan</h1>
                </div>
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm">
                        { this.result() }
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeComponent;