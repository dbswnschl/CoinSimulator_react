import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.action = "http://localhost:8000/api/signin/";
        this.method = 'post'
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
            if (response.data.result === 1){
                alert('로그인 성공');
            }else{
                alert('로그인 실패');
            }
        }).catch(err => {
            console.error(err);
            alert('서버로의 요청에 실패하였습니다.');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Email :
      <input type="email" onChange={this.handleEmailChange} />
                <br />
                Password :
                <input type="password" onChange={this.handlePasswordChange} />
                <br />

                <input type="submit" onSubmit={this.handleSubmit} value="SignIn" />
            </form>
        );
    }
}

export default SignIn;