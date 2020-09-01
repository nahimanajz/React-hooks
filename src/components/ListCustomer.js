import React,  { Component } from 'react';

class ListCustomer extends Component {

    render(){

        const [first_name, email ] = this.props.customer;   
        //return console.log(first_name);
        //    return <div>{ first_name }</div> ;
    }
    
}
export default ListCustomer;