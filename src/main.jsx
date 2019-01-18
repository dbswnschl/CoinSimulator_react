import React, { Component } from 'react';
const axios = require('axios');


class MainPage extends Component {
    static defaultProps = {
        name: 'CoinSimulator'
    }
    constructor(props) {
        super(props);
        this.state = props.state;
        this.market_all();
        this.changeState = this.changeState.bind(this);
    }
    clickCoin = (t) => {
        // t.preventDefault();
        if(this.state.is_logged_in == 1){
            alert("로그인 후 이용 가능합니다.");
        }else{
            this.changeState(t.currentTarget.className)
        
        }
    }
    changeState=(market_name)=>{
        this.setState({
            market : market_name
        });
        this.props.changeState({
            market : market_name
        });
    }

    market_all = () => {
        let table = [];
        axios.get('https://api.upbit.com/v1/market/all').then((response) => {
            let coins = response.data;
            coins.forEach(element => {
                table.push(<tr onClick={this.clickCoin} className={element["market"]} key={element["market"]}>
                    <td  style={
                    {cursor:'pointer'}
                } >{element["korean_name"]}({element["english_name"]})</td>
                    <td style={
                        { width: '30%',
                        cursor:'pointer' }
                    }>{element["market"]}</td>
                </tr>);
            });
            this.setState({
                coin_table: table,
                filter_table: table
            });
        });


    }
    handleChange = (event) => {
        this.setState({
            filter: {
                value: event.target.value
            }
        });
        let str = event.target.value;
        if (str.length > 0) {
            let new_table = [];
            this.state.coin_table.forEach((element) => {
                element.props.children.every(e => {
                    let word = null;
                    if (typeof (e.props.children) == "string") {
                        word = e.props.children;
                    } else {
                        word = e.props.children.join('');
                    }
                    let sc = word.toLowerCase().search(str);
                    if (sc > -1) {
                        new_table.push(element);
                        return false;
                    }
                });
            });
            if (new_table.length > 0) {
                this.setState({
                    filter_table: new_table
                })
            }
        } else {
            this.setState({
                filter_table: this.state.coin_table
            });
        }

    }
    render() {
        return (
            <div>
                <h2>코인 선택</h2>
                <table style={
                    { width: '20%' }
                }>
                    <tbody>
                        <tr>
                            <td>필터</td>
                            <td><input type="text" placeholder="내용 입력" value={this.state.filter.value} onChange={this.handleChange} style={
                                { width: '90%' }
                            } /> </td>
                        </tr>
                    </tbody>
                </table>
                <table style={
                    { width: '20%' }
                }>
                    <tbody>
                        {this.state['filter_table']}
                    </tbody>
                </table>
            </div>

        );
    }
}
export default MainPage;