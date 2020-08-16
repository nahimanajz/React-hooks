import React, {Component } from 'react';

class MyForm extends Component {
    render(){
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>FirstName </label>
                        <input type="text" name="first_name" placeholder="first name" />

                    </div>

                    <div className="four wide field">
                        <label>LastName </label>
                        <input type="text" name="last_name" placeholder="last name" />
                    </div>
                    <div className="four wide field">
                        <label>E-mail </label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="four wide field">
                       <button className="ui primary button submit-button">Save</button>
                    </div>

                </div>
            </form>
            )
    }
}

export default MyForm;