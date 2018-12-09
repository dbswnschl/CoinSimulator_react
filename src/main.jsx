import React, { Component } from 'react';

class MainPage extends Component {
    static defaultProps = {
        name : 'CoinSimulator'
    }
    render(){
        return (
            <div>
                <b>메인</b> 페이지 입니다. {this.props.name}
            </div>
        );
    }
}
export default MainPage;