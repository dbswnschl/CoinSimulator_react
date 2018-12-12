import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Email :
          <input type="email" />
                <br />
                Password :
                    <input type="password" />
                <br />
                Password Confirm : <input type="password" />
                <br />
                <input type="submit" value="SignUp" />
            </form>
        );
    }
}

export default SignUp;