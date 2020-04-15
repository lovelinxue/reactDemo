import React from 'react'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from './pages/app'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail'
import NoPage from './pages/404'

export default function IRouter(){
    return <Router>
         <Switch>
            <Route exact path='/' component={App}/ >>
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home}>
                {/* 重定向的使用 */}
                {/* <Redirect to='/login'/> */}
            </Route>   
            <Route path='/detail/:goodsID' component={Detail} />
            <Route path='*' component={NoPage} />
         </Switch>
    </Router>
}