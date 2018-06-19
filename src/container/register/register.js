import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

@connect(
	state=>state.user,
	{ register }
)

class Register extends React.Component{
    constructor(props) {
		super(props)
		this.state = {
			user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
		}
		this.handleregister = this.handleregister.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleregister(){
        this.props.register(this.state)
    }
    handleLogin(){
        this.props.history.push('/login')   
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (          
            <div className="register-container">
				{this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <WingBlank>
                <List>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
					<InputItem
						onChange={v=>this.handleChange('user',v)}
					>用户名</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						onChange={v=>this.handleChange('pwd',v)}
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						onChange={v=>this.handleChange('repeatpwd',v)}
					>确认密码</InputItem>
					<WhiteSpace />
					<RadioItem
						checked={this.state.type=='genius'}
						onChange={()=>this.handleChange('type','genius')}
					>
						牛人
					</RadioItem>
					<RadioItem
						checked={this.state.type=='boss'}
						onChange={()=>this.handleChange('type','boss')}
					>
						BOSS
					</RadioItem>				
				</List>
                <WhiteSpace />
                <Button type='primary' onClick={this.handleregister}>注册</Button>
                <WhiteSpace />
				<Button type='primary' onClick={this.handleLogin}>登录</Button>
                </WingBlank>                
            </div>
        )
    }
}
export default Register;