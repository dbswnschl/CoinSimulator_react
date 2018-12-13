import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.action = "http://localhost:8000/api/books/";
        this.method = 'post'
        this.formData = new FormData();
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(this.action, {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            console.log(response);
            if (response.data.result === '-2') {
                alert('아이디 중복!');
            } else if (response.data.result === '1') {
                alert("회원가입 성공!");
            }
        }).catch(err => err);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} action={this.action} method={this.method}>
                Email :
          <input type="email" onChange={this.handleEmailChange} name='email' />
                <br />
                Password :
                    <input type="password" onChange={this.handlePasswordChange} name='password' />
                <br />
                Password Confirm : <input type="password" />
                <br />
                <input type="submit" value="SignUp" />
            </form>
        );
    }
}

export default SignUp;