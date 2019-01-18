import React, { Component } from 'react';
const axios = require('axios');


class MainPage extends Component {
    static defaultProps = {
        name: 'CoinSimulator'
    }
    constructor(props) {
        super(props);
        this.state = {
            coin_table: <tr><td></td></tr>,
            filter_table: <tr><td></td></tr>,
            filter: {
                value: ""
            }
        }
        this.market_all();
    }
    market_all = () => {
        let table = [];
        axios.get('https://api.upbit.com/v1/market/all').then((response) => {
            let coins = response.data;
            coins.forEach(element => {
                table.push(<tr key={element["market"]}>
                    <td >{element["korean_name"]}({element["english_name"]})</td>
                    <td  style={
                    { width: '30%' }
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
                    if (sc > -1){
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
        }else{
            this.setState({
                filter_table: this.state.coin_table
            });
        }

    }
    render() {
        return (
            <div>
                <b>메인</b> 페이지 입니다.
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