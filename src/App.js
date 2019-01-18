import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TopPage from './top';

import MainPage from './main';

import LoginPage from './login';

import CoinDisplay from './CoinDisplay';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0 , is_logged_in : 0,
      coin_table: <tr><td></td></tr>,
      filter_table: <tr><td></td></tr>,
      market:null,
      filter: {
          value: ""
      }
    };
    this.changePage = this.changePage.bind(this);
    this.after_login = this.after_login.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  changeState(st){
    this.setState(st);
    this.setState({page:2})    
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(`UPDATE ${prevProps}, ${prevState}`);
  }

  changePage(p) {
    // this.setState({page:p});
    this.setState({ page: p });
    


  }
  showPage(){
    if ( this.state.page === 0){
      return <MainPage state = {this.state} changeState={this.changeState}/>;
    }else if (this.state.page === 1){
      return <LoginPage afterlogin={this.after_login} />
    }else if (this.state.page === 2){
      alert("준비중인 페이지 입니다."+this.state.market);
      return <CoinDisplay state = {this.state}/>;
    }else{
      return <MainPage state = {this.state} changeState={this.changeState}/>;
    }
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
        {this.showPage()}
      </div>
    );
  }
}

export default App;
