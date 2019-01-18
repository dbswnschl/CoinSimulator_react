import React, { Component } from 'react';
const axios = require('axios');


class MainPage extends Component {
    static defaultProps = {
        name: 'CoinSimulator'
    }
    constructor(props){
        super(props);
        this.state = {coin_table:<tr><td></td></tr>}
        this.market_all();
    }
    market_all = ()=>{
        let table = [];
            axios.get('https://api.upbit.com/v1/market/all').then((response)=>{
            let coins = response.data;
            coins.forEach(element => {
                table.push(<tr key={element["market"]}>
                             <td>{element["korean_name"]}({element["english_name"]})</td>
                             <td>{element["market"]}</td>
                         </tr>);
            });
            this.setState({coin_table:table});
            console.log(this.state);
        });
            

    }

    render() {
        return (
            <div>
                <b>메인</b> 페이지 입니다.
                <h2>코인 선택</h2>
                <table>
                    <tbody>
                    {this.state['coin_table']}
                    </tbody>
                </table>
            </div>

        );
    }
}
export default MainPage;