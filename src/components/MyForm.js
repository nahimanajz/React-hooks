import React, {Component } from 'react';

class MyForm extends Component {
    state= {
        form: {first_name: "", last_name: "", email: "", isEdit: false},
        btnName: 'Save',
        btnClass: 'ui primary button submit-button'
    };
    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)) {
            // console.log('update');
            this.setState({
                form: {...this.props.customer, isEdit:true},
                btnName: 'Update',
                btnClass: 'ui orange  button submit-button'
            });
        }
    };
    handleChange = event => {
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    };
    onFormSubmit = event => {
        event.preventDefault();
        if(this.formValidation()){
            //send data in server
            this.props.onFormSubmit(this.state.form);
        }
        this.clearFields();
    };

    formValidation = () => {
        //first name
        if(document.getElementsByName('first_name')[0].value === ""){
            alert("Enter first name");
            return false;
        }
        if(document.getElementsByName('last_name')[0].value === ""){
            alert("Enter last name");
            return false;
        }
        if(document.getElementsByName('email')[0].value === ""){
            alert("Enter email");
            return false;
        }
        return true;
    };
    clearFields = () => {
        //change form state
        this.setState({
            form :{ first_name: "", last_name: "", email:"", isEdit: false }
        });

        //change the button save
        this.setState({btnName: 'Save'});

        //empty all fom fields 
        document.querySelector(".form").reset();
    };
    render(){
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>FirstName </label>
                        <input 
                            type="text" 
                            name="first_name" 
                            placeholder="first name" 
                            value={this.state.form.first_name}
                            onChange={this.handleChange}

                        />

                    </div>

                    <div className="four wide field">
                        <label>LastName </label>
                        <input 
                            type="text" 
                            name="last_name" 
                            placeholder="last name"
                            value={this.state.form.last_name}
                            onChange={this.handleChange}
                         />
                    </div>
                    <div className="four wide field">
                        <label>E-mail </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email"
                            value={this.state.form.email}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="four wide field">
                       <button className={this.state.className} onClick={this.onFormSubmit}>
                             {this.state.btnName}
                        </button>
                    </div>

                </div>
            </form>
            )
    }
}

export default MyForm;