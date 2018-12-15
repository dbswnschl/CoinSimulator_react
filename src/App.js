import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TopPage from './top';

import MainPage from './main';

import LoginPage from './login';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0 , is_logged_in : 0};
    this.changePage = this.changePage.bind(this);
    this.after_login = this.after_login.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(`UPDATE ${prevProps}, ${prevState}`);
  }

  changePage(p) {
    // this.setState({page:p});
    this.setState({ page: p });
  }
  after_login(cks){
    this.cookies = cks;
    this.changePage(0);
    this.setState({is_logged_in : true});
  }
  render() {
    return (
      <div>
        <TopPage state={this.state} changePage={this.changePage} />
        {this.state.page === 0 ? <MainPage /> : <LoginPage afterlogin={this.after_login} />}
      </div>
    );
  }
}

export default App;
