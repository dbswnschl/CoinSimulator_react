import React, { Component } from 'react';
// import './login.css';
import SignIn from './signin';
import SignUp from './signup';
class LoginPage extends Component {

    constructor(props) {
        super(props);
        if (!this.state)
            this.state = { register: 1, isLoggedin: false };
        this.changeRegister = this.changeRegister.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.afterLogin = this.afterLogin.bind(this);
    }
    changeRegister() {
        this.setState({ register: 0 });
    }
    changeLogin() {
        this.setState({ register: 1 });
    }
    afterLogin(cks) {
        this.cookies = cks;
        this.setState({ isLoggedin: true });
        this.props.afterlogin(this.cookies);
    }
    render() {
        return (
            <div>
                
                <table>
                    <tbody>
                    <tr><td><a href='#' onClick={this.changeLogin}>로그인</a></td>
                        <td><a href='#' onClick={this.changeRegister}>회원가입</a></td>
                    </tr>
                    <tr>
                    <td>
                        {this.state.register ? <SignIn afterlogin={this.afterLogin} /> : <SignUp />}
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        );
    }

}
export default LoginPage;