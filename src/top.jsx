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
                        <tr>
                            <td><a href='#' onClick={this.goHome}>메인</a></td>
                            <td><a href='#' onClick={this.goLogin}>로그인</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default TopPage;