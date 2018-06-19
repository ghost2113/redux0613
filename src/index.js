import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware,compose} from 'redux'//applyMiddleware开启中间件thunk 支持异步 compose 建立和chrome redux插件的联系
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk'//支持异步
import { 
    BrowserRouter, 
    Route, 
    Redirect,
    Switch 
} from 'react-router-dom'
//import { counter } from './index.redux';//合并所有的reducer 去除这一行
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import reducers from './reducer'
import "./config" 
//开启中间件
const store = createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  )
);
function Boss(){
	return <h2>BOSS页面</h2>
}
ReactDom.render(
    (<Provider store ={ store }>
        <BrowserRouter>
            <Switch>
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>                
            </Switch>             
        </BrowserRouter>
    </Provider>) ,
  document.getElementById('root')
);