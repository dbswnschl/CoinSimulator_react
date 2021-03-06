import React, { Component } from 'react';
import './top.css';
class TopPage extends Component {
    constructor(props){
        super(props);
        this.state = props.state;
        // console.log(`STATE ${JSON.stringify(props)}`);
    }
    goLogin = () => {
        this.props.changePage(1);
    }
    goHome = ()=>{
        this.props.changePage(0);
    }

  componentDidUpdate(prevProps, prevState){
    // console.log(`UPDATE ${prevProps}, ${prevState}`);
  }
    render() {
        return (
            <div>
                <div className='logo'>LOGO</div>
                <div className='menus'>
                    <table>
                        <tbody>
                        <tr>
                            <td><a href='#' onClick={this.goHome}>메인</a></td>
                            <td>
                                {this.props.state.is_logged_in === 0 ? <a href='#' onClick={this.goLogin}>로그인</a> : <a href = '#'>로그아웃</a>}
                                </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default TopPage;