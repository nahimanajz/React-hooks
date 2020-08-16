import React, {Component} from 'react';

import axios from 'axios';
import MyForm from './MyForm';
import './CRUDApp.css';
import CustomerList from './CustomerList';
import Loader from './Loader';

class CRUDApp extends Component {
    state = {
            customers: [],
            loader: false,
            url: "http://localhost/laravel-rest-api/public/api/customers"
    };
    getCustomers = async () => {
        this.setState({ loader: true });
       const customers = await axios.get(this.state.url);
       this.setState({ customers: customers.data, loader:false });
    };
     componentDidMount(){
     this.getCustomers();
     };
     deleteCustomer = async (id) => {
         this.setState({loader: true});
         await axios.delete(`${this.state.url}/${id}`);

         this.getCustomers();

     }
    onDelete = id => {
        this.deleteCustomer(id);
    }    
    render() {
        return (
                <div>
                    <div className="ui fixed inverted menu">
                        <div className="ui container">
                            <a className="header item" href="#">
                                React JS CRUD with Laravel API
                            </a>
                        </div>
                    </div>
                    <div className="ui main container">
                        <MyForm />
                        {this.state.loader? <Loader />: ''}
                        <CustomerList customers={this.state.customers} onDelete={ this.onDelete }/>
                    </div>
                </div>

            );
    }
}

export default CRUDApp;