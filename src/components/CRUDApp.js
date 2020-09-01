import React, {Component} from 'react';

import axios from 'axios';
import MyForm from './MyForm';
import './CRUDApp.css';
import CustomerList from './CustomerList';
import Loader from './Loader';

class CRUDApp extends Component {
    state = {
            customers: [],
            customer:{},
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
    };
    onEdit = data => {
        // console.log(' app',data);
        this.setState({customer: data});
    };
    createCustomer = async data => {
        this.setState({loader: true});
        await axios.post(this.state.url, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
            });
        this.getCustomers();
    }
    editCustomer = async data=> {
        this.setState({customer: {}, loader: true});
        await axios.put(`${this.state.url}/${data.id}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        });
        
        this.getCustomers();
    }
    onFormSubmit = (data) => {
        // console.log('data', data);
    if(data.isEdit) {
        this.editCustomer(data);
        
    } else {
        this.createCustomer(data);
    }
    };    
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
                        <MyForm 
                            customer={this.state.customer} 
                            onFormSubmit ={this.onFormSubmit}    
                        />
                        
                        {this.state.loader? <Loader />: ''}
                        
                        <CustomerList 
                            customers={this.state.customers}
                            onDelete={ this.onDelete }
                            onEdit={this.onEdit}    
                            />
                    </div>
                </div>

            );
    }
}

export default CRUDApp;