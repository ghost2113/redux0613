import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'

// 两个reducers 每个reducers都有一个state
// 合并reducers
@connect(
    state=>state.auth,
    {login,getUserData }
)
export default class Auth extends React.Component{
    componentDidMount(){
        console.log(1111)
        this.props.getUserData();
    }
    render(){
        return (
            <div>
               { this.props.isAuth? <Redirect to='/dashboard'></Redirect> : null}
               	<div>我的名字是{this.props.user}年龄是{this.props.age}</div>
                <h2>你需要登录后才有权限查看内容</h2>
                <button onClick={this.props.login}>去登陆</button>
            </div>
        )
    }
};
