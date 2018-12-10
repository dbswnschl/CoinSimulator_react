import React, { Component } from 'react';
// import './login.css';
import SignIn from './signin';
import SignUp from './signup';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        if (!this.state)
            this.state = { register: 1 };
        this.changeRegister = this.changeRegister.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
    }
    changeRegister() {
        this.setState({ register: 0 });
    }
    changeLogin() {
        this.setState({ register: 1 });
    }
    render() {
        return (
            <div> <table>
                <tr>
                    <td><a href='#' onClick={this.changeLogin}>로그인</a></td>
                    <td><a href='#' onClick={this.changeRegister}>회원가입</a></td>
                </tr>
                <td>
                    {this.state.register ? <SignIn /> : <SignUp />}
                </td>
            </table> </div>


        );
    }

}
export default LoginPage;