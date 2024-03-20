import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('Username: ' + this.state.username + '\nPassword: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='flex flex-col justify-center py-16 items-center'>
                <div className='flex items-center'>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="ml-4 mb-2 px-3 text-gray-500 outline-none border-2 focus:border-indigo-600 shadow-sm rounded-lg" />
                </div>

                <div className='flex items-center'>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="ml-4 mb-2 px-3 text-gray-500 outline-none border-2 focus:border-indigo-600 shadow-sm rounded-lg" />
                </div>
                <button className='py-2 px-6 bg-indigo-600 text-white rounded-md'>Login </button>
            </form>
        );
    }
}

export default LoginForm;
