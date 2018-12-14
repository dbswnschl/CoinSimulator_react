import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.action = "http://localhost:8000/api/books/";
        this.method = 'post'
        this.formData = new FormData();
        this.isConfirmPassword = null;
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
        if (this.isConfirmPassword) {
            let passAlert = document.getElementById('passAlert');
            passAlert.innerText = "비밀번호를 다시 확인해 주세요!";
            passAlert.style.color = 'red';
            this.isConfirmPassword = false;
        }
    }
    handlePasswordConfirmChange = (event) => {
        let passAlert = document.getElementById('passAlert');
        if (this.state.password !== event.target.value) {
            passAlert.innerText = "비밀번호를 다시 확인해 주세요!";
            passAlert.style.color = 'red';
        } else {
            passAlert.innerText = "올바른 비밀번호 입니다.";
            passAlert.style.color = 'green';
            this.isConfirmPassword = true;
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isConfirmPassword) {


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
            }).catch(err => {
                console.error(err);
                alert('서버로의 요청에 실패하였습니다.');
            });
        } else {
            alert('비밀번호를 확인해 주세요!');
        }
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
                Password Confirm: <input type="password" onChange={this.handlePasswordConfirmChange} /><br />
                <b id='passAlert'></b>
                <br />
                <input type="submit" value="SignUp" />
            </form >
        );
    }
}

export default SignUp;