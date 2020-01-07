/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LookupGroupComponent from './component/referensi/lookup_grp/LookupGroupComponent'
import AddLookupGroupComponent from './component/referensi/lookup_grp/AddLookupGroupComponent'
import EditLookupGroupComponent from './component/referensi/lookup_grp/EditLookupGroupComponent'

import DetailLookupComponent from './component/referensi/lookup/DetailLookupComponent'
import AddDetailLookupComponent from './component/referensi/lookup/AddDetailLookupComponent'
import EditDetailLookupComponent from './component/referensi/lookup/EditDetailLookupComponent'

import EmployeeComponent from './component/employee/EmployeeComponent'

import BusComponent from '../src/component/bus/BusComponent'

function App() {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <a className="my-0 mr-md-auto font-weight-normal" href="/">Company name</a>
                <nav className="nav my-2 my-md-0 mr-md-3">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Feature</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item text-dark" href="/bus">Data Bus</a>
                            <a className="dropdown-item text-dark" href="/employee">Data Karyawan</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Support</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item text-dark" href="/referensi">Tabel Referensi</a>
                        </div>
                    </li>
                </nav>
                <a className="btn btn-outline-danger" href="#">Sign out</a>
            </div>
            <Router>
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={LookupGroupComponent} />

                            <Route path="/referensi" exact component={LookupGroupComponent} />
                            <Route path="/referensi/create" exact component={AddLookupGroupComponent} />
                            <Route path="/referensi/:referensiId" exact component={EditLookupGroupComponent} />

                            <Route path="/referensi/detail/:referensiDetailId" exact component={DetailLookupComponent} />
                            <Route path="/referensi/detail/:referensiDetailId/create" exact component={AddDetailLookupComponent} />
                            <Route path="/referensi/detail/:referensiDetailId/update/:detailId" exact component={EditDetailLookupComponent} />

                            <Route path="/employee" exact component={EmployeeComponent} />
                            <Route path="/employee/create" exact component={EmployeeComponent} />
                            <Route path="/employee/:employeeId" exact component={EmployeeComponent} />

                            <Route path="/bus" exact component={BusComponent} />
                        </Switch>
                    </div>
                </main>
            </Router>

            <footer className="footer my-md-5 pt-md-5 border-top mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <span className="text-center d-block mb-3 text-muted">STMIK Eresha &copy; 2019 - Tugas Kelompok 13 (07TPLE001)</span>
                        </div>
                        <div className="col-sm-4">
                            <span className="text-muted">Person in charge:</span><br />
                            <small className="text-muted">161011400060 - Naba Ulviyan</small><br />
                            <small className="text-muted">161011400053 - Firman Rafiudin</small><br />
                            <small className="text-muted">161011400016 - Hamid Mulyadi</small><br />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
