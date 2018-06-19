import React from 'react'
import logoImg from './job.png'
import './logo.css'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo">
                <img src={logoImg}  alt="logo未显示" title="项目logo"/>            
            </div>
        )
    }
}
export default Logo;