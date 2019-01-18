import React, { Component } from 'react';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class CoinDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        this.display_coin();
    }
    display_coin() {
        let market_name = this.state.market;
        let table = [];
        let now = new Date();
        now.setDate(now.getDate() - 1)
        axios.get('https://api.upbit.com/v1/candles/minutes/1', {
            params: {
                market: market_name,
                count: 1
            }
        }).then((response) => {
            response.data.forEach(element => {

                table.push(<tr key={element.candle_date_time_kst}>
                    <td>한국시간 {element.candle_date_time_kst}</td>
                    <td>거래가격 <b>{element.trade_price}원</b></td>
                    <td>최고가격 {element.high_price}원</td>
                    <td>최저가격 {element.low_price}원</td>
                </tr>);
            });
        }).then(axios.get('https://api.upbit.com/v1/candles/minutes/1', {
            params: {
                market: market_name,
                to : now.toISOString(),
                count: 1
            }
        }).then((response) => {
            if (response.data.length < 1){
                table.push(<tr key="alert">한달전 기록이 존재하지 않습니다.</tr>);
            }
            response.data.forEach(element => {

                table.push(<tr key={element.candle_date_time_kst}>
                    <td>한국시간 {element.candle_date_time_kst}</td>
                    <td>거래가격 <b>{element.trade_price}원</b></td>
                    <td>최고가격 {element.high_price}원</td>
                    <td>최저가격 {element.low_price}원</td>
                </tr>);
            });
            this.setState({
                display_table: table
            });
        })
        ).then(()=>{
            this.setState({
                display_table: table
            });
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.market}</h2>

                <table>
                    <tbody>
                        {this.state.display_table}
                    </tbody>

                </table>
            </div>
        );
    }

}


export default withCookies(CoinDisplay);