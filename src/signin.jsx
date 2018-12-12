import React, { Component } from 'react';

class SignIn extends Component {
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            Email :
      <input type="email" />
            <br />
            Password :
                <input type="password" />
            <br />
            
            <input type="submit" value="SignIn" />
        </form>
        );
    }
}

export default SignIn;