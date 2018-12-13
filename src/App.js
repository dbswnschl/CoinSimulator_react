import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TopPage from './top';

import MainPage from './main';

import LoginPage from './login';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.changePage = this.changePage.bind(this);

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(`UPDATE ${prevProps}, ${prevState}`);
  }

  changePage(p) {
    // this.setState({page:p});
    console.log(`CHANGE ${p}`);
    this.setState({ page: p });
  }
  render() {
    return (
      <div>
        <TopPage state={this.state} changePage={this.changePage} />
        {this.state.page === 0 ? <MainPage /> : <LoginPage />}
      </div>
    );
  }
}

export default App;
